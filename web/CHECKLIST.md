# Pre-Launch Checklist ✅

Your Next.js website is complete! Use this checklist before launching.

## 🎯 Pre-Setup

- [ ] Node.js 18+ installed (`node --version`)
- [ ] npm installed (`npm --version`)
- [ ] Have all 8-9 graph images ready (PNG or JPG)
- [ ] Github, LinkedIn, Email updated in contact info (if needed)

## 📦 Installation

- [ ] Navigate to `/web` directory
- [ ] Run `npm install`
- [ ] Wait for dependencies to install completely
- [ ] No error messages in console

## 🖼️ Add Your Graphs

Place these in `/public/graphs/`:
- [ ] `global-vs-india.png`
- [ ] `funding-trends.png`
- [ ] `funding-ict.png`
- [ ] `top-cities-ict.png`
- [ ] `top-cities-funding.png`
- [ ] `funding-timeline.png`
- [ ] `sectors-marketcap.png`
- [ ] `global-countries.png`
- [ ] `funding-forecast.png` (ML model graph)

## 🧪 Test Development Server

- [ ] Run: `npm run dev`
- [ ] No build errors
- [ ] Server running on localhost:3000
- [ ] Open http://localhost:3000 in browser
- [ ] Page loads without errors

## 📄 Test All Pages

### Home (/)
- [ ] Hero section displays correctly
- [ ] Animated background works
- [ ] CTA buttons clickable
- [ ] Feature cards display nicely
- [ ] Mobile responsive

### About (/about)
- [ ] All 4 sections visible
- [ ] Text readable
- [ ] Icons display
- [ ] Problem/Solution section formatting good
- [ ] Mobile responsive

### Datasets (/datasets)
- [ ] 3 dataset cards visible
- [ ] Row/column info displays
- [ ] Attributes list formatted well
- [ ] Data pipeline section shows 4 steps
- [ ] Mobile responsive

### Visuals (/visuals)
- [ ] All 8 graph cards visible
- [ ] Graph images load (or show placeholders)
- [ ] Hover zoom effect works
- [ ] Text overlays readable
- [ ] Key takeaways section displays
- [ ] Mobile: Cards stack in 1 column

### Model (/model)
- [ ] 4 metric cards visible with correct values
- [ ] Model specification card displays
- [ ] Performance metrics card displays
- [ ] Forecast graph section visible
- [ ] Model insights (4 categories) display
- [ ] Mobile responsive

### Conclusion (/conclusion)
- [ ] 4 conclusion cards visible with icons
- [ ] Executive summary text readable
- [ ] Strategic recommendations (3 cards) visible
- [ ] Future outlook section (2 cards) displays
- [ ] Mobile responsive

### Contact (/contact)
- [ ] 3 contact cards visible (GitHub, LinkedIn, Email)
- [ ] External links work (test clicks)
- [ ] Project info cards display
- [ ] CTA buttons clickable
- [ ] Social media footer icons visible
- [ ] Mobile responsive

## 🎨 Theme Testing

- [ ] Click theme toggle (sun/moon icon)
- [ ] Dark mode applies to all pages
- [ ] Light mode applies to all pages
- [ ] Colors readable in both modes
- [ ] Transitions smooth
- [ ] Theme persists on refresh

## 📱 Mobile Testing

Resize browser to mobile width or use DevTools:
- [ ] Navbar hamburger menu appears
- [ ] Menu items clickable
- [ ] Content stacks vertically
- [ ] Images resize properly
- [ ] Text readable (not too small)
- [ ] Buttons touch-friendly
- [ ] No horizontal overflow

## ⚡ Performance

- [ ] Page loads in < 3 seconds
- [ ] Animations smooth (no jank)
- [ ] Images load properly
- [ ] No console errors
- [ ] Lighthouse score > 80

## 🔗 Links Testing

- [ ] Home nav links work
- [ ] Footer links work
- [ ] Social media links open in new tab
- [ ] Contact links (email, GitHub, LinkedIn) work
- [ ] All internal links navigate correctly

## 🎬 Animation Testing

- [ ] Hero blob animations smooth
- [ ] Floating cards animate
- [ ] Hover effects work on cards
- [ ] Scroll animations trigger
- [ ] Page transitions smooth
- [ ] No animation stuttering

## 🏗️ Build for Production

- [ ] Stop dev server (Ctrl+C)
- [ ] Run: `npm run build`
- [ ] Build completes without errors
- [ ] `.next` folder created
- [ ] No warnings about deprecated code

## 🚀 Test Production Build

- [ ] Run: `npm start`
- [ ] Production server starts
- [ ] http://localhost:3000 loads
- [ ] All pages accessible
- [ ] No errors in console

## 📊 Content Verification

- [ ] All text is accurate
- [ ] No placeholder text remains
- [ ] Social links point to correct profiles
- [ ] Email address correct
- [ ] GitHub repo link correct
- [ ] Dataset descriptions accurate
- [ ] Model metrics correct
- [ ] Conclusion points relevant

## 🔐 Security Check

- [ ] No API keys in code
- [ ] No passwords in files
- [ ] `.env.local` not committed (if using git)
- [ ] `.gitignore` configured properly

## 📋 SEO Check

- [ ] Page titles descriptive
- [ ] Meta descriptions present
- [ ] No duplicate content
- [ ] Images have alt text
- [ ] Open Graph tags set

## ✨ Polish & Details

- [ ] Navbar branding clear
- [ ] Footer copyright date correct
- [ ] Font sizes readable
- [ ] Spacing consistent
- [ ] Colors professional
- [ ] No typos throughout

## 🎁 Optional Enhancements

- [ ] Add Google Analytics
- [ ] Add favicon
- [ ] Set up email notifications
- [ ] Create social media preview images
- [ ] Add sitemap.xml
- [ ] Add robots.txt

## 🌐 Deployment Preparation

### For Vercel
- [ ] Push code to GitHub
- [ ] Connect GitHub to Vercel
- [ ] Environment variables set
- [ ] Build settings correct

### For Netlify
- [ ] Build command: `npm run build`
- [ ] Publish directory: `.next`
- [ ] Environment variables set

### For Self-Hosted
- [ ] Server has Node.js installed
- [ ] Port 3000 available (or configured)
- [ ] PM2 or similar process manager ready
- [ ] SSL certificate ready
- [ ] Domain configured

## 📝 Documentation

- [ ] README.md up to date
- [ ] QUICKSTART.md useful
- [ ] COMPONENTS.md references accurate
- [ ] SITEMAP.md reflects actual structure

## 🎯 Final Checks

- [ ] No console errors
- [ ] No console warnings (or acceptable)
- [ ] All images load
- [ ] All fonts load
- [ ] All animations smooth
- [ ] All links work
- [ ] Mobile fully functional
- [ ] Dark mode working
- [ ] Build successful
- [ ] Production ready

## ✅ Launch Checklist

- [ ] All above items checked ✓
- [ ] Ready to deploy
- [ ] Backup of code taken
- [ ] Domain ready (if applicable)
- [ ] SSL certificate ready (if applicable)
- [ ] Monitoring set up (if needed)

---

## 🚀 Launch Commands

When ready to deploy:

```bash
# Final build
npm run build

# Test production
npm start

# Or deploy to Vercel/Netlify
# (Refer to QUICKSTART.md)
```

## 🎉 Congratulations!

Your website is ready to impress! 

**Share it with:**
- Portfolio reviewers
- Potential employers
- Data science community
- Your network on LinkedIn

---

**Questions?** Check:
- README.md – Full documentation
- QUICKSTART.md – Setup help
- COMPONENTS.md – Component reference
- SITEMAP.md – Site structure

**Need help?** Contact: shubhamm18.work@gmail.com

---

**Last Updated:** November 2024
**Status:** ✅ Ready to Launch!
