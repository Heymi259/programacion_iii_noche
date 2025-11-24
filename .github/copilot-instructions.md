# AI Agent Instructions for Programming III Course Project

## Project Overview
This is a web development learning project structured around progressive modules covering HTML, CSS, JavaScript, DOM manipulation, and TypeScript. The project includes examples and practice exercises for a restaurant website "Sabor & Sazón".

## Repository Structure
```
programacion_iii_noche/
├── modulo_1/           # Basic Web Technologies
│   ├── html/          # HTML fundamentals
│   ├── css/          # CSS styling and layouts
│   └── practica/     # Practice exercises
├── modulo_2/           # Advanced Web Technologies
│   ├── javascript/   # JavaScript fundamentals
│   ├── typescript/   # TypeScript implementations
│   └── dom/         # DOM manipulation examples
└── miniserver.js      # Simple development server
```

## Key Conventions

### HTML Files
- Files ending in `_MP.html` are master/completed examples
- Regular `.html` files are practice templates
- Use semantic HTML5 elements (header, nav, main, section, etc.)
- Keep related assets (images, audio, video) in respective subdirectories

### CSS Files
- Consistent naming pattern: `XX_feature_MP.css` for master files
- Common layout patterns:
  - Flexbox layouts in `*_flexbox.css`
  - Grid layouts in `*_grid.css` and `*_grid_template_areas.css`
  - Responsive designs in `*_responsive.css`

### JavaScript/TypeScript
- Modern ES6+ syntax preferred
- Exception handling demonstrated in `09_excepciones.js`
- DOM manipulation patterns shown in `dom/*.js`

## Development Workflow

### Local Development Server
The project includes a minimal Node.js server (`miniserver.js`) for development:
```javascript
// Start the server
node miniserver.js
// Access at http://127.0.0.1:3000/
```

### File Organization
- Progressive numbered files (01_, 02_, etc.) indicate learning sequence
- Keep new exercises in respective module directories
- Follow existing naming conventions for consistency

## Common Patterns

### Restaurant Website Example
Most examples use "Sabor & Sazón" restaurant theme:
- Consistent branding and styling
- Food-related content and images
- Restaurant-specific forms and layouts

### CSS Layout Standards
- Use CSS Grid for page layouts
- Flexbox for component-level layouts
- Mobile-first responsive design
- Standard breakpoints in `*_responsive.css`

## Integration Points
- CSS files linked via relative paths
- JavaScript files loaded with `defer` attribute
- Media files referenced from subdirectories
- Forms submit to mock endpoints

## Best Practices
1. Maintain consistent file structure and naming
2. Follow HTML5 semantic markup
3. Use modern CSS layout techniques
4. Implement proper error handling in JavaScript
5. Keep code organized and well-commented
6. Test responsive layouts across breakpoints