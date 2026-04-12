import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { posts } from "@/lib/schema";
import { auth } from "@/lib/auth";
import slugify from "slugify";
import { desc } from "drizzle-orm";

export async function GET() {
  try {
    const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));
    return NextResponse.json(allPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { title, content, excerpt, featuredImageUrl, published } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // Generate unique slug
    let slug = slugify(title, { lower: true, strict: true });
    const existingPosts = await db.select().from(posts);
    const slugExists = existingPosts.some((p) => p.slug === slug);
    if (slugExists) {
      slug = `${slug}-${Date.now()}`;
    }

    const [newPost] = await db
      .insert(posts)
      .values({
        title,
        slug,
        content,
        excerpt: excerpt || null,
        featuredImageUrl: featuredImageUrl || null,
        published: published || false,
        publishedAt: published ? new Date() : null,
      })
      .returning();

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
