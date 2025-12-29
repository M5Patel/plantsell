# 🚀 M5 Plants - Quick Start Guide

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Steps to Run

```bash
# 1. Navigate to project directory
cd "c:\Users\1004TU\Desktop\CDMI\React project\plant"

# 2. Install dependencies (if not already installed)
npm install

# 3. Start development server
npm start

# 4. Open browser
# Navigate to http://localhost:3000
```

## Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (not recommended)
npm run eject
```

## 📱 Features to Test

### 1. **Header Features**
- ✅ Logo click to go to home
- ✅ Navigation links (Home, Shop)
- ✅ Search functionality with dynamic expansion
- ✅ Cart count badge with link
- ✅ Mobile menu for smaller screens

### 2. **Home Page**
- ✅ Carousel with multiple slides
- ✅ Festive slides (Christmas, Summer, Diwali)
- ✅ Benefits section with cards
- ✅ Products showcase
- ✅ Why choose us section
- ✅ Featured plants with add to cart
- ✅ Customer reviews
- ✅ Plant care tips
- ✅ Call to action button

### 3. **Shop Page**
- ✅ Category filtering
- ✅ Price sorting (low-high, high-low)
- ✅ Product grid with cards
- ✅ View Details button (opens modal)
- ✅ Quick add to cart
- ✅ Search results display

### 4. **Product Detail Modal** (Click "View Details" on any product)
- ✅ Large product image
- ✅ Thumbnail gallery
- ✅ Product information
- ✅ Specifications
- ✅ Care instructions
- ✅ Seller benefits
- ✅ Add to cart button
- ✅ Wishlist button
- ✅ Close button and backdrop click

### 5. **Footer Features**
- ✅ Company information
- ✅ Social media links
- ✅ Multiple footer sections
- ✅ Newsletter subscription
- ✅ Trust badges
- ✅ Contact information
- ✅ Footer links

### 6. **Scroll to Top Button**
- ✅ Appears after scrolling down 300px
- ✅ Click to smoothly scroll to top
- ✅ Smooth animations

### 7. **Responsive Design**
- ✅ Desktop view (1024px+)
- ✅ Tablet view (768px - 1024px)
- ✅ Mobile view (< 768px)
- ✅ Use DevTools to test different screen sizes

## 🔍 Testing Search

1. Go to header
2. Click search icon
3. Type plant name (e.g., "money plant", "snake plant")
4. Press Enter or use search button
5. Should be redirected to /shop with search results

## 🛒 Testing Cart

1. Click any "Add to Cart" or "🛒 Add" button
2. See the success alert
3. Check the cart count badge in header (increases)
4. Click "Cart" button to view cart

## 📱 Testing Responsiveness

1. Open DevTools (F12)
2. Click device toggle (mobile icon)
3. Select different devices:
   - iPhone 12
   - iPad
   - Galaxy S21
4. Test all interactions on each device

## 🎨 Customization Tips

### Change Primary Color
Edit `src/index.css` and `src/pages/Home.css`:
```css
/* Find and replace */
--primary-green: #4caf50;  /* Change this */
--dark-green: #0d3d22;      /* and this */
```

### Update Products
Edit `src/data/plantData.js`:
```javascript
export const plantProducts = {
  indoor: [
    {
      id: 101,
      name: "Your Plant Name",
      price: 399,
      rating: "4.5",
      category: "indoor",
      image: "image-url-here",
      description: "Plant description"
    },
    // Add more products
  ]
}
```

### Update Company Info
Edit `src/components/Footer.jsx`:
- Change company name
- Update social links
- Modify contact information
- Update footer section links

### Customize Homepage Text
Edit `src/pages/Home.jsx`:
- Update carousel slides
- Modify section titles
- Change benefit descriptions
- Update care tips

## 🐛 Troubleshooting

### Issue: Page not loading
```bash
# Clear node_modules and reinstall
rm -r node_modules package-lock.json
npm install
npm start
```

### Issue: Images not showing
- Check image paths in components
- Ensure images exist in `src/img` folder
- Update image imports

### Issue: Styles not applying
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server (npm start)
- Check CSS file paths

### Issue: Search not working
- Verify plantData.js has proper structure
- Check browser console for errors
- Ensure product names match search terms

## 📊 Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance Tips

1. **Images**: Optimize images before adding (use tools like TinyPNG)
2. **Code Splitting**: Already configured in React
3. **Lazy Loading**: AOS animations load on scroll
4. **Caching**: Browser caching handled automatically

## 🔐 Security Notes

- Always validate form inputs
- Use HTTPS in production
- Never expose sensitive data
- Sanitize user inputs for search

## 📞 Support & Documentation

### Component Documentation

#### Header Component
- Located: `src/components/Header.jsx`
- Props: `cartCount` (number)
- Features: Search, navigation, cart badge

#### Footer Component
- Located: `src/components/Footer.jsx`
- Features: Multi-section layout, newsletter, social links

#### Product Detail Modal
- Located: `src/components/ProductDetailModal.jsx`
- Props: `product` (object), `onClose` (function)

#### Scroll to Top
- Located: `src/components/ScrollToTop.jsx`
- Auto: Shows on scroll, disappears on scroll up

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Hosting
- Vercel: Connect GitHub, auto-deploys
- Netlify: Drop build folder or connect GitHub
- AWS S3 + CloudFront: Upload build folder
- Traditional Hosting: Upload build folder via FTP

## 📝 Notes

- All animations use GPU-accelerated CSS transforms
- Responsive design tested on real devices
- Accessibility features included (ARIA labels)
- Mobile-first development approach
- Production-ready code

---

**Happy Coding! 🌿**

For more information, check UPGRADE_SUMMARY.md
