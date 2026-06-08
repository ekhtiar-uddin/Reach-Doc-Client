# ReachDoc Frontend

A modern healthcare platform frontend for patient booking, doctor management, and AI-assisted discovery. Built with the Next.js App Router, server actions, and a modular component system to support multiple user roles (patient, doctor, admin).

## Highlights

- Role-aware dashboards and navigation for admin, doctor, and patient experiences.
- Authentication with access and refresh token cookies and role-based redirects.
- AI-inspired consultation flow with doctor search, filters, and pagination.
- Video call UI experience for virtual consultations.
- Component-driven UI with Tailwind CSS and shadcn/ui primitives.

## Tech Stack

- Next.js (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui and Radix UI
- Zod validation
- Sonner toast notifications
- Framer Motion animations

## Project Structure

- App Router pages and layouts live under [src/app](src/app).
- UI components and feature modules live under [src/components](src/components).
- Data access and server actions live under [src/services](src/services).
- Shared utilities and auth helpers live under [src/lib](src/lib).
- Zod schemas live under [src/zod](src/zod).
- Domain types live under [src/types](src/types).

## Key Routes

- Public landing: `/`
- Auth: `/login`, `/register`, `/reset-password`
- Consultation: `/consultation`
- Video call: `/video-call`
- Patient dashboard: `/dashboard`
- Doctor dashboard: `/doctor/dashboard`
- Admin dashboard: `/admin/dashboard`

## Authentication and Authorization

- Uses access and refresh tokens stored as secure, httpOnly cookies.
- Server actions verify JWTs to determine role and routing.
- Role-based route ownership and dashboard defaults are centralized in [src/lib/auth-utils.ts](src/lib/auth-utils.ts).

## API Integration

All API calls are routed through a shared server fetch helper that:

- Targets the backend base URL from `NEXT_PUBLIC_BASE_API_URL`.
- Refreshes access tokens when needed using the refresh token cookie.
- Supports standard HTTP verbs and JSON or multipart payloads.

See [src/lib/server-fetch.ts](src/lib/server-fetch.ts) for details.

## Environment Variables

Create a local environment file (for example, `.env.local`) with the following values:

```bash
NEXT_PUBLIC_BASE_API_URL=http://localhost:5000/api/v1
JWT_SECRET=your_jwt_secret
```

`JWT_SECRET` is used on the server to verify tokens in server actions. Do not expose production secrets in the client.

## Getting Started

Install dependencies and start the development server:

<!-- specialties -->

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the production bundle.
- `npm run start` - Start the production server.
- `npm run lint` - Run ESLint.

## UI and Assets

- Global styles are defined in [src/app/globals.css](src/app/globals.css).
- Remote images are allowed from Cloudinary via Next.js image settings.
- The primary font is loaded via `next/font` (Outfit).

## Notes

- The login page provides demo credentials buttons for admin, doctor, and patient roles.
- Some dashboard pages are placeholders and can be extended with domain-specific views.

## Deployment

Build and run:

```bash
npm run build
npm run start
```

Ensure the backend API is reachable and environment variables are set in your hosting provider.
