---
applyTo: "**"
---
Tech Stack Rules:
- Use React.js with functional components
- Prefer modern React (hooks only)
- Use JSX best practices
- Components must be reusable and modular
- Prefer CSS Modules or styled-components (Tailwind allowed if specified)
- Ensure full responsiveness (desktop, tablet, mobile)

Design & Branding Rules:
- Primary color: #1D5B56 and #161939
- Accent color: #262B52 and #0B0A28
- Backgrounds: #FFFFFF or #000000 where applicable
- Follow safe logo spacing (do NOT distort, rotate, recolor logos)
- Use sufficient white space
- Maintain consistent spacing and alignment

Typography Rules:
- Headings font: Open Sans (Regular, SemiBold, Bold)
- Body font: Lato (Regular, SemiBold, Bold)
- Headings must be bold and clearly hierarchical
- Body text must be readable and accessible

Page Structure (Must Follow This Order):
1. Hero Section
   - 5-image carousel
   - Auto slide every 5 seconds
   - Each slide contains image + short description
2. About Us Section
   - Two-column layout (text + image)
   - Content exactly as provided in PDF
3. Mission & Vision
   - Separate cards or sections
   - Clear titles and readable text
4. Core Values
   - Flip cards
   - Flip every 10 seconds automatically
   - Front: title + icon
   - Back: bullet points
   - Highlight icons and text in Shadow Yellow
5. Our Services
   - Grid layout
   - Each service with icon, title, description
6. Contact Us
   - Form fields: Full Name, Email Address, Message
   - Submit button with validation
   - Display phone numbers, email, address
7. Footer
   - Legal links
   - Company links
   - Social media icons (Facebook, Instagram, LinkedIn, YouTube)
   - Texas DPS License number
   - Copyright notice

UI / UX Behavior Rules:
- Animations must be subtle and professional
- Use smooth transitions for flip cards and carousel
- Buttons must have hover and focus states
- Forms must include basic validation and accessibility

Accessibility Rules:
- Use semantic HTML
- Add aria-labels where required
- Ensure color contrast is accessible
- Keyboard navigation must work

Coding Standards:
- One component per file
- Use meaningful component names
- Keep JSX clean and readable
- Avoid inline styles unless necessary
- Comment complex logic only

Responsiveness:
- Use CSS media queries or responsive design techniques
- Test on multiple screen sizes
- Ensure images scale properly without distortion

Do NOT:
- Invent new sections or content
- Change brand colors or fonts
- Alter logo styles
- Add unnecessary animations
- Use class-based components

Always generate production-ready, clean, and maintainable React code aligned with the PDF design.