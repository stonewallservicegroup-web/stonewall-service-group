# Stonewall Service Group Website

Official website for Stonewall Service Group (SSG) - Central Florida's trusted property services coordination partner.

## 📋 Contact

- **Phone:** (321) 358-7646
- **Email:** stonewallservicegroup@gmail.com
- **Service Area:** Central Florida (Melbourne, Orlando, Brevard County, Orange County)

## 🛠️ Services

- **Residential Cleaning** - Standard, deep, move-in/move-out cleaning
- **Turnover Services** - Rental and sale-ready property support
- **Exterior Services** - Pressure washing, driveway cleaning, curb appeal
- **Maintenance Coordination** - Small repairs, vendor coordination, work order support
- **Commercial Support** - Office cleaning, facility maintenance, exterior work
- **Recurring Property Care** - Scheduled service plans for ongoing properties

## 🚀 Deployment

### GitHub Pages Setup (Live in <5 min)

1. Go to **Settings → Pages**
2. Select **Deploy from branch**
3. Choose **main** branch → **/(root)**
4. Save

Your site will be live at: `https://stonewallservicegroup-web.github.io/stonewall-service-group`

### Custom Domain Setup

1. Purchase/verify **stonewallservicegroup.com** domain
2. Update DNS records (CNAME or A record) pointing to GitHub Pages
3. Go to **Settings → Pages → Custom domain**
4. Enter `stonewallservicegroup.com`
5. Enable HTTPS

See [GitHub Pages Custom Domain Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 📧 Form Integration (Next Step)

The quote form currently shows a success message locally. To enable email notifications:

### Option 1: Formspree (Easiest)
1. Go to [formspree.io](https://formspree.io)
2. Create account and new form
3. Copy your form ID
4. Update `index.html` line 161 with your Formspree ID

### Option 2: GoHighLevel Integration
1. Set up GoHighLevel account
2. Create landing page form
3. Replace form action with GHL endpoint

### Option 3: Custom Backend
Deploy a simple Node/Python server to handle form submissions and send emails via SendGrid, Mailgun, or similar.

## 🎨 Features

✅ **Fully Responsive** - Mobile, tablet, desktop optimized  
✅ **SEO Ready** - Schema markup for local business  
✅ **Fast & Performant** - Zero dependencies, pure HTML/CSS/JS  
✅ **Accessible** - WCAG compliant, proper semantic HTML  
✅ **Service Icons** - Visual service cards with emoji icons  
✅ **Mobile Menu** - Hamburger navigation for small screens  
✅ **Call-to-Action** - Multiple conversion points throughout  

## 📈 Future Enhancements

- [ ] Google Reviews integration for social proof
- [ ] Service area pages (Melbourne, Orlando, etc.) for SEO
- [ ] Online booking system (Calendly, GHL, or custom)
- [ ] Photo gallery / before-after showcase
- [ ] Testimonials/case studies section
- [ ] FAQ section
- [ ] Blog for service tips and industry updates
- [ ] Google Analytics setup
- [ ] Live chat integration

## 📁 File Structure

```
├── index.html        # Main website (structure + content)
├── styles.css        # Styling & responsive design
├── script.js         # Interactivity (mobile menu, form handling)
└── README.md         # This file
```

## 🔧 Local Development

1. Clone the repo:
   ```bash
   git clone https://github.com/stonewallservicegroup-web/stonewall-service-group.git
   cd stonewall-service-group
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. Edit files and test changes

## 🎯 Quick Checklist

- [x] Website content & design
- [x] Mobile responsive layout
- [x] Service descriptions
- [x] Contact information
- [x] Quote request form
- [x] SEO schema markup
- [ ] Enable GitHub Pages
- [ ] Connect custom domain
- [ ] Set up form email notifications
- [ ] Add high-quality property photos
- [ ] Add testimonials/reviews section
- [ ] Set up Google Analytics

## 📞 Getting Help

For GitHub Pages issues, see [GitHub Pages Help](https://docs.github.com/en/pages)

For DNS/domain issues, contact your domain registrar's support.

---

**Last Updated:** June 22, 2026  
**Status:** Ready for Deployment ✨
