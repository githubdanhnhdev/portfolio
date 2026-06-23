# Nguyen Huu Danh — Portfolio Website (React)

A modern, responsive portfolio website rebuilt with **React 19 + Vite**, showcasing skills and experience as a Full-Stack Developer.

## ✨ Features

- **Modern Dark Theme**: Sleek dark design with gradient accents
- **Smooth Animations**:
  - Typing animation in hero section
  - Floating tech icons
  - Scroll-triggered fade-in animations (Intersection Observer API)
  - Hover effects on cards and buttons
  - Timeline animation for experience section
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**:
  - Smooth scrolling navigation with Scroll Snap
  - Active section highlight on Navbar while scrolling
  - Mobile hamburger menu
  - Contact form with validation & notification system
  - Scroll-to-top button
- **Performance Optimized**: Component-based architecture, lazy scroll animations via `IntersectionObserver`

## 🚀 Technologies Used

- **React 19**: Component-based UI
- **Vite 8**: Lightning-fast dev server & build tool
- **Tailwind CSS v4**: Utility-first styling (via `@tailwindcss/vite`)
- **Vanilla CSS**: Custom design system with CSS variables, Grid, Flexbox
- **Font Awesome**: Icons (CDN)
- **Google Fonts**: Inter font family

## 📱 Sections

1. **Hero**: Introduction with typing animation and floating tech icons
2. **About**: Contact information cards
3. **Experience**: Timeline of work history
4. **Projects**: Featured work with descriptions, responsibilities, and tech tags
5. **Achievements**: Notable recognition and awards
6. **Education**: Academic background
7. **Contact**: Contact form and information

## 🎨 Design Highlights

- **CSS Variables**: Consistent color scheme and spacing tokens
- **Gradient Effects**: Gradient backgrounds, text, and buttons
- **Scroll Snap**: Sections snap smoothly into view while scrolling (`scroll-snap-type: y proximity`)
- **Micro-interactions**: Subtle animations on hover and scroll
- **Custom Scrollbar**: Styled scrollbar matching the theme

## 📂 File Structure

```
portfolio-react/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Fixed navigation with active section tracking
│   │   ├── Hero.jsx        # Hero section with typing animation
│   │   ├── About.jsx       # Info cards
│   │   ├── Experience.jsx  # Work timeline
│   │   ├── Projects.jsx    # Project showcase grid
│   │   ├── Achievements.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Footer.jsx
│   │   ├── Notification.jsx
│   │   └── ScrollToTop.jsx
│   ├── App.jsx             # Root component
│   ├── index.css           # Global styles & design tokens
│   └── main.jsx            # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md               # This file
```

## 🔧 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📧 Contact

- **Email**: danhnh.dev@gmail.com
- **Phone**: +84 797456369
- **Location**: Ho Chi Minh City, Vietnam

---

Built with ❤️ using React, Vite, and modern web technologies
