# AI Copilot Instructions for Plant E-Commerce Project

## Project Overview
A React-based plant e-commerce application built with Create React App. Features product browsing by category, search functionality, shopping cart management, and smooth page transitions. Uses Material-UI, Bootstrap, and Framer Motion for UI/animations.

## Architecture & Data Flow

### Core Structure
- **App.jsx**: Root component wrapping routes with CartProvider context and Framer Motion page transitions
- **pages/**: Route-mounted components (Home, ShopProducts, Cart)
- **components/**: Reusable UI components (Header, Footer, ProductDetailModal, ScrollToTop)
- **context/CartContext.jsx**: Centralized cart state management using React Context API
- **data/plantData.js**: Product and category data (not API-based; static data structure)

### State Management Pattern
**Context API Only** - Single CartContext managing:
- `cartItems[]` - array of products with quantity
- Cart operations: `addToCart`, `removeFromCart`, `updateQuantity`, `getTotalPrice`, `getTotalItems`, `clearCart`
- Error handling: useCart hook throws if used outside CartProvider

**Key Pattern**: Cart quantity aggregates across duplicate products when adding same item multiple times.

### Data Organization
- **plantCategories**: Array of 5 categories (indoor, flowering, succulents, outdoor, climbing) with slug IDs
- **plantProducts**: Object keyed by category slug containing product arrays
- Products structure: `{id, name, price, rating, category, image (Unsplash URLs), description}`
- Search/filter operates on flattened product lists by category selection + search term matching

## Developer Workflows

### Common Commands
```bash
npm start              # Dev server on localhost:3000 (auto-reload)
npm run build          # Production build to /build
npm test               # Jest with react-scripts (watch mode)
npm run eject          # One-way CRA eject (avoid unless necessary)
```

### Key Dependencies
- **React Router v6**: Routes only (no nested routing; simple 3-route structure)
- **Framer Motion**: Page transitions (motion.div with pageVariants), component animations
- **Material-UI (MUI)**: Header AppBar, navigation menus, icons (SearchIcon, ShoppingCartIcon)
- **Bootstrap/React-Bootstrap**: Card styling, grid layout
- **AOS**: Scroll animations (initialized in useEffect with `AOS.init()`)
- **Styled Components**: CSS-in-JS alongside .css files (mixed approach)

## Code Patterns & Conventions

### Component Patterns
1. **Functional components with hooks only** - No class components
2. **useEffect for side effects**: AOS init, data fetching would go here
3. **Framer Motion variants defined as objects at component level**:
   ```jsx
   const variants = { hidden: {...}, visible: {...} };
   <motion.div variants={variants} initial="hidden" animate="visible">
   ```
4. **Custom hooks for context**: Always use `useCart()` rather than useContext directly

### Styling Approach
- **CSS Modules NOT used** - Pure .css files imported at component level (e.g., ShopProducts.css, Header.css)
- **No global tailwind** - Bootstrap classes mixed with custom CSS
- **Emotion & Styled Components** installed but underutilized; prefer existing .css files for consistency

### Search & Filtering
- Search params from URL query string: `useSearchParams()` hook
- Category filter via state: `selectedCategory` with "all" as catch-all
- Filtering: `.flat()` all products when category="all", otherwise `plantProducts[slug]`
- Search term matches product name/description (case-insensitive)

### UI/UX Conventions
- **Modal for product details**: ProductDetailModal component (not visible in snippets; check implementation)
- **Cart badge on header**: ShoppingCartIcon with Badge component showing `cartCount`
- **Mobile nav menu**: MUI Menu component triggered by hamburger (anchorElNav state)
- **Page loader indicators**: None visible; consider adding for future async operations
- **Empty states**: Search shows "0 products available" - handle explicitly in cart/category views

## File Organization Rules
- Components in `components/` must export named exports when possible
- Page components go in `pages/` and are mounted at routes
- Each component has co-located .css file (e.g., Header.jsx ↔ Header.css)
- Shared data in `data/` directory; no API layer currently
- No services or utils directories yet - add if cross-component logic grows

## Integration Points & External Dependencies
1. **Unsplash Images**: All product/category images use public Unsplash URLs (w=400&h=300&fit=crop format)
2. **MUI Theming**: Not customized; using defaults - can add theme provider in App.jsx if needed
3. **React Router Navigation**: `useNavigate()` for programmatic navigation, `Link` for declarative
4. **No authentication/backend**: Static product data; cart is session-only (clears on refresh)

## Common Modifications
- **Add new product category**: Update plantData.js arrays (both categories and products objects)
- **Change button styling**: Modify Button components in components/ to use className with .css files
- **Add product filters**: Extend filter logic in ShopProducts.jsx useEffect and add UI controls
- **Implement persistence**: Add localStorage in CartContext operations for cart persistence
- **Add animations**: Use Framer Motion with existing variant patterns; import AOS for scroll triggers

## Gotchas & Important Notes
- **Cart resets on refresh** - No persistence layer implemented yet
- **Product IDs must be unique** across categories (not enforced, but assumed)
- **Search is client-side only** - No debouncing or performance optimization for large datasets
- **No error boundaries** - Add React Error Boundary component if stability is needed
- **useCart hook throws if outside provider** - Never call in root App; only in child components
