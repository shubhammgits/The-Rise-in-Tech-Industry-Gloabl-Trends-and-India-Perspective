# Quick Start Guide – The Rise in Tech Industry Website

This guide will help you get the Next.js website up and running in minutes.

## ⚡ Quick Setup (5 minutes)

### 1. Navigate to the project directory
```powershell
cd "path\to\Rise in Tech Industry at Gobal and India perspective analysis\web"
```

### 2. Install dependencies
```powershell
npm install
```

### 3. Add your graph images
Copy your 8-9 Plotly graphs to `public/graphs/`:
- `global-vs-india.png`
- `funding-trends.png`
- `funding-ict.png`
- `top-cities-ict.png`
- `top-cities-funding.png`
- `funding-timeline.png`
- `sectors-marketcap.png`
- `global-countries.png`
- `funding-forecast.png`

### 4. Start the development server
```powershell
npm run dev
```

### 5. Open in browser
Navigate to: **http://localhost:3000**

## 📱 Pages Available

- **Home**: `/` – Hero section with overview
- **About**: `/about` – Project motivation & methodology
- **Datasets**: `/datasets` – Dataset details & specifications
- **Visuals**: `/visuals` – 8 interactive graph cards
- **Model**: `/model` – ML model & performance metrics
- **Conclusion**: `/conclusion` – Key findings & recommendations
- **Contact**: `/contact` – Social links & connect

## 🎨 Theme & Customization

### Switch Theme
Click the sun/moon icon in the navbar to toggle dark/light mode.

### Customize Colors
Edit `tailwind.config.js` to change:
- Primary color (Indigo)
- Accent color (Violet)
- Background gradients
- Custom animations

### Update Content
Edit individual page files in `/app/[page]/page.tsx` to update:
- Titles and descriptions
- Data insights
- Metrics and statistics
- Social links and contact info

## 📦 Build & Deploy

### Build for Production
```powershell
npm run build
```

### Start Production Server
```powershell
npm start
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel
3. Auto-deploy on push

### Option 2: Netlify
```powershell
npm run build
# Deploy the .next folder
```

### Option 3: Self-hosted
```powershell
npm run build
npm start
# Server runs on :3000
```

## 🐛 Common Issues & Fixes

### Issue: "npm command not found"
**Solution**: Install Node.js from https://nodejs.org

### Issue: Graphs not showing
**Solution**: Ensure images are in `/public/graphs/` with correct names

### Issue: Dark mode not working
**Solution**: Clear cache and hard refresh (Ctrl+Shift+R)

### Issue: Port 3000 already in use
**Solution**: 
```powershell
npm run dev -- -p 3001
```

## 📚 Project Structure
```
web/
├── app/              # Pages (Home, About, Datasets, etc.)
├── components/       # Reusable components
├── styles/          # Global CSS & animations
├── public/graphs/   # Graph images (add yours here)
├── package.json     # Dependencies
└── README.md        # Full documentation
```

## 🔗 Important Links

- **GitHub**: https://github.com/shubhammgits/The-Rise-in-Tech-Industry-Gloabl-Trends-and-India-Perspective
- **LinkedIn**: https://www.linkedin.com/in/shhshubham/
- **Email**: shubhamm18.work@gmail.com

## ✨ Features Included

✅ Animated hero sections
✅ Glass-morphism cards
✅ Dark/Light theme toggle
✅ Fully responsive design
✅ Smooth page transitions
✅ Interactive graph cards with zoom
✅ Performance metrics dashboard
✅ Social media integration
✅ SEO optimized
✅ Mobile-first layout

## 📖 Next Steps

1. **Add Graphs**: Copy your Plotly exports to `/public/graphs/`
2. **Update Content**: Customize text in page files
3. **Test Locally**: Run `npm run dev` and visit http://localhost:3000
4. **Build**: Run `npm run build` for production
5. **Deploy**: Push to GitHub and deploy to Vercel

## 💡 Pro Tips

- Use Chrome DevTools (F12) to test responsive design
- Check "Reduce motion" settings in accessibility for performance
- Use GitHub Actions for automated deployments
- Monitor Lighthouse scores for performance
- Keep images optimized (< 200KB per graph)

## 📞 Support

For issues or questions:
1. Check README.md for detailed documentation
2. Review component code in `/components/`
3. Check page files in `/app/`
4. Reach out via email or LinkedIn

---

**Ready to launch?** Run `npm run dev` and enjoy! 🚀
