# 🛠️ Development Guide

This document contains information for developers working on the Rubik's Scrambler project.

## 🚀 Development Setup

### Prerequisites

- Node.js v20.9.0 or higher
- npm (included with Node.js)

### Installation

```bash
git clone <repository-url>
cd rubiks-scrambler
npm install
```

## 📋 Available Scripts

### Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Code Quality

- `npm run lint` - Run ESLint to check code quality
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted
- `npm run check` - Run both linting and format checking

## 🔧 Development Tools

### ESLint

- **Configuration**: `eslint.config.js`
- **Purpose**: Code quality and style enforcement
- **Rules**: Enforces consistent code style, prevents common errors

### Prettier

- **Configuration**: `.prettierrc`
- **Purpose**: Automatic code formatting
- **Integration**: Works with ESLint via `eslint-config-prettier`

### Husky

- **Configuration**: `.husky/pre-commit`
- **Purpose**: Git hooks for automated quality checks
- **Integration**: Runs lint-staged before each commit

### lint-staged

- **Configuration**: `package.json` → `lint-staged`
- **Purpose**: Run linters only on staged files
- **Integration**: Automatically runs on pre-commit via Husky

## 📁 Project Structure

```
rubiks-scrambler/
├── src/
│   ├── main.js                 # Application entry point
│   ├── modules/
│   │   ├── index.js            # Module exports
│   │   └── scrambler/          # Core scrambler functionality
│   │       ├── index.js        # Scrambler exports
│   │       ├── constants.js    # Constants and configuration
│   │       ├── generateScramble.js # Generation algorithm
│   │       └── renderScramble.js   # DOM interaction
│   └── styles/                 # CSS styles
│       ├── main.css            # Main CSS file with imports
│       ├── base.css            # Base styles (reset, typography)
│       ├── layout.css          # Layout and structure styles
│       └── scrambler.css       # Component-specific styles
├── public/                     # Static assets
├── eslint.config.js            # ESLint configuration
├── .prettierrc                 # Prettier configuration
├── .prettierignore             # Prettier ignore patterns
├── .husky/                     # Git hooks
└── package.json                # Project configuration
```

## 🎨 CSS Architecture

### Structure

The project uses a modular CSS architecture with the following organization:

- **`main.css`**: Entry point that imports all other CSS files
- **`base.css`**: Reset styles, typography, and base elements
- **`layout.css`**: Layout components and grid systems
- **`scrambler.css`**: Component-specific styles

### Import Strategy

```css
/* src/styles/main.css */
@import './base.css';
@import './layout.css';
@import './scrambler.css';
```

```javascript
// src/main.js
import './styles/main.css';
```

### Benefits

- **Modularity**: Each CSS file has a specific responsibility
- **Maintainability**: Easy to locate and modify specific styles
- **Scalability**: Simple to add new style modules
- **Performance**: Vite optimizes CSS imports efficiently

## 🎯 Code Style Guidelines

### JavaScript

- Use ES6+ features
- Prefer `const` over `let`, avoid `var`
- Use single quotes for strings
- Use semicolons
- Use 2 spaces for indentation
- Use arrow functions when appropriate
- Use template literals for string interpolation

### CSS

- Use consistent indentation (2 spaces)
- Use meaningful class names
- Group related properties together
- Use comments for complex selectors
- Follow BEM methodology for component naming
- Use CSS custom properties for theming

### Git Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Stage your files (`git add .`)
4. Commit your changes (`git commit -m "message"`)
5. Push to your branch
6. Create a Pull Request

## 🔍 Quality Assurance

### Before Committing

- All code is automatically linted and formatted via Husky
- Ensure all tests pass (when implemented)
- Check that the application builds successfully

### Code Review Checklist

- [ ] Code follows style guidelines
- [ ] No console.log statements in production code
- [ ] Functions are properly documented
- [ ] No unused variables or imports
- [ ] Error handling is implemented where necessary
- [ ] CSS follows modular architecture
- [ ] Styles are responsive and accessible

## 🐛 Troubleshooting

### ESLint Issues

If you encounter ESLint errors:

1. Run `npm run lint:fix` to automatically fix issues
2. Manually fix any remaining issues
3. Check the ESLint configuration in `eslint.config.js`

### Prettier Issues

If you encounter formatting issues:

1. Run `npm run format` to format all files
2. Check the Prettier configuration in `.prettierrc`

### Husky Issues

If pre-commit hooks aren't working:

1. Ensure Husky is properly installed: `npm run prepare`
2. Check that the `.husky/pre-commit` file is executable
3. Verify lint-staged configuration in `package.json`

### CSS Issues

If you encounter CSS-related problems:

1. Check that all CSS files are properly imported in `main.css`
2. Verify that `main.css` is imported in `main.js`
3. Ensure CSS files follow the modular architecture

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Vite Documentation](https://vitejs.dev/)
- [CSS @import Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
