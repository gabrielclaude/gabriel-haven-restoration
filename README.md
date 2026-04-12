# Gabriel Haven Restoration

A blog website documenting home restoration journey, built with Next.js, PostgreSQL, and Cloudinary.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Database**: Neon PostgreSQL
- **ORM**: Drizzle ORM
- **Auth**: NextAuth.js v5
- **Styling**: Tailwind CSS v4
- **Images**: Cloudinary
- **Rich Text Editor**: TipTap

## Prerequisites

- Node.js 18+
- A [Neon](https://neon.tech) account (free tier)
- A [Cloudinary](https://cloudinary.com) account (free tier)
- A [Vercel](https://vercel.com) account (free tier)

## Local Development Setup

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd gabriel-haven-restoration
npm install
```

### 2. Set Up Environment Variables

Copy the example env file:

```bash
cp .env.local.example .env.local
```

Then fill in the values:

```env
# Database (Neon PostgreSQL)
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require

# NextAuth
NEXTAUTH_SECRET=<generate with: openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000

# Admin credentials
ADMIN_EMAIL=your@email.com
ADMIN_PASSWORD_HASH=<generate with: npm run generate-hash YOUR_PASSWORD>

# Cloudinary
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### 3. Generate Admin Password Hash

```bash
npx tsx scripts/generate-password-hash.ts YOUR_PASSWORD
```

Copy the generated hash to `ADMIN_PASSWORD_HASH` in your `.env.local`.

### 4. Set Up Database

Push the schema to your Neon database:

```bash
npm run db:push
```

(Optional) Seed with initial blog posts:

```bash
npm run db:seed
```

### 5. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Admin panel: [http://localhost:3000/admin](http://localhost:3000/admin)

## Deploying to Vercel

### 1. Create Neon Database

1. Go to [Neon Console](https://console.neon.tech)
2. Create a new project
3. Copy the connection string (DATABASE_URL)

### 2. Create Cloudinary Account

1. Go to [Cloudinary](https://cloudinary.com/users/register_free)
2. Get your Cloud Name, API Key, and API Secret from the dashboard

### 3. Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/new)
3. Import your repository
4. Add environment variables:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`
   - `NEXTAUTH_URL` (set to `https://gabrielhavenrestoration.vercel.app`)
   - `ADMIN_EMAIL`
   - `ADMIN_PASSWORD_HASH`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
5. Deploy!

### 4. Initialize Database

After first deployment, run the database setup:

```bash
# In your local terminal with DATABASE_URL set
npm run db:push
npm run db:seed  # Optional: add initial posts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run db:push` | Push schema to database |
| `npm run db:generate` | Generate migration files |
| `npm run db:migrate` | Run migrations |
| `npm run db:studio` | Open Drizzle Studio |
| `npm run db:seed` | Seed database with posts |

## Project Structure

```
gabriel-haven-restoration/
├── app/
│   ├── admin/           # Admin panel pages
│   ├── api/             # API routes
│   ├── posts/           # Public post pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # React components
├── lib/                 # Utilities & config
│   ├── auth.ts          # NextAuth config
│   ├── cloudinary.ts    # Cloudinary config
│   ├── db.ts            # Database connection
│   └── schema.ts        # Drizzle schema
├── scripts/             # Utility scripts
└── drizzle/             # Database migrations
```

## Features

- Responsive design with warm & rustic theme
- Rich text editor for blog posts
- Image uploads via Cloudinary
- YouTube video embedding
- Admin authentication
- SEO-optimized pages
