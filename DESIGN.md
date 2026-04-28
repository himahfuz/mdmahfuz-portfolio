# 🎨 DESIGN SYSTEM — mdmahfuz.com
> Developer Reference Document — Static: Home, CV | Dynamic: Learning, Tools, Blog

---

## 📐 TABLE OF CONTENTS
1. [Global Design Tokens](#1-global-design-tokens)
2. [Typography](#2-typography)
3. [Component Library](#3-component-library)
4. [Page: Home (index.html)](#4-page-home)
5. [Page: CV (cv.html)](#5-page-cv)
6. [Page: Learning (Dynamic)](#6-page-learning--dynamic-)
7. [Page: Tools (Dynamic)](#7-page-tools--dynamic-)
8. [Page: Blog (Dynamic)](#8-page-blog--dynamic-)
9. [Animations & Interactions](#9-animations--interactions)
10. [Responsive Rules](#10-responsive-rules)
11. [Asset Checklist](#11-asset-checklist)

---

## 1. GLOBAL DESIGN TOKENS

### 🎨 Color Palette
```css
:root {
  /* Background */
  --bg-gradient: linear-gradient(135deg, #f4f7f3 0%, #e6efe9 100%);

  /* Text */
  --text-primary:   #1a1a1a;
  --text-secondary: #6b7280;

  /* Brand */
  --brand-primary:  #1f7a63;
  --brand-accent:   #00c97f;
  --brand-gradient: linear-gradient(135deg, #1f7a63, #00c97f);

  /* Glow */
  --glow: radial-gradient(circle, rgba(0, 201, 127, 0.15) 0%, rgba(255,255,255,0) 70%);

  /* Glass */
  --glass-bg:     rgba(255, 255, 255, 0.35);
  --glass-border: rgba(255, 255, 255, 0.5);
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);

  /* Radius */
  --radius-card:   20px;
  --radius-btn:    30px;
  --radius-img:    24px;
  --radius-pill:   50px;
  --radius-sm:     10px;
}
```

### 🪟 Glassmorphism Utility (`.glass-panel`)
```css
.glass-panel {
  background:           rgba(255, 255, 255, 0.35);
  backdrop-filter:      blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border:               1px solid rgba(255, 255, 255, 0.5);
  box-shadow:           0 8px 32px 0 rgba(31, 38, 135, 0.05);
  border-radius:        var(--radius-card);
}
```

### 🌐 Spacing Scale
| Token | Value |
|-------|-------|
| `--space-xs`  | 4px  |
| `--space-sm`  | 8px  |
| `--space-md`  | 16px |
| `--space-lg`  | 24px |
| `--space-xl`  | 40px |
| `--space-2xl` | 64px |

---

## 2. TYPOGRAPHY

### Fonts
```html
<!-- Google Fonts Import -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

| Role            | Font     | Weight | Size (Desktop) |
|-----------------|----------|--------|---------------|
| Hero Name       | Poppins  | 800    | 72–80px       |
| Section Heading | Poppins  | 700    | 28–32px       |
| Sub Heading     | Inter    | 600    | 18–20px       |
| Body Text       | Inter    | 400    | 14–16px       |
| Label / Tag     | Inter    | 500    | 12px, uppercase, tracked |
| Button          | Inter    | 600    | 14–15px       |

### Icon Libraries
- **Lucide Icons** → `https://unpkg.com/lucide@latest`
- **Phosphor Icons** → `https://unpkg.com/@phosphor-icons/web`

---

## 3. COMPONENT LIBRARY

### 3.1 Navbar (Shared — All Pages)
```
Layout:   Floating glass pill, centered, top: 20px
Height:   56px
Padding:  0 24px
Radius:   50px (full pill)

Structure:
  [LEFT]   Logo "M" (SVG/Bold) + "MD MAHFUZUR RAHMAN" (Inter 600, 14px)
  [CENTER] Nav links: Home | CV | Learning | Tools | Blog
           Active indicator: 4px green dot centered below link text
  [RIGHT]  CTA Button: "Let's Work Together ↗"
           Style: background=var(--brand-gradient), color=white, radius=30px, padding=10px 20px
```

**Active dot CSS:**
```css
.nav-link.active::after {
  content: '';
  display: block;
  width: 4px;
  height: 4px;
  background: var(--brand-accent);
  border-radius: 50%;
  margin: 4px auto 0;
}
```

---

### 3.2 Footer Bar (Shared — All Pages)
```
Layout:   Full-width floating glass strip, bottom of page
Height:   60px
Padding:  0 40px

Structure:
  [LEFT]   Mail icon (Lucide) + "hello@mdmahfuz.com"   color: var(--text-primary)
  [CENTER] Three circular glass icon buttons (48×48px each, gap: 12px):
             • LinkedIn icon
             • WhatsApp icon
             • Telegram icon
           Icon color: white, bg: var(--brand-primary)
  [RIGHT]  Globe icon (Lucide) + "© 2026 mdmahfuz.com"  color: var(--text-secondary)
```

---

### 3.3 Buttons

#### Primary Button (Solid)
```css
.btn-primary {
  background:    var(--brand-gradient);
  color:         #ffffff;
  border:        none;
  border-radius: var(--radius-btn);
  padding:       12px 28px;
  font:          600 14px/1 'Inter', sans-serif;
  cursor:        pointer;
  transition:    transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-primary:hover {
  transform:  translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 201, 127, 0.35);
}
```

#### Ghost / Glass Button
```css
.btn-glass {
  background:    rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  border:        1px solid rgba(255,255,255,0.6);
  border-radius: var(--radius-btn);
  padding:       12px 28px;
  font:          600 14px/1 'Inter', sans-serif;
  color:         var(--text-primary);
  display:       flex;
  align-items:   center;
  gap:           8px;
  transition:    transform 0.2s ease, box-shadow 0.2s ease;
}
.btn-glass:hover {
  box-shadow: 0 4px 20px rgba(0, 201, 127, 0.2);
  transform:  translateY(-2px);
}
```

---

### 3.4 Testimonial Card
```
Size:    100% width, auto height
Padding: 16px 20px
Radius:  var(--radius-card)
Class:   .glass-panel

Layout (flex row, gap: 12px):
  [Avatar]  48×48px, border-radius: 50%, object-fit: cover
  [Content]
    Row 1: Name (Inter 600, 14px) + Quote icon " " (brand-primary, right-aligned)
    Row 2: ★★★★★ (SVG or Unicode, color: #f59e0b, size: 14px)
    Row 3: Review text (Inter 400, 13px, color: var(--text-secondary), font-style: italic)

Hover:
  transform:  translateY(-4px)
  box-shadow: 0 12px 40px rgba(31, 38, 135, 0.1)
  transition: all 0.3s ease
```

---

### 3.5 Skill Pill (CV Sidebar)
```css
.skill-pill {
  display:        inline-flex;
  align-items:    center;
  gap:            6px;
  background:     rgba(255,255,255,0.5);
  border:         1px solid rgba(255,255,255,0.6);
  border-radius:  var(--radius-sm);
  padding:        8px 14px;
  font:           500 13px 'Inter';
  color:          var(--text-primary);
}
/* Icon inside pill: 16×16px, brand-primary color */
```

---

### 3.6 Badge / Tag Pill (Skills Section)
```css
.badge {
  background:    transparent;
  border:        1px solid #d1d5db;
  border-radius: 20px;
  padding:       5px 14px;
  font:          400 13px 'Inter';
  color:         var(--text-secondary);
}
.badge.technical { border-color: rgba(31, 122, 99, 0.4); color: var(--brand-primary); }
.badge.soft      { border-color: #d1d5db; }
```

---

### 3.7 Timeline Item (Work Experience)
```
Layout: Flex row
  [Left]  Vertical green line (2px solid #00c97f) + circle dot (10px, filled brand-primary)
  [Right] Job card (.glass-panel)
          • Company name  — Inter 700, 16px
          • Role          — Inter 600, 13px, color: brand-primary
          • Date pill     — glass-panel, radius: 20px, padding: 4px 12px, text-secondary, 12px
          • Bullet list   — Inter 400, 14px, line-height: 1.6, color: text-secondary
```

---

### 3.8 Accordion Item (Certifications)
```
Default state:
  Header: Ribbon/badge icon (brand-primary) + Title (Inter 600, 15px) + Chevron-Down icon (right)
  Body:   Hidden (max-height: 0, overflow: hidden)

Open state:
  Body:   Visible, description text (Inter 400, 13px, text-secondary)
  Chevron rotates 180deg

Transition: max-height 0.3s ease, opacity 0.3s ease
```

---

### 3.9 Tab Button (Learning Page)
```css
.tab-btn {
  padding:       10px 28px;
  border-radius: var(--radius-btn);
  border:        1px solid rgba(255,255,255,0.5);
  background:    rgba(255,255,255,0.3);
  font:          500 14px 'Inter';
  color:         var(--text-secondary);
  cursor:        pointer;
  transition:    all 0.25s ease;
}
.tab-btn.active {
  background: var(--brand-gradient);
  color:      #ffffff;
  border:     none;
  box-shadow: 0 4px 16px rgba(0, 201, 127, 0.3);
}
```

---

### 3.10 Post Card (Learning / Blog)
```
Padding: 20px
Radius:  var(--radius-card)
Class:   .glass-panel

Structure:
  [Top]    Document icon (brand-primary, 24px)
  [Title]  Inter 600, 15px, text-primary
  [Desc]   Inter 400, 12px, text-secondary, max 3 lines (line-clamp: 3)
  [Meta]   "Date - Status" (12px, text-secondary) or "In Progress" badge
  [Button] "View Post" — full width, .btn-glass, bottom of card
```

---

## 4. PAGE: HOME

### Layout Structure (Desktop — EXACTLY 100vh, overflow: hidden)
```
┌─────────────────────────────────────────────────────┐
│                    NAVBAR (top: 20px)               │
├──────────────┬─────────────────┬────────────────────┤
│  LEFT COL    │   CENTER COL    │   RIGHT COL        │
│  (flex ~30%) │   (flex ~35%)   │   (flex ~30%)      │
│              │                 │                    │
│  CA STUDENT  │  [Portrait Card]│  [Testimonial x4]  │
│  Hero Name   │  + Glow Circle  │                    │
│  Tagline     │  + Dot Matrix   │                    │
│  CTA Button  │                 │                    │
├──────────────┴─────────────────┴────────────────────┤
│                  FOOTER BAR (bottom: 20px)          │
└─────────────────────────────────────────────────────┘
```

### Left Column — Detail
```
Tag:       "— CA STUDENT"
           font: Inter 500 12px uppercase, letter-spacing: 0.1em
           color: brand-primary
           before: short horizontal rule (2px, brand-primary, width: 20px)

Heading:
  "MD"        — Poppins 800, ~72px, color: text-primary
  "Mahfuzur"  — Poppins 800, ~72px, color: brand-primary
  "Rahman"    — Poppins 800, ~72px, color: text-primary

Divider:   Short horizontal line, 40px, brand-primary, margin: 16px 0

Tagline:   "Innovation Anything for Automation Everything"
           "Innovation" → font-weight: 700, color: brand-primary
           "Automation" → font-weight: 700, color: brand-primary
           Rest → font-weight: 400, color: text-secondary

CTA:       .btn-glass + Briefcase icon (Lucide, 18px)
           Text: "Available for Job"
           margin-top: 32px
```

### Center Column — Detail
```
Outer wrapper: position: relative, display: flex, align-items: center, justify-content: center

Glow Circle:
  position:   absolute
  width/height: 320px
  background: var(--glow)
  border-radius: 50%
  z-index: 0

Portrait Card:
  class:        .glass-panel
  width:        ~340px, height: ~480px
  z-index:      1
  overflow:     hidden
  border-radius: var(--radius-card)

  Image:
    width: 100%, height: 100%
    object-fit: cover
    object-position: top center

Dot Matrix Pattern:
  position: absolute, top: 0, right: -20px
  width: 100px, height: 100px
  background-image: radial-gradient(circle, rgba(31,122,99,0.25) 1px, transparent 1px)
  background-size: 10px 10px
  z-index: 2
```

### Right Column — Detail
```
Layout: flex column, gap: 12px

Four testimonial cards (use .glass-panel + testimonial structure):

  1. Rashedul Karim — 5★
     "Mahfuz is very dedicated and detail-oriented.
      His financial analysis helped our business grow more efficiently."

  2. Nusrat Jahan — 5★
     "Professional, reliable and always on time.
      He has a great understanding of accounting and compliance."

  3. Imtiaz Ahmed — 5★
     "Great working experience! Mahfuz provides
      accurate reports and valuable insights."

  4. Tanzil Hasan — 5★
     "Very hardworking and knowledgeable.
      Highly recommended for financial support."

Avatar images: placeholder circles until real photos provided
               50×50px, border-radius: 50%
```

---

## 5. PAGE: CV

### Layout Structure (Desktop — scrollable right column)
```
┌────────────────┬──────────────────────────────────┐
│  LEFT SIDEBAR  │       RIGHT CONTENT AREA         │
│  (1fr)         │       (2.5fr)                    │
│  sticky top:20 │       scroll freely              │
│                │                                  │
│  Profile Card  │  A. Career Objective             │
│  Name + Role   │  B. Work Experience (Timeline)   │
│  Contact Info  │  C. Education Qualification      │
│  Skills Pills  │  D. Skills (2 cols)              │
│  Download Btn  │  E. Certifications (Accordion)   │
│                │  F. Achievements                 │
│                │  G. Personal Info + H. Reference │
└────────────────┴──────────────────────────────────┘
```

### Left Sidebar — Detail
```
Class: .glass-panel, position: sticky, top: 20px
Padding: 28px 20px

Profile Image:
  width: 160px, height: 160px
  border-radius: 50%
  border: 3px solid rgba(255,255,255,0.7)
  object-fit: cover
  margin: 0 auto 20px

Name:  "MD Mahfuzur\nRahman" — Poppins 700, 22px, text-primary
Role:  "Auditor (Articleship Student)" — Inter 500, 14px, brand-primary

Divider: 1px solid rgba(255,255,255,0.5), margin: 16px 0

Contact List (each item: flex row, gap: 10px, margin-bottom: 12px):
  Icon (Lucide, 16px, brand-primary) + Text (Inter 400, 13px)
  • MapPin    → "Gazipur, Bangladesh"
  • Phone     → "+8801303819419"
  • Mail      → "contact.mdmahfuz@gmail.com"
  • Linkedin  → "linkedin.com/in/mdmahfuzurali"

Skills Section:
  Label: "Skills Overview" — Inter 600, 14px, text-primary, margin-bottom: 12px
  Pills (use .skill-pill, wrap flex):
    [📊 Accounting] [VAT] [Excel icon Microsoft Excel]
    [📈 Data Analysis] [Power BI] [🤖 AI Tools]

Download Button (full width):
  Class: .btn-primary, width: 100%, margin-top: 20px
  Icon: Download (Lucide, 16px)
  Text: "Download CV (PDF)"
```

### Right Content Area

#### A. Career Objective
```
Section Header: User icon (Lucide) + "Career Objective" (Poppins 600, 20px)
Card: .glass-panel, padding: 24px

Body text (Inter 400, 15px, line-height: 1.7, text-secondary):
  "Dynamic and detail-oriented accounts professional with a solid foundation in
  financial reporting and current experience in a CA firm. I aim to contribute
  my skills in audit and data analysis to a forward-thinking organization while
  completing my Articleship and pursuing my goal of becoming a Chartered Accountant."
```

#### B. Work Experience
```
Section Header: Briefcase icon + "Work Experience"
Card: .glass-panel, padding: 24px

Timeline:
  Vertical line: 2px solid #00c97f, position: absolute, left: 16px, top-to-bottom

  Job 1:
    Dot:     10px circle, border: 2px brand-primary, bg: white
    Company: "Islam Quazi Shafique & Co." — Inter 700, 16px
    Date:    "Apr 2024 – Present" (pill, right-aligned)
    Role:    "Auditor (Articleship Student)" — Inter 600, 13px, brand-primary
    Bullets:
      • Reviewed organization invoices/vouchers, receives and payments, transactions,
        bank statements, cash books, ledger books, income statements, cash flow,
        advance payments and receipts.
      • Prepared audit report & financial statement as per IAS – 1.
      • Experienced in statutory audit.

  Job 2:
    Company: "Daraz Bangladesh Limited" — Inter 700, 16px
    Date:    "Sep 2022 – Feb 2024" (pill)
    Role:    "Team Lead & Customer Support" — Inter 600, 13px, brand-primary
    Bullets:
      • Analyzed customer experience data to identify and report on key performance metrics.
      • Led a quality assurance team, providing training and implementing new
        processes to improve team efficiency.
      • Resolved complex seller issues and contributed to projects aimed at
        process improvement.
```

#### C. Education Qualification
```
Section Header: GraduationCap icon + "Education Qualification"
Card: .glass-panel, padding: 24px

Table-style 3-column grid (Year | Subject | Institution):
  Dividers: 1px solid rgba(255,255,255,0.4) between rows

  Row 1: BBA (2021)  [brand-primary]  |  Accounting         |  National University (Siddheswari College)
  Row 2: HSC (2017)  [brand-primary]  |  Business Studies   |  Milestone College, Dhaka
  Row 3: SSC (2015)  [brand-primary]  |  Business Studies   |  Security Printing Corporation High School, Gazipur

  Year column: Inter 600, 14px, brand-primary
  Subject col: Inter 400, 14px, text-primary
  Institution: Inter 400, 13px, text-secondary
```

#### D. Skills
```
Section Header: List icon + "Skills"
Card: .glass-panel, padding: 24px

2-Column layout (Technical | Soft):

  Technical Skills (label: Inter 600, 14px, brand-primary):
    [Financial Statement] [VAT] [Microsoft Excel]
    [Data Analysis] [Artificial Intelligence] [G-suite]
    [Power BI] [Bookkeeping Software] [CRM Software]

  Soft Skills (label: Inter 600, 14px, brand-primary):
    [Team Management] [Communication]
    [Adaptability] [Organizational Skills]
    [Time Management] [Collaboration]

  All use .badge class. Technical = .badge.technical, Soft = .badge.soft
```

#### E. Certifications
```
Section Header: Award icon + "Course & Certificate"
Card: .glass-panel, padding: 24px
Style: Accordion (see component 3.8)

Item 1:
  Title: "Business Intelligence with Excel (Ostad)"
  Body:  "Manage Data Model | Data relationship | Advance formula
          (Vlookup, Index, Match etc) | Power Pivot | Power Query"

Item 2:
  Title: "Power BI for Professionals (Ostad)"
  Body:  "Data transform | DAX Calculation | Interactive Reporting"
```

#### F. Achievements
```
Section Header: Trophy icon + "Achievement & Award"
Card: .glass-panel, padding: 24px

Item 1:
  Icon:  ⭐ (filled star, amber color, 24px)
  Title: "Awarded Employee of the Q3 FY23"
  Desc:  '"Daraz Bangladesh Ltd" for consistently innovate and exceeding
          team performance metric. – Feb 2023'

Item 2:
  Icon:  Target icon (brand-primary, 24px)
  Title: "Top performers"
  Desc:  '"Genex Infosys" (Airtel Process) – Jan 2022'

Layout per item: flex row, gap: 16px, margin-bottom: 20px
Title: Inter 600, 15px
Desc:  Inter 400, 13px, text-secondary, font-style: italic
```

#### G. Personal Information
```
Section Header: User icon + "Personal Information"
Card: .glass-panel, padding: 24px, 2-column key-value grid

Left column:
  Father's Name : MD Mozammal Hoque
  Mother's Name : Fatema Begum
  Date of Birth : 26 November, 1998
  Nationality   : Bangladeshi
  Religion      : Islam

Right column:
  Marital Status : Married
  Blood Group    : AB+
  Height         : 5 feet 7 inch
  NID            : 4204337929
  Passport       : A01952084

Key:   Inter 400, 13px, text-secondary
Value: Inter 500, 13px, text-primary
Separator between key-value: " : "
```

#### H. Reference
```
Section Header: Users icon + "Reference"
Card: .glass-panel, padding: 24px

Profile card layout (flex row, gap: 16px):
  Avatar: 64×64px, border-radius: 50%, bg: #e6efe9 (placeholder icon inside)
  Content:
    Name:  "Tanveer Hossain" — Inter 600, 16px
    Role:  "Head of Customer Experience, Cartup (US-Bangla)" — Inter 400, 13px, text-secondary
    Phone: Phone icon + "+8801711506533" — Inter 400, 13px
```

---

## 6. PAGE: LEARNING (Dynamic)

### Layout
```
Navbar (same shared component)

Hero Section (.glass-panel, full-width, padding: 40px 48px):
  "My Learning Portfolio" — Poppins 700, 36px
  "A curated record of my ongoing professional development and knowledge sharing."
  — Inter 400, 15px, text-secondary

Tab Bar (flex row, gap: 12px, margin: 32px 0):
  [Accounting] [Cost Accounting] [TAX] [VAT]
  Use .tab-btn (see component 3.9)
  First tab active by default

Content Grid (4 columns on desktop, 2 on tablet, 1 on mobile):
  Each column = a category tab panel
  Each card = .post-card (see component 3.10)

Recent Activity Section:
  "Recent Overall Learning Activity" — Poppins 600, 22px
  [Activity timeline or list — data-driven]

Footer (same shared component)
```

### Data Model (Dynamic — fetch from backend/CMS)
```json
{
  "category": "Accounting",
  "posts": [
    {
      "id": "1",
      "title": "IAS 1: Key Financial Statement Components",
      "type": "Post",
      "description": "IAS 1: Key Financial Statement Components (Post), principles, International components...",
      "status": "published",
      "date": "2024-01-15",
      "slug": "ias-1-key-financial-statement"
    }
  ]
}
```

---

## 7. PAGE: TOOLS (Dynamic)

### Layout
```
Navbar (shared)

Page Header: "My Tools & Resources" — same style as Learning hero

Tool Cards Grid (3 columns desktop):
  Each card (.glass-panel):
    Icon (relevant emoji or Lucide icon)
    Tool Name — Inter 600, 16px
    Description — Inter 400, 13px, text-secondary
    Link / CTA button

Footer (shared)
```

---

## 8. PAGE: BLOG (Dynamic)

### Layout
```
Navbar (shared)

Featured Post (full-width .glass-panel):
  Large thumbnail area
  Category tag (brand-primary pill)
  Title — Poppins 700, 28px
  Excerpt — Inter 400, 14px, text-secondary
  Date + Read time
  "Read More →" button

Post Grid (2 columns desktop, .glass-panel each):
  Thumbnail, Category, Title, Excerpt, Date, Read More

Footer (shared)
```

---

## 9. ANIMATIONS & INTERACTIONS

### Load Animation (On page load — staggered)
```css
@keyframes fadeSlideUp {
  from {
    opacity:   0;
    transform: translateY(20px);
  }
  to {
    opacity:   1;
    transform: translateY(0);
  }
}

/* Apply to hero elements with staggered delay */
.hero-tag   { animation: fadeSlideUp 0.5s ease 0.1s both; }
.hero-name  { animation: fadeSlideUp 0.5s ease 0.2s both; }
.hero-tagline { animation: fadeSlideUp 0.5s ease 0.3s both; }
.hero-cta   { animation: fadeSlideUp 0.5s ease 0.4s both; }
.portrait-card { animation: fadeSlideUp 0.6s ease 0.2s both; }
.testimonial-card:nth-child(1) { animation: fadeSlideUp 0.5s ease 0.3s both; }
.testimonial-card:nth-child(2) { animation: fadeSlideUp 0.5s ease 0.4s both; }
.testimonial-card:nth-child(3) { animation: fadeSlideUp 0.5s ease 0.5s both; }
.testimonial-card:nth-child(4) { animation: fadeSlideUp 0.5s ease 0.6s both; }
```

### Hover States
```css
/* Card lift */
.glass-panel:hover {
  transform:  translateY(-2px);
  border:     1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 12px 40px rgba(31, 38, 135, 0.08);
  transition: all 0.3s ease;
}

/* Testimonial card — stronger lift */
.testimonial-card:hover {
  transform:  translateY(-4px);
  box-shadow: 0 16px 48px rgba(31, 38, 135, 0.12);
}

/* Button glow */
.btn-primary:hover {
  box-shadow: 0 8px 24px rgba(0, 201, 127, 0.4);
}

/* Social icon buttons */
.social-icon-btn:hover {
  transform:  scale(1.1);
  box-shadow: 0 4px 16px rgba(0, 201, 127, 0.3);
}
```

### Smooth Scroll
```css
html {
  scroll-behavior: smooth;
}
```

### Accordion Transition
```css
.accordion-body {
  max-height: 0;
  overflow:   hidden;
  transition: max-height 0.35s ease, opacity 0.35s ease;
  opacity:    0;
}
.accordion-body.open {
  max-height: 200px;
  opacity:    1;
}
.accordion-chevron {
  transition: transform 0.3s ease;
}
.accordion-item.open .accordion-chevron {
  transform: rotate(180deg);
}
```

---

## 10. RESPONSIVE RULES

### Breakpoints
```css
/* Desktop */
@media (min-width: 1024px) { ... }

/* Tablet */
@media (max-width: 1023px) and (min-width: 640px) { ... }

/* Mobile */
@media (max-width: 639px) { ... }
```

### Home Page
| Property | Desktop (≥1024px) | Mobile/Tablet (<1024px) |
|----------|-------------------|------------------------|
| Layout | 3-column grid | Single column, stacked |
| Height | `100vh`, `overflow: hidden` | Auto, scrollable |
| Navbar | Centered floating pill | Full-width, smaller text |
| Hero name | 72–80px | 48–56px |
| Portrait | ~340px × 480px | 260px × 360px, centered |
| Testimonials | 4 cards stacked right | 2×2 grid or horizontal scroll |

### CV Page
| Property | Desktop (≥1024px) | Mobile (<1024px) |
|----------|-------------------|-----------------|
| Layout | `1fr 2.5fr` grid | 1 column stacked |
| Sidebar | `position: sticky` | Static, appears first |
| Education | 3-column row | Stacked label-value |
| Skills | 2-column | 1 column |

### Learning / Blog
| Property | Desktop | Tablet | Mobile |
|----------|---------|--------|--------|
| Post grid | 4 cols | 2 cols | 1 col |
| Tab bar | flex row | flex wrap | horizontal scroll |

---

## 11. ASSET CHECKLIST

### Images Required
| File Name | Usage | Notes |
|-----------|-------|-------|
| `portrait-home.jpg` | Home center column portrait | High quality, dark blazer, transparent or solid bg |
| `portrait-cv.jpg` | CV sidebar circular | Formal attire, light bg for circle crop |
| `avatar-rashedul.jpg` | Testimonial 1 | 100×100px min |
| `avatar-nusrat.jpg` | Testimonial 2 | 100×100px min |
| `avatar-imtiaz.jpg` | Testimonial 3 | 100×100px min |
| `avatar-tanzil.jpg` | Testimonial 4 | 100×100px min |
| `avatar-tanveer.jpg` | CV Reference | 100×100px min |
| `favicon.ico` | Browser tab icon | 32×32px, "M" logo |
| `logo.svg` | Navbar "M" mark | SVG, brand-primary color |
| `cv-mahfuz.pdf` | CV download | Must match website content |

### File Structure (Suggested)
```
mdmahfuz.com/
├── index.html              ← Static: Home
├── cv.html                 ← Static: CV
├── learning/
│   └── index.html          ← Dynamic: Learning
├── tools/
│   └── index.html          ← Dynamic: Tools
├── blog/
│   ├── index.html          ← Dynamic: Blog List
│   └── [slug]/index.html   ← Dynamic: Blog Post
├── assets/
│   ├── css/
│   │   ├── global.css      ← Design tokens + shared
│   │   ├── home.css
│   │   └── cv.css
│   ├── js/
│   │   ├── main.js         ← Shared interactions
│   │   ├── accordion.js
│   │   └── tabs.js
│   ├── images/
│   │   ├── portrait-home.jpg
│   │   ├── portrait-cv.jpg
│   │   └── avatars/
│   └── fonts/              ← (optional local fonts)
└── DESIGN.md               ← This file
```

### External Dependencies
```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">

<!-- Lucide Icons (via CDN) -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
<!-- After DOM: call lucide.createIcons(); -->
```

---

## 📌 QUICK REFERENCE — Color Cheat Sheet

| Usage | Value |
|-------|-------|
| Page background | `linear-gradient(135deg, #f4f7f3 0%, #e6efe9 100%)` |
| Primary text | `#1a1a1a` |
| Secondary text | `#6b7280` |
| Brand green | `#1f7a63` |
| Accent green | `#00c97f` |
| Glass bg | `rgba(255,255,255,0.35)` |
| Glass border | `rgba(255,255,255,0.5)` |
| Star color | `#f59e0b` |
| Dot matrix | `rgba(31,122,99,0.25)` |

---

*Last updated: 2026 — mdmahfuz.com Design System v1.0*
