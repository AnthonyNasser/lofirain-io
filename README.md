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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Unlisted Mac preview

The Mac download page is `/mac`; the ZIP is
`/downloads/mac/LofiRainMac.zip`. Neither is linked from public navigation.
The page and download send `X-Robots-Tag: noindex, nofollow, noarchive`, and the
page also includes robots metadata. This is an unlisted public download, not an
authenticated page.

To update it, replace `public/downloads/mac/LofiRainMac.zip` with the tested
Release archive from the sibling app's `output/mac-build/LofiRainMac.zip`, update
the displayed version if needed, and publish. The current archive contains the
Apple silicon build for macOS 14+, version 1.6.1. It is development-signed and not
notarized; installation guidance is included on the page.

Version 1.6.1 prefetches the next five queued songs and prepares the next player
while music is playing, so cached song changes do not wait on a download.
