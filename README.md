# 🎬 Bufflicks: Cinematic Movie Discovery Platform

Bufflicks is a modern, high-fidelity web application designed for movie and television enthusiasts. Built with a focus on pixel-perfect UI translation from custom Figma designs, it delivers an immersive, cinematic browsing and viewing experience. 

The platform bridges the gap between a sleek discovery interface and an interactive theater mode, featuring dynamic layouts, ambient background gradients, and seamless state-driven component rendering.

---

## ✨ Core Features

### 🎨 Pixel-Perfect UI/UX Architecture
- **Figma-Driven Layouts:** Exacting mathematical precision for component dimensions (e.g., 412x600px hero posters) and typography scales.
- **Ambient Gradients:** Custom linear and radial gradient backgrounds that dynamically match cinematic themes.
- **Responsive Grids:** Fluid CSS grid implementations that adapt gracefully from mobile devices to massive 1800px ultra-wide desktop displays.

### 🧭 Seamless Navigation & Discovery
- **Dynamic Content Filtering:** A scrollable, snap-to-grid filter bar allowing users to seamlessly toggle between "New Trailers", "Bites", "Release Calendar", and more without page reloads.
- **Detailed Movie View:** Dedicated pages featuring metadata mapping, accurate score badges (IMDb, TMDb), genre pills, and studio subscriber statistics.

### 🎥 Interactive Viewing Modes
- **Cinematic Lightbox:** Clicking any trailer thumbnail dims the ambient background and mounts a massive 16:9 4K-ready video player modal centered on the screen.
- **Theater 'Watch' Mode:** A dedicated route that transitions the UI into a live-stream environment, featuring a full-width video player, live chat simulation sidebar, and community comment threads.

---

## 🛠️ Technical Stack

**Frontend Framework & Ecosystem**
- **React 18:** Component-based UI architecture utilizing Hooks (`useState`, `useEffect`) for localized state management and DOM manipulation.
- **Vite:** Next-generation frontend tooling for lightning-fast HMR (Hot Module Replacement) and optimized production builds.
- **React Router DOM:** Client-side routing enabling seamless transitions between the Discovery dashboard, Authentication flows, and isolated Movie/Watch pages.

**Styling & Assets**
- **Tailwind CSS:** Utility-first CSS framework used for rapid, inline responsive design, complex flexbox/grid alignments, and custom arbitrary values (e.g., `object-[30%_center]`).
- **Lucide React:** Clean, consistent, and highly customizable SVG iconography.

---

## 📂 Project Structure

```text
Bufflicks/
├── public/               # Static assets (Favicons, manifest)
│   └── photos/           # Local image/poster directory
├── src/
│   ├── assets/           # Global styles and shared assets
│   ├── components/       # Reusable React components
│   │   ├── Auth.jsx      # Sign-in/Sign-up flow
│   │   ├── Discover.jsx  # Primary movie grid and filtering
│   │   ├── MovieDetail.jsx # Deep-dive metadata and synopsis layout
│   │   ├── Watch.jsx     # Theater mode with live chat and comments
│   │   └── BufflicksLayout.jsx # Persistent UI shell (Navbar/Sidebar)
│   ├── App.jsx           # Root component and Router configuration
│   └── main.jsx          # React DOM mounting and strict mode
├── index.html            # Entry HTML file
├── tailwind.config.js    # Custom Tailwind theme and breakpoint extensions
└── package.json          # Dependency management and script definitions
