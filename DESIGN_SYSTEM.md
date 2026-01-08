# Capital District Tech Support - Design System

## Brand Identity

**Mission**: Provide reliable, friendly, and professional tech support to homeowners and small businesses throughout the Capital District of New York.

**Brand Voice**:
- Approachable and warm
- Professional but not corporate
- Patient and educational
- Locally-rooted and community-focused

---

## Color Palette

### Primary Colors
```css
--primary-blue: #2F6FED;      /* Trust, technology, reliability */
--primary-blue-dark: #1E4FBD; /* Hover states, emphasis */
--primary-blue-light: #5A8BF0; /* Backgrounds, accents */
```

### Secondary Colors
```css
--sage-green: #6FAF8E;         /* Growth, help, success */
--sage-green-dark: #4F8F6E;    /* Hover, secondary CTAs */
--sage-green-light: #8FC9A8;   /* Backgrounds, highlights */
```

### Accent Colors
```css
--honey-accent: #F2C94C;       /* Warmth, attention, highlights */
--honey-dark: #D9B243;         /* Hover states */
--honey-light: #F5D670;        /* Subtle backgrounds */
```

### Neutrals
```css
--neutral-50: #F9FAFB;         /* Page backgrounds */
--neutral-100: #F3F4F6;        /* Card backgrounds */
--neutral-200: #E5E7EB;        /* Borders, dividers */
--neutral-300: #D1D5DB;        /* Disabled states */
--neutral-600: #4B5563;        /* Secondary text */
--neutral-800: #1F2937;        /* Primary text */
--neutral-900: #111827;        /* Headings */
--white: #FFFFFF;              /* Cards, buttons */
```

---

## Typography

### Font Families
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
--font-headings: 'Poppins', 'Inter', sans-serif;
```

### Font Sizes & Hierarchy
```css
/* Mobile First */
--text-xs: 0.75rem;    /* 12px - Labels, captions */
--text-sm: 0.875rem;   /* 14px - Secondary text */
--text-base: 1rem;     /* 16px - Body text */
--text-lg: 1.125rem;   /* 18px - Large body */
--text-xl: 1.25rem;    /* 20px - Small headings */
--text-2xl: 1.5rem;    /* 24px - H3 */
--text-3xl: 1.875rem;  /* 30px - H2 */
--text-4xl: 2.25rem;   /* 36px - H1 */
--text-5xl: 3rem;      /* 48px - Hero headings (Desktop) */

/* Desktop */
@media (min-width: 768px) {
  --text-4xl: 2.5rem;  /* 40px */
  --text-5xl: 3.5rem;  /* 56px */
}
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## Spacing System

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

---

## Border Radius

```css
--radius-sm: 0.375rem;   /* 6px - Small elements */
--radius-md: 0.5rem;     /* 8px - Cards, buttons */
--radius-lg: 0.75rem;    /* 12px - Large cards */
--radius-xl: 1rem;       /* 16px - Hero sections */
--radius-full: 9999px;   /* Pills, circles */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

---

## UI Components

### Buttons

**Primary Button** (CTA - Call, Book Service)
- Background: `--primary-blue`
- Text: `--white`
- Padding: `--space-3` `--space-6`
- Border radius: `--radius-md`
- Font weight: `--font-semibold`
- Hover: Darken 10%, lift with `--shadow-md`

**Secondary Button** (Learn More, View Services)
- Background: `--sage-green`
- Text: `--white`
- Same dimensions as primary

**Outline Button** (Less emphasis actions)
- Border: 2px solid `--primary-blue`
- Text: `--primary-blue`
- Background: transparent
- Hover: Background `--primary-blue`, text `--white`

### Cards

**Service Card**
- Background: `--white`
- Padding: `--space-6`
- Border radius: `--radius-lg`
- Shadow: `--shadow-md`
- Hover: Lift with `--shadow-lg`, subtle scale (1.02)

**Testimonial Card**
- Background: `--neutral-50`
- Padding: `--space-6`
- Border left: 4px solid `--honey-accent`
- Border radius: `--radius-md`

### Icons

**Style**: Line icons, rounded style (Feather Icons or similar)
**Size**: 24px standard, 32px for service cards, 48px for hero
**Color**: `--primary-blue` for service icons, `--sage-green` for success states

### Forms

**Input Fields**
- Border: 1px solid `--neutral-300`
- Padding: `--space-3` `--space-4`
- Border radius: `--radius-md`
- Focus: Border color `--primary-blue`, outline ring `--primary-blue-light` (opacity 0.3)

**Labels**
- Font size: `--text-sm`
- Font weight: `--font-medium`
- Color: `--neutral-800`
- Margin bottom: `--space-2`

---

## Layout Guidelines

### Container Widths
```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
```

### Grid System
- Mobile: Single column
- Tablet (768px+): 2 columns for services
- Desktop (1024px+): 3 columns for services, 2 for testimonials

### Section Spacing
- Top/Bottom padding: `--space-16` (mobile), `--space-24` (desktop)
- Section backgrounds alternate: white, `--neutral-50`

---

## Local Branding Elements

### Location Badge
- Small pill with map pin icon
- Background: `--sage-green-light`
- Text: `--sage-green-dark`
- Example: "📍 Serving Albany & Capital District"

### Local Trust Indicators
- "Locally Owned & Operated"
- "518 Area Code" prominence
- Town names in headlines and subheadings
- Local landmark imagery

### Phone Number Styling
- Large, clickable phone number in header
- Format: (518) XXX-XXXX
- Color: `--primary-blue`
- Icon: Phone with slight rotate animation on hover

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text
- Focus indicators: 2px outline in `--primary-blue`
- All interactive elements keyboard accessible
- Alt text for all images
- Semantic HTML (nav, main, section, article)
- ARIA labels for icon buttons

---

## Responsive Breakpoints

```css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small desktops */
--breakpoint-xl: 1280px;  /* Large desktops */
```

---

## Animation & Transitions

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 200ms ease-in-out;
--transition-slow: 300ms ease-in-out;
```

**Hover Effects**:
- Cards: Lift (translateY -4px) + shadow increase
- Buttons: Darken background, add shadow
- Links: Underline with color transition

**Page Transitions**:
- Smooth scroll behavior
- Fade-in on load for hero content

---

## Image Guidelines

### Hero Images
- Local landmarks: Albany skyline, Empire State Plaza, Troy riverfront
- People: Diverse ages (seniors, families), friendly tech interactions
- Style: Natural lighting, warm tones, approachable

### Service Icons
- Consistent style (line icons, rounded)
- Size: 48x48px minimum
- Color: Single color (`--primary-blue` or `--sage-green`)

### Testimonial Photos
- Circular crops
- Size: 64x64px
- Placeholder if no photo available

---

## Content Guidelines

### Voice & Tone
- **Welcoming**: "We're here to help"
- **Local**: Reference specific towns and neighborhoods
- **Patient**: Avoid jargon, explain clearly
- **Professional**: Maintain expertise without being condescending

### Keyword Integration
- Natural placement, not stuffed
- Variations: "tech support", "IT help", "computer repair"
- Local modifiers: "in Albany", "near Troy", "Capital District"
- Long-tail: "same-day computer repair Albany NY"

### Call-to-Actions
- Action-oriented: "Call Now", "Book Service Today", "Get Help Fast"
- Urgency (appropriate): "Same-Day Service Available"
- Local: "Call Your Local Tech Expert"

---

## SEO & Schema Markup

### Required Schema Types
1. **LocalBusiness** (all pages)
2. **Service** (service pages)
3. **FAQ** (homepage and service pages)
4. **BreadcrumbList** (all pages except homepage)
5. **Review/AggregateRating** (testimonials section)

### Meta Tags Requirements
- Unique title per page (50-60 characters)
- Unique description per page (150-160 characters)
- Local keywords in both
- Open Graph tags for social sharing

---

## Technology Stack Recommendation

**Frontend**:
- HTML5 (semantic markup)
- CSS3 with CSS Variables (for design system)
- Vanilla JavaScript (lightweight, fast)
- Optional: Alpine.js for interactivity (very lightweight)

**Why not a framework?**
- Faster load times (critical for SEO)
- Better for static, content-focused sites
- Easier to optimize for Core Web Vitals
- No hydration overhead

**Build Tools** (optional):
- PostCSS for vendor prefixes
- Basic minification for production

**Forms**:
- HTML5 validation
- Progressive enhancement with JavaScript
- Backend integration via simple fetch API

---

## File Structure

```
/
├── index.html
├── services/
│   ├── computer-repair.html
│   ├── virus-malware-removal.html
│   ├── remote-support.html
│   ├── smart-home-setup.html
│   └── printer-network-setup.html
├── about.html
├── contact.html
├── css/
│   ├── variables.css
│   ├── reset.css
│   ├── layout.css
│   ├── components.css
│   └── main.css
├── js/
│   ├── main.js
│   ├── form-validation.js
│   └── schema.js
├── images/
│   ├── hero/
│   ├── services/
│   ├── team/
│   └── icons/
└── assets/
    └── logo.svg
```
