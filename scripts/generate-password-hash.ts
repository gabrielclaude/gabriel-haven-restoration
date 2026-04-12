import { hash } from "bcryptjs";

// Run with: npx tsx scripts/generate-password-hash.ts YOUR_PASSWORD
// This generates a bcrypt hash for your admin password

async function generateHash() {
  const password = process.argv[2];

  if (!password) {
    console.error("Usage: npx tsx scripts/generate-password-hash.ts YOUR_PASSWORD");
    process.exit(1);
  }

  const passwordHash = await hash(password, 10);

  console.log("\n=== Password Hash Generated ===\n");
  console.log("Add this to your environment variables:");
  console.log(`ADMIN_PASSWORD_HASH=${passwordHash}`);
  console.log("\n================================\n");
}

generateHash();
