# Aveek G - Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14 and Tailwind CSS, showcasing AI/ML projects and professional experience.

## ✨ Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Interactive Project Previews**: Click on any project to see a live preview in a modal
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Built with Next.js 14 for fast loading and SEO
- **Accessible**: Semantic HTML and proper ARIA labels

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Animations**: CSS transitions and Tailwind utilities

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind directives
│   ├── layout.js        # Root layout with metadata
│   └── page.js          # Main portfolio page
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Customization

### Adding New Projects
Edit the `projects` array in `app/page.js`:

```javascript
const projects = [
  {
    title: "Your Project Name",
    link: "https://your-project-url.com",
    description: "Brief description of your project",
    tech: ["React", "Node.js", "MongoDB"]
  },
  // ... more projects
];
```

### Updating Skills
Modify the `skills` array in `app/page.js`:

```javascript
const skills = [
  { 
    category: "Your Category", 
    items: ["Skill 1", "Skill 2", "Skill 3"] 
  },
  // ... more skill categories
];
```

### Changing Colors
Update the color scheme in `tailwind.config.js` or use Tailwind's built-in color utilities in the components.

## 📱 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the generated files to your hosting provider

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📧 Contact

- **Email**: aveekg19@gmail.com
- **LinkedIn**: [linkedin.com/in/aveekg](https://linkedin.com/in/aveekg)
- **Location**: Pune, India

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Aveek Girigoswami
