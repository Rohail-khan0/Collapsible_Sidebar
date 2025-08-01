# Collapsible Sidebar Project

A modern, responsive collapsible sidebar with smooth animations and clean design. Built with HTML, CSS, and JavaScript.

## Features

### 🎨 **Modern Design**
- Clean, minimalist interface with glassmorphism effects
- Beautiful gradient backgrounds and smooth transitions
- Responsive design that works on all devices

### 🔄 **Smooth Animations**
- Cubic-bezier easing for natural movement
- Smooth open/close transitions (300ms)
- Hover effects with transform animations
- Loading animations and ripple effects

### 📱 **Responsive Layout**
- Desktop: Sidebar collapses to icon-only mode
- Mobile: Sidebar slides off-screen when collapsed
- Auto-responsive behavior based on screen size

### 🎯 **Interactive Elements**
- **Logo Section**: Placeholder with icon and brand text
- **Navigation Links**: 5 menu items with Font Awesome icons
  - Home
  - Dashboard
  - Users
  - Settings
  - Help
- **Toggle Button**: Smooth icon rotation and state persistence

### ⚡ **Enhanced Functionality**
- **State Persistence**: Remembers sidebar state using localStorage
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + B`: Toggle sidebar
  - `Escape`: Close sidebar on mobile
- **Tooltips**: Show link names when sidebar is collapsed
- **Active States**: Visual feedback for selected navigation items
- **Ripple Effects**: Material design-inspired click animations

## File Structure

```
Collapsible Bar Project/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Usage

1. **Open the project**: Simply open `index.html` in any modern web browser
2. **Toggle the sidebar**: Click the toggle button at the bottom of the sidebar
3. **Navigate**: Click on any navigation link to see the active state
4. **Keyboard shortcuts**: Use `Ctrl/Cmd + B` to toggle the sidebar

## Technical Details

### CSS Features
- **Flexbox Layout**: Modern CSS layout system
- **CSS Grid**: Responsive card layout for demo content
- **Backdrop Filter**: Glassmorphism effects with blur
- **CSS Variables**: Consistent color scheme and spacing
- **Media Queries**: Responsive breakpoints for mobile devices

### JavaScript Features
- **Event Listeners**: Click, hover, keyboard, and resize events
- **localStorage API**: Persistent state management
- **DOM Manipulation**: Dynamic class toggling and content updates
- **Animation Control**: Programmatic transition management

### Dependencies
- **Font Awesome 6.4.0**: Icons for navigation and UI elements
- **CDN Loading**: Fast loading from Cloudflare CDN

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Customization

### Colors
The project uses a purple gradient theme. To customize colors, modify these CSS variables in `styles.css`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Sidebar background */
background: rgba(255, 255, 255, 0.95);
```

### Icons
Replace Font Awesome icons in `index.html`:

```html
<i class="fas fa-home"></i>  <!-- Change to your preferred icon -->
```

### Navigation Links
Add or modify navigation items in the `nav-list` section of `index.html`.

## Performance

- **Lightweight**: No heavy frameworks or libraries
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Efficient JavaScript**: Minimal DOM queries and event handling
- **Fast Loading**: CDN resources and optimized assets

## License

This project is open source and available under the MIT License.

---

**Enjoy your collapsible sidebar! 🚀** 