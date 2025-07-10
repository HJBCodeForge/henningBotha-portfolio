# Copilot Instructions for Henning Botha Portfolio

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
This is a professional portfolio website for Henning Botha, a full-stack developer with a designer's eye. The project embodies the theme "The Full Stack Developer with a Designer's Eye" and targets technical recruiters and hiring managers at leading global technology companies.

## Technical Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Architecture**: Single-page application with smooth scrolling

## Design Principles
- **Sophisticated Minimalism**: Clean, professional design with purposeful motion
- **Dark Mode Default**: Using color palette with #111111 background, #1A1A1A cards, #EAEAEA text, #00FFFF accent
- **Accessibility First**: WCAG 2.1 AA compliance, semantic HTML, keyboard navigation
- **Performance**: Optimized animations, responsive design, fast loading

## Key Features
1. **Floating Header**: Hides on scroll down, appears on scroll up
2. **Hero Section**: Full-height with particle animation and strong CTA
3. **About Section**: Two-column layout with narrative storytelling
4. **Projects Section**: Grid layout with hover effects and modal details
5. **Skills Section**: Categorized technology showcase
6. **Contact Section**: Clear CTAs with social links
7. **Dark/Light Mode Toggle**: Smooth transitions with icon animations

## Component Structure
- `App.tsx`: Main application with state management
- `Header.tsx`: Navigation with theme toggle
- `Hero.tsx`: Landing section with particles
- `About.tsx`: Personal narrative and education
- `Projects.tsx`: Project showcase grid
- `ProjectModal.tsx`: Detailed project case studies
- `Skills.tsx`: Technology categories
- `Contact.tsx`: Contact information and CTAs
- `Footer.tsx`: Site footer with social links

## Content Strategy
The portfolio tells a three-act story:
1. **Foundation**: Visual Communication background
2. **Bridge**: Employee Benefits Administrator experience (highlighting analytical skills)
3. **Synthesis**: Full-stack development where design meets engineering

## Animation Guidelines
- Use Framer Motion for smooth, purposeful animations
- Implement on-scroll reveals with staggered children
- Hover states should provide clear feedback
- Maintain 60fps performance
- Subtle particle effects in hero section

## Accessibility Requirements
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA attributes where needed
- Keyboard navigation support
- Color contrast compliance
- Screen reader compatibility
- Focus indicators

## Performance Considerations
- Lazy loading for non-critical content
- Optimized images and assets
- Minimal bundle size
- Efficient re-renders
- Smooth scrolling implementation

## Code Quality Standards
- TypeScript strict mode
- Consistent component patterns
- Proper prop typing
- Clean, readable code structure
- Responsive design patterns
- Modern React best practices (hooks, functional components)
