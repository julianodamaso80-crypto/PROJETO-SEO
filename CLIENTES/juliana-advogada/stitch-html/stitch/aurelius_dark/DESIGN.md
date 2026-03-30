# High-End Editorial Design System: Dra. Juliana Darin da Cunha

## 1. Overview & Creative North Star: "The Digital Jurist"
This design system moves away from the rigid, boxed layouts of traditional legal websites. Our Creative North Star is **"The Digital Jurist"**—an aesthetic that balances the weight of legal authority with the fluid sophistication of modern luxury. 

We achieve this through an **Editorial Layout** strategy: 
*   **Intentional Asymmetry:** Breaking the 12-column grid with oversized typography and overlapping elements.
*   **Atmospheric Depth:** Using "light orbs" and glassmorphism to create a sense of three-dimensional space.
*   **High-Contrast Scale:** Dramatic shifts between massive serif displays (`display-lg`) and hyper-refined sans-serif labels (`label-sm`).

The goal is to make the user feel they are entering a private consultation suite, not a generic data portal.

---

## 2. Colors & Surface Philosophy
The palette is rooted in deep Navies and Metallic Golds, executed with a focus on tonal transitions rather than structural lines.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be created via background color shifts. A section using `surface-container-low` should sit directly against a `surface` background. The transition of color is the boundary.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following tokens to create "nested" depth:
*   **Base Layer:** `surface` (#071325) for the main page background.
*   **Secondary Layer:** `surface-container-low` (#101C2E) for large content blocks.
*   **Elevated Layer:** `surface-container-high` (#1F2A3D) for interactive cards or floating menus.

### The Glass & Gradient Rule
To achieve a premium, Apple-esque finish:
*   **Glassmorphism:** Use `rgba(255,255,255,0.03)` with a `12px` backdrop-blur for navigation bars and floating modals.
*   **Signature Gradients:** Apply a linear gradient from `primary` (#E6C364) to `tertiary-container` (#C6A855) for primary CTAs. This adds "soul" and prevents the gold from looking like a flat yellow.

---

## 3. Typography: The Authoritative Voice
Our typography pairing contrasts the traditional heritage of Law (Serif) with the efficiency of modern Practice (Sans-serif).

*   **Headlines (Noto Serif / Playfair Display):** These are the "Lead Counsel." They must feel heavy and intentional. Use `display-lg` for hero statements to command immediate respect.
*   **Body & Titles (Inter):** The "Supporting Evidence." Inter provides high legibility for complex legal text. Use `title-md` for sub-headers to maintain a clean, professional rhythm.
*   **Visual Hierarchy:** Always maintain a minimum 2:1 ratio between headline size and body size to ensure editorial drama.

---

## 4. Elevation & Depth
Depth in this system is a result of light and layering, never heavy-handed shadows.

*   **Tonal Layering:** Instead of shadows, place a `surface-container-highest` card inside a `surface-container-low` section. The natural contrast creates a "soft lift."
*   **Ambient Shadows:** For floating elements (e.g., dropdowns), use a wide, diffused shadow: `box-shadow: 0 20px 40px rgba(3, 14, 32, 0.4)`. The shadow color is a darker tint of the background, not black.
*   **The "Ghost Border":** If a container requires definition for accessibility, use the `outline-variant` (#45474C) at 20% opacity. For gold-accented containers, use the system border `rgba(201, 168, 76, 0.15)`.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `tertiary-container`), `on-primary-fixed` text, `roundness-sm`.
*   **Secondary:** Ghost style. `outline-variant` (20% opacity) border, `primary` text.
*   **Tertiary:** Text only with a `2px` underline that expands on hover.

### Cards & Lists
*   **Forbidden:** Divider lines between list items.
*   **Execution:** Use `spacing-6` (2rem) of vertical white space to separate items. For list items, use a subtle hover state shift to `surface-bright` (#2E394D).

### Input Fields
*   **Style:** Minimalist. No background fill; only a bottom border (1px) using `outline-variant`. 
*   **Focus State:** The bottom border transitions to `primary` (Gold) with a subtle `4px` glow.

### Signature Component: The "Case Study Card"
A large `surface-container-low` container with a subtle `point grid background` pattern overlaid. Use a `headline-sm` for the case title and a `glassmorphism` tag for the legal category (e.g., "Social Security").

---

## 6. Do's and Don'ts

### Do
*   **Do** use the `spacing-20` (7rem) scale for section padding to allow the design to "breathe."
*   **Do** use "Light Orbs": Large, 400px wide circles of `primary` color at 5% opacity, blurred by 100px, placed behind key content to create a soft glow.
*   **Do** ensure all text on `primary` (Gold) buttons uses `on-primary-fixed` (#241A00) for maximum legibility.

### Don't
*   **Don't** use pure black (#000000). Always use the `surface` navy to maintain depth.
*   **Don't** use sharp `90-degree` corners. Stick to the `md` (0.375rem) or `lg` (0.5rem) roundedness scale for a more approachable premium feel.
*   **Don't** use standard "drop shadows." If it doesn't look like ambient light, it doesn't belong in this system.