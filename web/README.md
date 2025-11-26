# The Rise in Tech Industry – Global Trends & India Perspective

A modern, animated, and highly informative Next.js website showcasing comprehensive data analysis of the global technology industry with special focus on India's transformative role.

# Live : https://the-rise-in-tech-industry-gloabl-tr.vercel.app/

## 🎯 Project Overview

This website presents findings from a detailed data science project analyzing:
- **1000+ global technology companies** by market capitalization
- **Indian startup funding ecosystem** (2015-2020) with city-wise breakdown
- **ICT infrastructure scores** across Indian smart cities
- **8+ interactive visualizations** and ML forecasting models

## 🚀 Features

✨ **Modern Design**
- Beautiful gradient backgrounds and glassmorphism effects
- Smooth animations with Framer Motion
- Fully responsive mobile-first layout
- Light & Dark theme toggle

📊 **Data Visualization**
- 8 interactive Plotly graphs
- Zoom-on-hover effects for images
- Animated data cards with insights
- Metrics dashboard with real-time stats

🤖 **Machine Learning**
- Linear Regression model (R² = 0.92)
- Startup funding forecasting
- ICT-Funding correlation analysis
- Performance metrics: MAE, RMSE, Accuracy

📱 **Responsive Components**
- Animated navbar with mobile menu
- Scroll-to-top button with fade effect
- Optimized charts and images
- Touch-friendly interactive elements

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.5
- **Animations**: Framer Motion 10
- **Icons**: Lucide React & React Icons
- **Theme**: next-themes for dark mode
- **Responsive**: Mobile-first, fully responsive
- **TypeScript**: Type-safe components

## 📁 Project Structure

```
web/
├── app/                      # Next.js App Router pages
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Home page
│   ├── about/page.tsx       # About project
│   ├── datasets/page.tsx    # Dataset information
│   ├── visuals/page.tsx     # Visualizations & graphs
│   ├── model/page.tsx       # ML model & forecast
│   ├── conclusion/page.tsx  # Conclusions & findings
│   └── contact/page.tsx     # Contact & social links
├── components/               # Reusable React components
│   ├── Navbar.tsx           # Navigation bar
│   ├── Cards.tsx            # Card components (Hero, Glass, Metrics, Floating)
│   ├── GraphCard.tsx        # Graph display card with zoom
│   ├── Footer.tsx           # Footer with social links
│   └── ScrollToTop.tsx      # Scroll to top button
├── styles/
│   └── globals.css          # Global styles & animations
├── public/
│   └── graphs/              # Graph images directory
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
└── postcss.config.js        # PostCSS config
```

## 🎨 Design & Theme

### Color Palette
- **Primary**: Indigo (#4f46e5)
- **Accent**: Violet (#7c3aed)
- **Dark**: Slate (#0f172a)
- **Light**: Slate (#f8fafc)

### Features
- Gradient backgrounds (hero sections)
- Glass-morphism cards with blur effects
- Soft shadows and hover effects
- Smooth transitions and micro-interactions
- Scroll animations on view

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ (or 20+)
- npm or yarn package manager

### Step 1: Install Dependencies

```bash
cd web
npm install
```

### Step 2: Add Your Graph Images

Place your Plotly graph images in the `/public/graphs/` directory:
- `global-vs-india.png`
- `funding-trends.png`
- `funding-ict.png`
- `top-cities-ict.png`
- `top-cities-funding.png`
- `funding-timeline.png`
- `sectors-marketcap.png`
- `global-countries.png`
- `funding-forecast.png` (ML model chart)

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Production

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Lint Code
```bash
npm run lint
```

## 📄 Pages & Content

### 1. **Home** (`/`)
- Animated hero section with floating elements
- Project highlights and features
- Call-to-action buttons

### 2. **About** (`/about`)
- Project motivation and goals
- Methodology overview
- Problem statement and solutions

### 3. **Datasets** (`/datasets`)
- Dataset descriptions and statistics
- Key attributes of each dataset
- Data processing pipeline

### 4. **Visuals** (`/visuals`)
- 8 interactive graph cards
- Graph insights and key takeaways
- Hover zoom effects on images

### 5. **Model** (`/model`)
- ML model specifications
- Performance metrics (R², MAE, RMSE)
- Actual vs Predicted vs Forecast chart

### 6. **Conclusion** (`/conclusion`)
- Key findings summary
- Strategic recommendations
- Future outlook (2024-2028)

### 7. **Contact** (`/contact`)
- Social media links (GitHub, LinkedIn, Email)
- Project information cards
- Call-to-action section

## 🎬 Animation & Effects

- **Page Transitions**: Fade-in animations on load
- **Scroll Animations**: Cards animate on view
- **Hover Effects**: Interactive hover states on cards
- **Floating Elements**: Continuous subtle floating motion
- **Gradient Text**: Dynamic gradient text effects
- **Shimmer**: Subtle shimmer loading effects

## 🌓 Dark Mode

The site includes automatic dark mode detection:
- Respects user's system preferences
- Manual toggle in navbar
- Smooth color transitions
- Optimized contrast ratios

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg+)

All components are optimized for each breakpoint with:
- Mobile-first design
- Touch-friendly interactions
- Responsive typography
- Adaptive layouts

## 🚀 Performance Optimizations

- Image optimization with Next.js Image component
- CSS minification with Tailwind
- Animation performance with GPU acceleration
- Lazy loading of components
- Code splitting with App Router

## 🔗 External Links

- **GitHub Repository**: https://github.com/shubhammgits/The-Rise-in-Tech-Industry-Gloabl-Trends-and-India-Perspective
- **LinkedIn**: https://www.linkedin.com/in/shhshubham/
- **Email**: shubhamm18.work@gmail.com

## 📊 Data Insights

### Key Findings
- US dominates with 40%+ of global tech market
- India showing 35% CAGR in startup funding
- Strong correlation between ICT and investment
- Bangalore and Mumbai lead in funding concentration

### ML Model Performance
- **R² Score**: 0.92 (92% variance explained)
- **MAE**: ₹2.1 Lakhs (average error)
- **RMSE**: ₹3.5 Lakhs (root mean squared error)
- **Accuracy**: 85% on test dataset

## 📝 Content Guidelines

When updating content:
- Keep descriptions concise but informative
- Use bullet points for key insights
- Maintain professional academic tone
- Include data references where applicable
- Update graphs in `/public/graphs/` directory

## 🐛 Troubleshooting

**Issue**: Graphs not displaying
- Ensure image files are in `/public/graphs/`
- Check file names match component references
- Verify image format (PNG, JPG supported)

**Issue**: Dark mode not working
- Clear browser cache
- Check next-themes installation
- Verify ThemeProvider in layout

**Issue**: Animations feel jank
- Check browser hardware acceleration
- Reduce animation duration
- Profile with Chrome DevTools

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)

## 👨‍💻 Development

### Adding New Pages
1. Create new folder in `/app/`
2. Add `page.tsx` file
3. Import components and customize
4. Navbar auto-includes in navigation

### Creating Custom Components
1. Create new file in `/components/`
2. Use 'use client' directive
3. Import Framer Motion and Tailwind classes
4. Export and use in pages

## 📄 License

This project is open source. Feel free to use and modify as needed.

## 🙏 Credits

**Data Source**: 
- Top 1000 Technology Companies Dataset
- Indian Startup Funding Dataset
- ICT Subdimension Dataset

**Created by**: Shubham

**Website Design & Development**: [Your Name]

---

Made with ❤️ for the global tech community.
