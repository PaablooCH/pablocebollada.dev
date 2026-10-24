Personal portfolio for Pablo Cebollada, built with Next.js, React, TypeScript, Tailwind CSS and Framer Motion.

## Getting Started

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks and production build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The build downloads Inter and JetBrains Mono through `next/font/google`, so it needs access to Google Fonts. The generated site serves those fonts locally.

## Project structure

- `src/app/page.tsx`: home page and interactive terminal introduction.
- `src/app/about/`: biography, tools, experience and education.
- `src/app/projects/`: project cards and individual project pages.
- `src/app/resources/`: profile content, route configuration and shared metadata.
- `src/components/`: navigation and shared interface components.
- `src/app/globals.css`: shared colors, typography and component styles.
- `public/`: CV, images and video.

The canonical domain is configured in `src/app/resources/config.ts`. Keep route metadata and sitemap URLs aligned through that configuration.
