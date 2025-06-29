# Pareena Sayyad - Portfolio Website

A beautiful, paper-inspired portfolio website built with Vue.js, showcasing a unique design aesthetic with handwritten fonts, technical drawing elements, and smooth animations.

## 🎨 Design Features

- **Paper-like aesthetic** with dotted background pattern
- **Handwritten typography** using Handlee font
- **Technical drawing frames** with crossing lines
- **Smooth scrolling animations** between sections
- **Pink highlight effects** on text and buttons
- **Responsive design** for all devices
- **Clean, modern layout** with thoughtful spacing

## 🚀 Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router** - Client-side routing
- **CSS3** - Modern styling with flexbox and grid
- **Local fonts** - Self-hosted Handlee font
- **SVG assets** - Custom icons and illustrations

## 📱 Sections

1. **Hero Section** - Introduction with profile image and tagline
2. **What I Do?** - Services and skills overview
3. **Projects** - Portfolio showcase with project cards
4. **Work Experience** - Professional experience with technical frame design
5. **Contact** - Contact form with smooth animations
6. **Footer** - Social media links and branding

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📁 Project Structure

```
portfolio-app/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │   ├── Handlee-Regular.ttf
│   │   │   └── fonts.css
│   │   ├── svgs/
│   │   │   ├── person.svg
│   │   │   ├── arrow.svg
│   │   │   └── Cursor.svg
│   │   └── main.css
│   ├── components/
│   │   ├── WhatIDo.vue
│   │   ├── Projects.vue
│   │   ├── WorkExperience.vue
│   │   ├── Contact.vue
│   │   └── Footer.vue
│   ├── views/
│   │   └── HomeView.vue
│   ├── App.vue
│   └── main.js
├── public/
├── package.json
└── README.md
```

## 🎯 Key Features

### Navigation
- **Smooth scrolling** to different sections
- **"Hire me" buttons** navigate to contact form
- **Projects link** scrolls to projects section
- **Responsive navigation** that adapts to mobile

### Design Elements
- **Dotted paper background** for authentic feel
- **Technical drawing frames** in work experience
- **Handwritten button styling** with rotation effects
- **Highlight effects** on important text
- **Consistent color scheme** with pink accents

### Interactive Elements
- **Hover animations** on buttons and links
- **Form validation** in contact section
- **Smooth transitions** throughout the site
- **Mobile-responsive** layout

## 🎨 Customization

### Colors
The main color palette uses:
- **Pink highlight**: `rgba(255, 201, 240, 1)`
- **Black text**: `#000000`
- **Gray text**: `#555555`
- **Dotted pattern**: `#cccccc`

### Fonts
- **Handlee** - For headings and buttons (handwritten style)
- **Inter** - For body text and descriptions

### Spacing
The design uses consistent spacing:
- **Sections**: `4rem` padding
- **Components**: `2rem` gaps
- **Mobile**: Reduced spacing for better mobile experience

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: Full layout with side-by-side sections
- **Tablet** (768px): Stacked layout with adjusted spacing
- **Mobile** (480px): Compact layout with mobile-optimized navigation

## 🚀 Deployment

The site can be deployed to any static hosting service:

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Set up continuous deployment from your Git repository

### Vercel
1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy

### GitHub Pages
1. Build the project: `npm run build`
2. Push the `dist` folder to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📝 Content Updates

To update portfolio content:

1. **Projects**: Edit the project data in `src/components/Projects.vue`
2. **Experience**: Update work experience in `src/components/WorkExperience.vue`
3. **Skills**: Modify services in `src/components/WhatIDo.vue`
4. **Contact**: Update contact information in `src/components/Contact.vue`
5. **Personal info**: Update name and details in relevant components

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👩‍💻 Author

**Pareena Sayyad**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Google Fonts for typography resources
- Design inspiration from modern portfolio trends
- Community feedback and suggestions

---

*Built with ❤️ using Vue.js*
