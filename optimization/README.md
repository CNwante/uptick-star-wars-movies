# 🚀 Week 7 — Performance, Accessibility & SEO Optimization

## 📄 Task Overview
This task focused on analyzing and improving the **performance, accessibility, and SEO** of my Star Wars Movies project. Using Lighthouse and PageSpeed Insights, I identified bottlenecks and applied targeted optimizations to improve the overall user experience.

---

## 🛠 Optimizations Applied

### **Performance**
- ✅ Compressed and optimized images (e.g., logo reduced from 34 KB → 6 KB, auth background from 78 KB → 40 KB).
- ✅ Converted images to modern `.webp` format.
- ✅ Added `width` and `height` attributes to images to prevent layout shifts.
- ✅ Implemented **lazy loading** for routes/pages using `React.lazy` and `Suspense`.
- ✅ Optimized landing page rendering.
- ✅ Migrated hosting from **Surge** → **Vercel** to resolve poor FCP/LCP and blocked crawling issues.

### **Accessibility**
- ✅ Improved contrast ratio for better readability.
- ✅ Fixed accessibility issues on the Movies page (increasing score from 91 → 100).

### **SEO**
- ✅ Added `meta` title and description.
- ✅ Added `sitemap.xml` and `robots.txt` for search engine indexing.
- ⚠️ **Note:** SEO scores remain low (58 → 66) because testing was done on a Vercel preview branch (which blocks crawling by default). I am confident this will rise above 90% once merged to the main branch and deployed to production.

---

## 📊 Results

### **Landing Page**
- **Before:** Performance 67 | Accessibility 100 | Best Practices 100 | SEO 58
- **After:** Performance 98 | Accessibility 100 | Best Practices 100 | SEO 66
![Landing page before](<desktop/1a. desktop_home-page-before.png>)
![Landing page  after](<desktop/1b. desktop_home-page-after.png>)


### **Signup Page**
- **Before:** Performance 59 | Accessibility 100 | Best Practices 100 | SEO 58
- **After:** Performance 99 | Accessibility 100 | Best Practices 100 | SEO 66
![Signup page before](<desktop/2a. desktop_signin-page-before.png>)
![Signup page after](<desktop/2b. desktop_signin-page-after.png>)

### **Movies Page**
- **Before:** Performance 53 | Accessibility 91 | Best Practices 100 | SEO 58
- **After:** Performance 98 | Accessibility 100 | Best Practices 100 | SEO 66
![Movies page before](<desktop/3a. desktop_movies-page-before.png>)
![Movies page after](<desktop/3b. desktop_movies-page-after.png>)

---

## 🧩 Branching & Commit History

Created a new branch: `fix/perf-a11y-seo`

Relevant commits include:
- `fix(image): convert image format to .webp to improve site performance`
- `fix(image): add explicit width and height to logo to improve site performance`
- `fix(image): compress auth bg-image to improve site performance`
- `fix(homepage): optimize landing page`
- `refactor: lazy load pages to improve performance`
- `fix(a11y): improve contrast ratio on logout button for better readability`
- `fix(seo): add meta data to improve seo`
- `chore(seo): add sitemap.xml and robots.txt for search engine indexing`
- `fix(router): add vercel rewrite rule to handle client-side routing`

---

## 📌 Notes
- Hosting migration (Surge → Vercel) played a significant role in performance improvements.
- SEO is expected to improve further once deployed to production (outside Vercel preview environment).
- This was my **first real optimization project**, and I learned the importance of combining hosting decisions with frontend optimizations to achieve the best results.
- For mobile optmization screenshots see [optimization/mobile](mobile)
