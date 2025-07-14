# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run Svelte type checking
- `pnpm check:watch` - Run Svelte type checking in watch mode
- `pnpm format` - Format code with Prettier
- `pnpm lint` - Check code formatting with Prettier

## Project Architecture

This is a SvelteKit 5 application with TypeScript, deployed to Vercel. The project uses:

### Tech Stack
- **Frontend**: Svelte 5 with TypeScript
- **Styling**: Tailwind CSS v4 with DaisyUI components
- **Build**: Vite with SvelteKit
- **Package Manager**: pnpm
- **Icons**: Tabler Icons for Svelte
- **Content**: MDSveX for markdown support
- **Deployment**: Vercel with Node.js 22.x runtime

### Project Structure
- `src/lib/` - Reusable components and utilities
  - `components/layout/` - Layout components (Header, Footer, Main)
  - `utils.ts` - Utility functions including `cn()` for class merging
- `src/routes/` - SvelteKit routes
  - `+layout.svelte` - Global layout with Header/Main/Footer structure
  - `+page.svelte` - Home page
- `static/` - Static assets

### Key Components
- **Header**: Responsive navigation with floating effect on scroll, uses DaisyUI navbar
- **Main**: Simple wrapper with full viewport height
- **Footer**: Brand footer with social links using Tabler icons

### Styling Approach
- Uses `cn()` utility function (clsx + tailwind-merge) for conditional class names
- DaisyUI components for consistent UI elements
- Tailwind v4 with custom configuration
- Responsive design with mobile-first approach

### TypeScript Patterns
- Uses Svelte 5 `$props()` and `$derived()` runes
- Module-level interfaces for component props
- Proper typing for Snippet children

### File Extensions
- `.svelte` - Svelte components
- `.svx` - Markdown files with Svelte components (MDSveX)

## Development Rules

Follow the Svelte 5 development rules from `.rules/svelte.md`:

### Key Principles
- Write concise, technical code with accurate Svelte 5 and SvelteKit examples
- Leverage SvelteKit's SSR and SSG capabilities
- Prioritize performance optimization and minimal JavaScript
- Use descriptive variable names and follow Svelte/SvelteKit conventions
- Organize files using SvelteKit's file-based routing system

### Code Style
- Use functional and declarative programming patterns
- Prefer iteration and modularization over code duplication
- Structure files: component logic, markup, styles, helpers, types
- Use lowercase with hyphens for component files (e.g., `auth-form.svelte`)
- Use PascalCase for component names, camelCase for variables/functions/props

### TypeScript Usage
- Use TypeScript for all code; prefer interfaces over types
- Avoid enums; use const objects instead
- Enable strict mode for better type safety

### Svelte 5 Runes
- `$state()` - Declare reactive state
- `$derived()` - Compute derived values
- `$effect()` - Manage side effects and lifecycle
- `$props()` - Declare component props
- `$bindable()` - Create two-way bindable props
- `$inspect()` - Debug reactive state (development only)

### State Management
- Use classes for complex state management (state machines)
- Create `.svelte.ts` files for component logic and state machines
- Export class instances for shared state

### Performance
- Leverage Svelte's compile-time optimizations
- Use `{#key}` blocks to force re-rendering when needed
- Implement code splitting using dynamic imports
- Use `$effect.tracking()` to optimize effect dependencies
- Minimize client-side JavaScript; leverage SSR and SSG

## Memories

- to memorize