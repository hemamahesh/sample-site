# Brahmaputra Udyog Pvt Ltd — Industrial Website

Modern high-performance B2B industrial website built for **Brahmaputra Udyog Pvt Ltd**, a Guwahati-based manufacturer and supplier of industrial piping solutions established in **1976**.

The platform provides a professional digital presence designed to improve credibility, product visibility, and dealer inquiries for contractors, infrastructure projects, and industrial buyers across Northeast India.

---

## Overview

This project implements a modern industrial company website featuring:

• Dynamic product catalogue
• SEO-optimized pages
• Dealer inquiry forms
• Manufacturing and infrastructure showcase
• Blog and resource section
• Headless CMS content management

The architecture is designed for **performance, scalability, and maintainability**.

---

## Tech Stack

Frontend Framework
Next.js 14 (App Router)

Language
TypeScript

Styling
Tailwind CSS

UI System
Component-based architecture inspired by Shadcn UI

Animations
Framer Motion

CMS
Sanity Headless CMS

Image Optimization
Next.js Image + CDN

Deployment
Vercel

---

## Key Features

Industrial Design System
Clean B2B layout built for manufacturing companies

Dynamic Product Pages
Products generated dynamically using CMS content

SEO Optimization
Automatic metadata generation and optimized page structure

Dealer Inquiry Forms
Lead capture for distributors and contractors

CMS Integration
Sanity Studio embedded directly inside the project

Performance Optimization
Image optimization, lazy loading, and code splitting

---

## Project Structure

app/
→ Next.js application routes

components/
→ reusable UI components

sections/
→ homepage and page layout sections

cms/
→ Sanity schema and configuration

lib/
→ utility functions and data fetching

styles/
→ global styles and Tailwind configuration

---

## Getting Started

### 1. Install dependencies

npm install

### 2. Run development server

npm run dev

Open:

http://localhost:3000

---

## CMS Setup (Sanity)

The project uses **Sanity** as a headless CMS.

Create a `.env.local` file in the project root:

NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

Access CMS studio at:

http://localhost:3000/studio

---

## Production Build

Create a production build:

npm run build

Start production server:

npm start

---

## Deployment

The project is optimized for **Vercel deployment**.

Steps:

1. Push repository to GitHub
2. Import repository into Vercel
3. Configure environment variables
4. Deploy

Vercel automatically detects the Next.js framework and handles build configuration.

---

## SEO Strategy

Target search keywords include:

PVC pipe manufacturer Guwahati
UPVC pipes Assam
Industrial pipe supplier Northeast India
Pipe fittings manufacturer Guwahati

Pages include structured metadata and internal linking to improve search visibility.

---

## Company Information

Company
Brahmaputra Udyog Pvt Ltd

Established
1976

Location
Pan Bazar, Guwahati, Assam, India

Industry
Industrial piping products including PVC pipes, UPVC pipes, fittings, and valves.

---

## License

This project was created as a demonstration and development prototype for a modern industrial company website.

All company information and branding belong to their respective owners.
