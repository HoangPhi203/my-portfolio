This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Prisma and PostgreSQL

The project uses Prisma ORM 7.10.1 with the PostgreSQL provider. The Prisma schema includes users, tracks, playlists, and the playlist-to-track relationship. User passwords are represented by `passwordHash`; never store plaintext passwords.

1. Create a PostgreSQL database with your chosen provider and obtain its connection URI.
2. Add the URI to the root `.env` file as `DATABASE_URL`. Keep credentials private and percent-encode reserved characters in the username or password:

   ```dotenv
   DATABASE_URL="postgresql://<USER>:<PASSWORD>@<HOST>:5432/<DATABASE>?sslmode=require"
   ```

   Replace the placeholders with values from your provider. Keep `.env` out of version control; `.env.example` is only a template.
3. From the project root, validate the schema, generate Prisma Client, and push the initial schema:

   ```bash
   npm run db:validate
   npm run db:generate
   npm run db:push
   ```

   `db:push` creates/updates tables without creating migration files. Use it for initial development setup; use reviewed migrations before production schema changes.

Prisma 7 reads its connection URL from `prisma.config.ts`, so the URL belongs in the config rather than in the `datasource` block in `schema.prisma`. If Prisma reports that `DATABASE_URL` is missing, verify it is set in the root `.env` and rerun the command from the project root.

## Authentication

The sign-in and account creation dialogs are UI placeholders and are not connected to an authentication service yet.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
