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
`/downloads/mac/lofirain-mac.zip`. Neither is linked from public navigation.
The page and download send `X-Robots-Tag: noindex, nofollow, noarchive`, and the
page also includes robots metadata. This is an unlisted public download, not an
authenticated page.

To update it, replace `public/downloads/mac/lofirain-mac.zip` with the tested
Release archive from the sibling app's `output/mac-build/lofirain-mac.zip`, update
the displayed version if needed, and publish. The current archive contains the
Apple silicon build for macOS 14+, version 1.7.3. It is development-signed and not
notarized; installation guidance is included on the page.

Version 1.6.1 prefetches the next five queued songs and prepares the next player
while music is playing, so cached song changes do not wait on a download.

Version 1.6.2 bounds stalled downloads and prefetch waits, adds a loading
deadline, and provides Cancel (Command-period) with retry after a timeout.

Version 1.7.0 names the application `lofirain.app`, requires a LofiRain account
and server-verified Premium, and includes all six companions and all song packs.
The iPhone account/receipt-link update must ship for existing subscribers to
activate Mac access. Older download URLs redirect to the current ZIP.

It opens directly under its menu bar icon, preserves ambient loops between songs,
refreshes all ten ambient recordings, and adds an optional desktop companion.
Timed sessions end with a chime, companion celebration and Take a break / Keep
listening actions. Mac verification: 46 passing tests; iPhone Simulator and Mac
Release builds pass. See the sibling app MAC_APP.md for account release dependencies.

## Mac sign-in

Version 1.7.3 uses Sign in with Apple in the macOS system authentication
window. It does not use iPhone pairing or a password form. Live sign-in
requires the Apple Services ID, OAuth secret, and redirect URL to be
configured in Supabase. See the sibling app's `MAC_APP.md` for setup.

The older `/mac/verify` page remains available for 1.7.1 builds.
