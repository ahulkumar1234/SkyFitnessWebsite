# 🏋️ Sky Fitness - Modern Fitness Website

A beautiful, responsive, and modern fitness website built with HTML5, CSS3, and JavaScript. Features a complete gym website with membership plans, gallery, registration system, and modern UX/UI design.

![Sky Fitness](https://img.shields.io/badge/Sky%20Fitness-Website-blue?style=for-the-badge&logo=html5)
![Version](https://img.shields.io/badge/version-1.0.0-green?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)

## ✨ Features

### 🎨 Modern Design
- **Responsive Design** - Fully responsive across all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Loading Screen** - Beautiful loading animation on page load
- **Smooth Scrolling** - Enhanced navigation experience
- **Interactive Elements** - Hover effects and animations

### 🚀 Core Functionality
- **Homepage** - Hero section with typing animation
- **About Section** - Company information and benefits
- **Membership Plans** - Three tier pricing structure
- **Gallery** - Image and video showcase
- **Registration System** - Complete membership signup
- **Contact Information** - Social media integration
- **Mobile Menu** - Responsive hamburger navigation

### 🔧 Technical Features
- **Performance Optimized** - Lazy loading, debounced scroll handlers
- **Form Validation** - Enhanced client-side validation
- **SEO Friendly** - Semantic HTML structure
- **Cross-browser Compatible** - Works on all modern browsers
- **Progressive Enhancement** - Graceful degradation for older browsers

## 📁 Project Structure

```
sky-fitness-website/
├── index.html              # Main homepage
├── gallery.html            # Image/video gallery
├── registrationform.html   # Membership registration
├── thankyou.html           # Registration confirmation
├── style.css               # Main stylesheet (1000+ lines)
├── script.js               # Enhanced JavaScript functionality
├── package.json            # Dependencies and scripts
├── README.md               # This file
├── images/                 # Image assets
│   ├── skylogo.png.jpg     # Logo
│   ├── bg1.jpg.jpg         # Background images
│   ├── bg2.jpg.jpg
│   ├── transformation-*.jpg # Before/after photos
│   ├── img*.jpg            # Gallery images
│   └── *.webp              # Optimized images
└── videos/
    ├── gymvideo1.mp4       # Promotional videos
    └── gymvideo3.mp4
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Modern web browser

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/sky-fitness/website.git
   cd sky-fitness-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The website will automatically open

### Alternative Quick Start (No Node.js)
Simply open `index.html` in your web browser to view the website locally.

## 📜 Available Scripts

- `npm start` - Start development server with live reload
- `npm run dev` - Development server with file watching
- `npm run build` - Build optimized production version
- `npm run serve` - Serve files using http-server
- `npm run optimize-images` - Optimize image files
- `npm run minify-css` - Minify CSS files
- `npm run minify-js` - Minify JavaScript files

## 🎯 Pages Overview

### 🏠 Homepage (`index.html`)
- **Hero Section** - Dynamic typing animation showcasing services
- **Features Section** - Six key fitness categories with images
- **About Section** - Why choose Sky Fitness
- **Membership Plans** - Basic, Standard, Premium tiers
- **Client Reviews** - Testimonials with before/after photos
- **Footer** - Social media links and contact info

### 🖼️ Gallery (`gallery.html`)
- **Video Section** - Promotional gym videos
- **Image Gallery** - Comprehensive workout and facility photos
- **Responsive Grid** - Optimized for all screen sizes

### 📝 Registration (`registrationform.html`)
- **Member Information** - Personal details form
- **Plan Selection** - Choose membership tier
- **Validation** - Client-side form validation
- **Confirmation** - Redirect to thank you page

### ✅ Thank You (`thankyou.html`)
- **Confirmation Message** - Registration success
- **Next Steps** - What happens after registration

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: rgb(61, 110, 244);
    --btn-color: rgb(14, 196, 48);
}
```

### Images
Replace images in the root directory with your own:
- `skylogo.png.jpg` - Company logo
- `bg1.jpg.jpg`, `bg2.jpg.jpg` - Background images
- Gallery images (`img*.jpg`)

### Content
Edit the HTML files to customize:
- Company name and branding
- Membership prices and features
- Contact information
- Social media links

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔧 Dependencies

### Runtime Dependencies
- **AOS** (^2.3.4) - Animate On Scroll library
- **Typed.js** (^2.1.0) - Text typing animation

### Development Dependencies
- **live-server** (^1.2.2) - Development server with live reload
- **http-server** (^14.1.1) - Simple HTTP server
- **imagemin** (^8.0.1) - Image optimization
- **clean-css-cli** (^5.6.2) - CSS minification
- **uglify-js** (^3.17.4) - JavaScript minification

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+

## 📈 Performance Features

- **Lazy Loading** - Images load as they come into view
- **Debounced Scroll** - Optimized scroll event handling
- **Minified Assets** - Compressed CSS and JavaScript
- **Optimized Images** - WebP and AVIF formats where supported
- **Smooth Animations** - Hardware-accelerated CSS transitions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Support

- **Website**: [Sky Fitness](https://sky-fitness.github.io/website)
- **WhatsApp**: +91 7979958116
- **Instagram**: [@the_skyfitness](https://www.instagram.com/the_skyfitness)
- **Facebook**: [Sky Fitness](https://www.facebook.com/share/18sLQ7hcYE/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Font Awesome** - Icons
- **AOS Library** - Scroll animations
- **Typed.js** - Text animations
- **Unsplash** - Stock photos (if any)

---

**Built with ❤️ by the Sky Fitness Team**

*Transform your body, transform your life!* 🏋️‍♂️💪