# Defrian.dev — Personal Portfolio

A modern, minimalist, and production-ready personal portfolio website for **Defrian Bagus Dewanta Putra**, Frontend Developer.

Designed with a **Minimalist Light — Modern Editorial** aesthetic, built with Next.js App Router, TypeScript, and Tailwind CSS.

---

## 🚀 Live Demo & Links
- **Portfolio Website**: [defrian.dev](https://defrian.dev)
- **LinkedIn**: [linkedin.com/in/defrian](https://linkedin.com/in/defrian)
- **GitHub**: [github.com/defriandev](https://github.com/defriandev)

---

## 🛠️ Technology Stack
- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG Brand Icons
- **Deployment**: [Vercel](https://vercel.com/)
- **SEO & Accessibility**: Dynamic Metadata, Sitemap XML, Robots.txt, Semantic HTML5, WCAG Contrast

---

## 📁 Project Architecture

```text
src/
├── app/
│   ├── layout.tsx              # Global layout with SEO metadata & Geist font
│   ├── page.tsx                # Homepage with all portfolio sections
│   ├── globals.css             # Design tokens & Minimalist Light theme
│   ├── not-found.tsx           # Custom 404 error page
│   ├── robots.ts               # Automated search engine robots directives
│   ├── sitemap.ts              # Automated XML sitemap generation
│   └── projects/
│       └── [slug]/
│           └── page.tsx        # Dynamic SSG project case study pages
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Frosted-glass navigation with mobile drawer
│   │   └── Footer.tsx          # Editorial footer with quick navigation
│   ├── sections/
│   │   ├── Hero.tsx            # Headline, identity, status pill, CTAs
│   │   ├── About.tsx           # Narrative bio and core engineering values
│   │   ├── Skills.tsx          # Frontend, Tools, and Additional skill groupings
│   │   ├── Projects.tsx        # Project showcase grid with status pills
│   │   ├── Experience.tsx      # Education (UNAIR), PKL Internship, and Community
│   │   └── Contact.tsx         # Direct contact card with 1-click copy & mailto
│   └── ui/
│       ├── Button.tsx          # Reusable polymorphic button / link component
│       ├── ProjectCard.tsx     # Clean project card with status indicators
│       ├── SkillBadge.tsx      # Interactive skill pill component
│       ├── SectionHeading.tsx  # Editorial section heading with badge overline
│       └── Icons.tsx           # Scalable SVG GitHub & LinkedIn brand icons
│
├── data/
│   ├── projects.ts             # Featured projects data & query helpers
│   ├── skills.ts               # Structured technical skills data
│   └── experience.ts           # Education, PKL, and organizational timeline
│
├── lib/
│   └── utils.ts                # Tailwind class merging utility (cn helper)
│
└── types/
    └── index.ts                # Strict TypeScript domain types
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/defriandev/defrian-portfolio.git
   cd defrian-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Production Build & Linting

```bash
# Verify ESLint rules
npm run lint

# Build optimized production bundle with SSG
npm run build
```

---

## 🚢 Deployment to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete Defrian.dev portfolio"
   git branch -M main
   git remote add origin https://github.com/defriandev/defrian-portfolio.git
   git push -u origin main
   ```
2. Import the repository in [Vercel](https://vercel.com/new).
3. Framework preset will automatically detect **Next.js**.
4. Click **Deploy**.
