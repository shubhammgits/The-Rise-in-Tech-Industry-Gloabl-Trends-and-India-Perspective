# Components Reference Guide

A comprehensive guide to all reusable components in the project.

## 📦 Component Imports

```tsx
// Individual imports
import Navbar from '@/components/Navbar'
import { AnimatedHero, GlassCard, MetricCard, FloatingCard } from '@/components/Cards'
import GraphCard from '@/components/GraphCard'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

// Or use central export
import { Navbar, GlassCard, MetricCard, GraphCard } from '@/components'
```

---

## 🎨 Components

### 1. **Navbar** (Layout Component)

Navigation bar with theme toggle and mobile menu.

**Props**: None (reads from config)

**Features**:
- Logo with gradient text
- Responsive menu (desktop + mobile)
- Dark/Light theme toggle
- Active page highlighting
- Mobile hamburger menu

**Usage**:
```tsx
import Navbar from '@/components/Navbar'

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* page content */}
    </>
  )
}
```

---

### 2. **AnimatedHero** (Container)

Full-screen hero section with animated background blobs.

**Props**:
```tsx
interface AnimatedHeroProps {
  children: ReactNode
}
```

**Features**:
- Full viewport height
- Gradient hero background
- Floating animated blobs
- Centered content
- Smooth animations

**Usage**:
```tsx
import { AnimatedHero } from '@/components/Cards'

export default function Home() {
  return (
    <AnimatedHero>
      <h1>Welcome to My Project</h1>
      <p>Your description here</p>
    </AnimatedHero>
  )
}
```

---

### 3. **GlassCard** (Card Component)

Glass-morphism card with hover animations.

**Props**:
```tsx
interface GlassCardProps {
  children: ReactNode
  className?: string
}
```

**Features**:
- Glass-morphism effect
- Hover lift animation
- Responsive padding
- Dark mode support

**Usage**:
```tsx
import { GlassCard } from '@/components/Cards'

export default function MyComponent() {
  return (
    <GlassCard className="p-8">
      <h3>Card Title</h3>
      <p>Card content goes here</p>
    </GlassCard>
  )
}
```

---

### 4. **MetricCard** (Data Display)

Displays a single metric with icon, label, and value.

**Props**:
```tsx
interface MetricCardProps {
  value: string           // e.g., "0.92", "₹2.1L"
  label: string          // e.g., "R² Score"
  icon: any              // Lucide React icon component
}
```

**Features**:
- Icon display
- Label and value
- Hover scale effect
- Glass-morphism style

**Usage**:
```tsx
import { MetricCard } from '@/components/Cards'
import { Target } from 'lucide-react'

export default function Dashboard() {
  return (
    <MetricCard 
      value="0.92" 
      label="R² Score" 
      icon={Target} 
    />
  )
}
```

---

### 5. **FloatingCard** (Animated Card)

Card with continuous floating animation.

**Props**:
```tsx
interface FloatingCardProps {
  children: ReactNode
  delay?: number         // Animation delay in seconds
}
```

**Features**:
- Continuous floating motion
- Customizable delay
- Glass-morphism style
- Smooth transitions

**Usage**:
```tsx
import { FloatingCard } from '@/components/Cards'

export default function MyComponent() {
  return (
    <FloatingCard delay={0.5}>
      <h3>Floating Content</h3>
      <p>This card floats up and down</p>
    </FloatingCard>
  )
}
```

---

### 6. **GraphCard** (Data Visualization)

Displays a graph/image with title, description, and insights.

**Props**:
```tsx
interface GraphCardProps {
  title: string          // Graph title
  description: string    // Short description
  imagePath: string      // Path to image in /public
  insights: string[]     // Array of key insight strings
}
```

**Features**:
- Image with zoom on hover
- Title and description
- Insights list
- Smooth animations
- Responsive layout

**Usage**:
```tsx
import GraphCard from '@/components/GraphCard'

export default function VisualsPage() {
  return (
    <GraphCard 
      title="Global vs India Valuation"
      description="Market cap comparison between global and Indian tech"
      imagePath="/graphs/global-vs-india.png"
      insights={[
        'US leads with 40% market share',
        'India growing at 35% CAGR',
        'Strong sector diversity'
      ]}
    />
  )
}
```

---

### 7. **Footer** (Layout Component)

Footer with navigation links and social media.

**Props**: None (reads from config)

**Features**:
- Logo and description
- Quick links
- Social media buttons
- Copyright notice
- Responsive grid

**Usage**:
```tsx
import Footer from '@/components/Footer'

export default function Layout() {
  return (
    <>
      {/* page content */}
      <Footer />
    </>
  )
}
```

---

### 8. **ScrollToTop** (Utility)

Floating button to scroll back to top.

**Props**: None

**Features**:
- Auto-hide on top
- Smooth scroll
- Animated appearance
- Glow effect on hover

**Usage**:
```tsx
import ScrollToTop from '@/components/ScrollToTop'

export default function Layout() {
  return (
    <>
      {/* content */}
      <ScrollToTop />
    </>
  )
}
```

---

## 🎨 Styling Classes

Available Tailwind utility classes:

### Custom Components
```css
.glass-card          /* Glass-morphism card */
.gradient-text       /* Gradient text effect */
.section-container   /* Max-width container with padding */
.btn-primary         /* Primary button style */
.btn-secondary       /* Secondary button style */
.metric-card         /* Metric display card */
```

### Custom Effects
```css
.shadow-glow         /* Indigo glow shadow */
.shadow-glow-accent  /* Violet accent glow */
```

---

## 🎬 Animation Classes

Available animations:

```css
.animate-float       /* Floating motion */
.animate-pulse-slow  /* Slow pulse effect */
.animate-shimmer     /* Shimmer loading effect */
```

---

## 🌗 Theme Support

All components support dark mode automatically.

Enable dark mode in your component:
```tsx
'use client'

import { useTheme } from 'next-themes'

export default function MyComponent() {
  const { theme, setTheme } = useTheme()
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <button onClick={toggleTheme}>
      Toggle Theme
    </button>
  )
}
```

---

## 📱 Responsive Utilities

Breakpoints:
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px

Example:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Single column on mobile, 2 on tablet, 3 on desktop */}
</div>
```

---

## 🎯 Best Practices

1. **Use 'use client'** for interactive components
2. **Wrap animations** in motion.div from Framer Motion
3. **Keep components small** and focused
4. **Pass data as props** for reusability
5. **Use semantic HTML** for accessibility
6. **Test on mobile** frequently

---

## 🔗 Icon Sources

### Lucide React
```tsx
import { Home, Settings, ChevronDown } from 'lucide-react'
```

### React Icons
```tsx
import { FaGithub, FaLinkedin } from 'react-icons/fa'
```

[Browse icons](https://lucide.dev) and [React Icons](https://react-icons.github.io/react-icons)

---

## 💡 Common Patterns

### Card Grid Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map(item => (
    <GlassCard key={item.id}>
      {/* content */}
    </GlassCard>
  ))}
</div>
```

### Animated Container
```tsx
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

export default function Container() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
    >
      {/* staggered children */}
    </motion.div>
  )
}
```

### Metric Row
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  <MetricCard value="0.92" label="R² Score" icon={Target} />
  <MetricCard value="₹2.1L" label="MAE" icon={BarChart3} />
  <MetricCard value="₹3.5L" label="RMSE" icon={TrendingUp} />
  <MetricCard value="85%" label="Accuracy" icon={Brain} />
</div>
```

---

## 📚 Related Documentation

- [README.md](./README.md) – Full project documentation
- [QUICKSTART.md](./QUICKSTART.md) – Setup guide
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)

---

## ✨ Tips & Tricks

- Use motion.div for animations
- Combine multiple classes with clsx
- Test dark mode with DevTools
- Use 'use client' for interactivity
- Keep animations under 0.8s
- Optimize images before adding

---

**Happy building! 🚀**
