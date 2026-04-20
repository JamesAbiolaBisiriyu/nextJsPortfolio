# Next.js Portfolio Starter

Modern portfolio site built with Next.js 15, TypeScript, and Tailwind CSS.

## Overview

This project is a personal portfolio website with:

- A landing page with navigation to all sections
- Dedicated pages for About, Work, Skills, and Contact
- Project cards backed by JSON data
- Responsive layouts and gradient-based visual styling
- Next.js image optimization in the Work section
- Static/server-rendered routes through the App Router

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- React Icons
- Radix Slot and class-variance-authority for shared UI primitives

## Project Structure

```text
app/
	layout.tsx      Root layout, global metadata, and background video
	page.tsx        Home page with navigation and socials
	about/page.tsx  About page
	work/page.tsx   Projects page
	skills/page.tsx Skills page
	contact/page.tsx Contact page
	data/           JSON content for projects and skills
components/
	ui/button.tsx   Shared button component
lib/utils.ts      Shared utility helpers
public/           Static assets such as images and background video
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

- `npm run dev` - start the development server with Turbopack
- `npm run build` - create a production build
- `npm run start` - start the production server
- `npm run lint` - run Next.js linting

## Routing

This project uses file-based routing in the App Router:

- `/` -> Home
- `/about` -> About Me
- `/work` -> Project showcase
- `/skills` -> Skills overview
- `/contact` -> Contact form and contact details

## Deployment

The app is ready to deploy on Vercel or any platform that supports Next.js.

Recommended production steps:

1. Run `npm run build`
2. Fix any build-time issues
3. Deploy the resulting Next.js app

## Notes

- Project and skills data live in JSON files under `app/data`.
- The Work page currently uses project images from the `public` folder.
- The background video is loaded from `public/bgvid.mp4`.

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
