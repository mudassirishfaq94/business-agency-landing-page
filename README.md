# Aurum Strategy - UAE Business Agency Website

## Overview
**Aurum Strategy** is a premium corporate website for a high-end UAE business consultancy. The site features a luxury "Dark & Gold" aesthetic, sophisticated animations, and a comprehensive structure including services, team profiles, and a contact system.

## Project Structure
This project is built with:
*   **Vite**: Next-generation frontend tooling.
*   **Tailwind CSS v4**: Utility-first CSS framework for styling.
*   **Vanilla JavaScript**: Lightweight interactivity (no heavy framework overhead).

### Key Files
*   `index.html` - The main landing page (One-Page structure + Navigation).
*   `about.html` - Dedicated "About Us" page.
*   `services.html` - Dedicated "Services" page with glassmorphism cards.
*   `team.html` - Dedicated "Team" page with photo avatars.
*   `contact.html` - Dedicated "Contact" page with functional form styles.
*   `social_kit.html` - A utility page for generating social media mockups (Laptop/Mobile frames).
*   `src/style.css` - Custom styles and Tailwind directives.
*   `src/main.js` - Global scripts (Mobile menu, Scroll animations, Sliders, Accordions).

## Setup & Run

### Prerequisites
*   Node.js installed on your machine.

### Installation
1.  Clone or download the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```

### Development Server
To start the local development server:
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### Production Build
To create a production-ready build (optimized assets in `dist/`):
```bash
npm run build
```
To preview the build locally:
```bash
npm run preview
```

## Features
*   **Responsive Design**: Fully mobile-optimized.
*   **Smooth Animations**: Scroll-triggered fade-ins and slide-ups.
*   **Interactive UI**:
    *   Testimonial Slider.
    *   FAQ Accordion.
    *   Mobile Hamburger Menu.
    *   Glassmorphism Effects.
    *   Grayscale-to-Color hover effects on team photos.
*   **SEO Ready**: Meta tags and semantic HTML structure.

## Assets
Images are stored in the `img/` directory.
Team photos:
*   `Ahmed Al-faryad.jpeg`
*   `Sarah jenkins.jpeg`
*   `James chen.jpeg`

## License
Proprietary. All rights reserved.
