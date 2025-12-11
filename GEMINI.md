# Project Context: MoveUp

## Project Overview
**MoveUp** is a modern web application built with **Next.js 15** (App Router) and **React 19**. It features a rich, interactive UI leveraging **Tailwind CSS 4**, **Framer Motion**, and **Three.js** for 3D elements. The project is set up for high-performance development using **Turbopack**.

## Tech Stack

### Core
*   **Framework:** Next.js 15.3.5
*   **Language:** TypeScript
*   **UI Library:** React 19
*   **Styling:** Tailwind CSS 4 (with `tailwindcss-animate`)
*   **Icons:** Lucide React, React Icons, Tabler Icons

### UI & Animation
*   **Component System:** shadcn/ui (Radix UI primitives)
*   **Animations:** Framer Motion, Motion One
*   **3D/Visuals:** React Three Fiber, Drei, Three.js, Cobe (Globe), TSParticles
*   **Carousels:** Embla Carousel

### Backend & Data
*   **Database ORM:** Drizzle ORM (`drizzle-orm`, `drizzle-kit`)
*   **Database Client:** LibSQL (Turso)
*   **Authentication:** Better Auth
*   **Validation:** Zod + React Hook Form

## Project Structure

The project follows the standard Next.js App Router structure within a `src` directory:

*   `src/app`: App Router pages, layouts, and global styles (`globals.css`).
*   `src/components`: React components.
    *   `src/components/ui`: Reusable UI components (shadcn/ui).
*   `src/lib`: Utility functions (e.g., `utils.ts` for `cn`), database clients, and configurations.
*   `src/hooks`: Custom React hooks.
*   `src/visual-edits`: Specific directory for visual editing tools/loaders.

## Key Commands

*   **Development:** `npm run dev` (Runs with `--turbopack`)
*   **Build:** `npm run build`
*   **Start:** `npm run start`
*   **Lint:** `npm run lint`

## Development Conventions

*   **Imports:** Use absolute imports with the `@/` alias (e.g., `import { Button } from "@/components/ui/button"`).
*   **Styling:** Use Tailwind utility classes. Combine classes using `cn()` helper (clsx + tailwind-merge).
*   **Components:** Prefer small, composable components. UI primitives are located in `src/components/ui`.
*   **State Management:** React hooks (useState, useEffect) and potentially Context API for global state.
*   **Forms:** Use `react-hook-form` with `zod` resolvers for schema validation.

## Configuration Files
*   `next.config.ts`: Next.js configuration (Turbopack rules, image patterns).
*   `components.json`: shadcn/ui configuration.
*   `eslint.config.mjs`: ESLint configuration.
*   `postcss.config.mjs`: PostCSS setup (for Tailwind).
