import { config } from "dotenv";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { posts } from "../lib/schema";

// Load environment variables
config({ path: ".env.local" });

// This script seeds the database with initial content from the Blogspot migration
// Run with: npx tsx scripts/seed.ts

const seedPosts = [
  {
    title: "Refinish the hardwood floors",
    slug: "refinish-hardwood-floors",
    content: `<p>Because I had to clear out a lot of items, I thought it would be an opportunity to sand and varnish the hardwood floors.</p>
<p>The floors had seen better days after years of use, but the bones were still good. I rented a drum sander and an edge sander to tackle the job properly.</p>
<p>After multiple passes with progressively finer grits, the natural beauty of the wood grain started to emerge. Three coats of polyurethane later, these floors look brand new again.</p>`,
    excerpt: "Sanding and varnishing the original hardwood floors to restore their natural beauty.",
    published: true,
    publishedAt: new Date("2024-08-07"),
  },
  {
    title: "Rebuild the basement",
    slug: "rebuild-basement",
    content: `<p>The basement needed significant work to create proper enclosure rooms for essential utilities.</p>
<p>We built dedicated spaces for:</p>
<ul>
<li>Pump tank room</li>
<li>Water filter system</li>
<li>Water heater</li>
<li>New laundry room</li>
</ul>
<p>Framing, insulating, and finishing these rooms transformed the basement from a cluttered utility space into organized, functional areas.</p>`,
    excerpt: "Rebuilding enclosure rooms for utilities and creating a new laundry room.",
    published: true,
    publishedAt: new Date("2024-09-10"),
  },
  {
    title: "Painting the house",
    slug: "painting-house",
    content: `<p>We cleared away the tree branches that were touching the house and added a fresh coat of primer, paint, and repairs on the trim.</p>
<p>The exterior had been weathered by years of exposure. We power-washed the siding, scraped loose paint, and applied a quality primer before the finish coats.</p>
<p>The trim work required extra attention - filling gaps, sanding smooth, and adding crisp new paint made a dramatic difference in the home's curb appeal.</p>`,
    excerpt: "Exterior painting, trim repairs, and clearing overgrown vegetation from the house.",
    published: true,
    publishedAt: new Date("2024-09-18"),
  },
  {
    title: "New Gutters and Down Spouts",
    slug: "new-gutters-downspouts",
    content: `<p>We added new gutters and down spouts to make sure the water is correctly transited away from the house.</p>
<p>Proper water management is crucial for protecting the foundation and preventing basement moisture issues. The old gutters were sagging and leaking at the seams.</p>
<p>New seamless aluminum gutters were installed around the entire roofline, with downspouts positioned to direct water well away from the foundation.</p>`,
    excerpt: "Installing new gutters and downspouts for proper water management.",
    published: true,
    publishedAt: new Date("2024-10-23"),
  },
  {
    title: "Restored the deck and added a roof",
    slug: "deck-restoration-roof",
    content: `<p>We restored the deck and added a roof over the deck area.</p>
<p>The existing deck boards were weathered and some were starting to rot. We replaced damaged boards, sanded the surface, and applied a protective stain.</p>
<p>Adding a roof structure over the deck creates a covered outdoor living space - perfect for enjoying the outdoors rain or shine. The roof ties into the existing roofline seamlessly.</p>`,
    excerpt: "Restoring the deck surface and adding a covered roof structure.",
    published: true,
    publishedAt: new Date("2024-12-15"),
  },
  {
    title: "The Final Designer Touches",
    slug: "final-designer-touches",
    content: `<p>Finally we were ready for my wife and daughter to make the designer special touch to finish up.</p>
<p>After months of construction and renovation work, it was time for the finishing touches that turn a house into a home.</p>
<p>Selecting paint colors, arranging furniture, hanging artwork, and adding decorative elements - these personal touches bring warmth and personality to every room.</p>`,
    excerpt: "Adding the final designer touches with family to complete the restoration.",
    published: true,
    publishedAt: new Date("2025-07-08"),
  },
];

async function seed() {
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL environment variable is not set");
    process.exit(1);
  }

  const sql = neon(process.env.DATABASE_URL);
  const db = drizzle(sql);

  console.log("Seeding database...");

  try {
    // Insert posts
    for (const post of seedPosts) {
      console.log(`Creating post: ${post.title}`);
      await db.insert(posts).values({
        title: post.title,
        slug: post.slug,
        content: post.content,
        excerpt: post.excerpt,
        published: post.published,
        publishedAt: post.publishedAt,
        createdAt: post.publishedAt,
        updatedAt: post.publishedAt,
      });
    }

    console.log("Seed completed successfully!");
    console.log(`Created ${seedPosts.length} posts`);
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
}

seed();
