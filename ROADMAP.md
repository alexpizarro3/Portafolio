# 🚀 Portfolio V9: The "Data Experience" Roadmap

This roadmap outlines the transformation of the portfolio into a world-class Data Analyst showcase, moving from a static site to a dynamic, high-performance application.

## Phase 1: Visual Renaissance ("Tech-Glass") 🎨
**Goal:** Create a stunning, premium "first impression" that sells the "Engineer/Analyst" persona immediately.

- **Typography & Theme**
    - [ ] Implement **Geist Mono** or **JetBrains Mono** for a code-editor aesthetic.
    - [ ] Define a "Deep Space" color palette with neon accents (Cyan/Violet).
- **The "Tech-Glass" Aesthetic**
    - [ ] Create a reusable **Glassmorphism System** (frosted cards, subtle borders, noise textures).
    - [ ] Implement "Reactive" cards that glow/distort on hover.
- **Component Polish**
    - [ ] **Hero**: Clean up the overlay, ensure 3D elements don't clash with text.
    - [ ] **Stats**: Replace static bars with **Animated Counters** (e.g., "5+ Years" counting up).
    - [ ] **Projects**: Redesign project cards to look like "Data Files" or "Mission Logs".

## Phase 2: Architectural Foundation 🏗️
**Goal:** Professionalize the codebase, separating logic from UI and enabling easy content updates.

- **Component Refactor**
    - [ ] **Atomic Design**: Split `components` into `ui/` (dumb) and `features/` (smart).
    - [ ] **Performance**: Implement `next/dynamic` for heavy 3D/Chart components.
- **Content Engine**
    - [ ] Integrate **MDX** or **Sanity.io** to manage projects and case studies.
    - [ ] Migrate static `data/*.ts` files to the new content engine.
    - [ ] Create a proper "Case Study" template layout.

## Phase 3: The "Wow" Factor (Motion & Experience) ✨
**Goal:** Make the application feel "alive" and fluid.

- **Fluid Navigation**
    - [ ] Implement **Lenis** for luxury smooth scrolling.
    - [ ] Add **Framer Motion** layout transitions between pages.
- **Data Storytelling**
    - [ ] **Interactive Viz**: Replace generic charts with **Visx** or **Nivo** interactive dashboards.
    - [ ] **Scrollytelling**: Animate elements based on scroll position in the Hero/About sections.
- **Extras**
    - [ ] Command Palette (`Ctrl+K`) for power-user navigation.
    - [ ] Sound Design (subtle hover/click SFX - optional).
