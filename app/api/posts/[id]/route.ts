import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { posts } from "@/lib/schema";
import { auth } from "@/lib/auth";
import { eq } from "drizzle-orm";
import slugify from "slugify";

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    const [post] = await db.select().from(posts).where(eq(posts.id, postId));

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    const body = await request.json();
    const { title, content, excerpt, featuredImageUrl, published } = body;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // Get existing post
    const [existingPost] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, postId));

    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Update slug if title changed
    let slug = existingPost.slug;
    if (title !== existingPost.title) {
      slug = slugify(title, { lower: true, strict: true });
      const allPosts = await db.select().from(posts);
      const slugExists = allPosts.some((p) => p.slug === slug && p.id !== postId);
      if (slugExists) {
        slug = `${slug}-${Date.now()}`;
      }
    }

    // Set publishedAt if being published for the first time
    let publishedAt = existingPost.publishedAt;
    if (published && !existingPost.published) {
      publishedAt = new Date();
    }

    const [updatedPost] = await db
      .update(posts)
      .set({
        title,
        slug,
        content,
        excerpt: excerpt || null,
        featuredImageUrl: featuredImageUrl || null,
        published,
        publishedAt,
        updatedAt: new Date(),
      })
      .where(eq(posts.id, postId))
      .returning();

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
      return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
    }

    await db.delete(posts).where(eq(posts.id, postId));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
