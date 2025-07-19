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

### Testing

- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ui` - Run tests with UI interface
- `npm run test:watch` - Run tests in watch mode (alias for test)

## 🔧 Development Tools

### ESLint

- **Configuration**: `eslint.config.js`
- **Purpose**: Code quality and style enforcement
- **Rules**: Enforces consistent code style, prevents common errors

### Prettier

- **Configuration**: `.prettierrc`
- **Purpose**: Automatic code formatting
- **Integration**: Works with ESLint via `eslint-config-prettier`

### Vitest

- **Configuration**: `vitest.config.js`
- **Purpose**: Unit testing framework
- **Features**: Fast execution, coverage reporting, UI interface
- **Environment**: jsdom for DOM testing

### Husky

- **Configuration**: `.husky/`
- **Purpose**: Git hooks for automated quality checks
- **Hooks**:
  - **pre-commit**: Runs lint-staged on staged files (fast, incremental)
  - **pre-push**: Runs comprehensive checks and tests on entire project
- **Integration**: Automatically runs before commits and pushes

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
│   │       ├── generateScramble.test.js # Tests for generateScramble
│   │       └── renderScramble.js   # DOM interaction
│   ├── styles/                 # CSS styles
│   │   ├── main.css            # Main CSS file with imports
│   │   ├── base.css            # Base styles (reset, typography)
│   │   ├── layout.css          # Layout and structure styles
│   │   └── scrambler.css       # Component-specific styles
│   └── test/                   # Test utilities
│       └── setup.js            # Test setup and utilities
├── public/                     # Static assets
├── .husky/                     # Git hooks
│   ├── pre-commit             # Runs lint-staged on staged files
│   └── pre-push               # Runs comprehensive checks and tests
├── eslint.config.js            # ESLint configuration
├── vitest.config.js            # Vitest configuration
├── .prettierrc                 # Prettier configuration
├── .prettierignore             # Prettier ignore patterns
└── package.json                # Project configuration
```

## 🧪 Testing Strategy

### Test Structure

- **Unit Tests**: Test individual functions and modules
- **Integration Tests**: Test module interactions
- **DOM Tests**: Test DOM manipulation (using jsdom)

### Test Files

- **Naming**: `*.test.js` or `*.spec.js`
- **Location**: Co-located with source files or in `__tests__` directories
- **Setup**: Global setup in `src/test/setup.js`

### Test Utilities

```javascript
// Available in all tests
global.testUtils = {
  createMockElement: (tagName, attributes) => {
    /* ... */
  },
  waitFor: ms => new Promise(resolve => setTimeout(resolve, ms))
};
```

### Coverage Goals

- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

## 🎨 CSS Architecture

### Structure

The project uses a modular CSS architecture with the following organization:

- **`main.css`**: Entry point that imports all other CSS files
- **`base.css`**: Reset styles, typography, and base elements
- **`layout.css`**: Layout elements and grid systems
- **`scrambler.css`**: Module-specific styles

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

### Testing

- Write descriptive test names
- Use AAA pattern (Arrange, Act, Assert)
- Test both happy path and edge cases
- Keep tests focused and isolated
- Use meaningful assertions

### Git Workflow

1. Create a feature branch from `main`
2. Make your changes
3. Write tests for new functionality
4. Stage your files (`git add .`)
5. Commit your changes (`git commit -m "message"`)
6. Push to your branch (`git push origin feature/AmazingFeature`)
7. Create a Pull Request

## 🔍 Quality Assurance

### Git Hooks

The project uses two Git hooks to ensure code quality:

#### Pre-commit Hook

- **Trigger**: Before each commit
- **Action**: Runs `npx lint-staged`
- **Purpose**: Fast, incremental checks on staged files only
- **Benefits**: Quick commits, automatic fixes

#### Pre-push Hook

- **Trigger**: Before pushing to remote
- **Action**: Runs `npm run check` and `npm run test:run`
- **Purpose**: Comprehensive checks and tests on entire project
- **Benefits**: Ensures overall code quality and test coverage before sharing

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
- [ ] Tests are written for new functionality
- [ ] Test coverage meets project standards

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

### Testing Issues

If you encounter testing problems:

1. Run `npm run test:run` to see detailed error messages
2. Check that test files follow naming conventions
3. Verify that test setup is working correctly
4. Check Vitest configuration in `vitest.config.js`

### Husky Issues

If pre-commit hooks aren't working:

1. Ensure Husky is properly installed: `npm run prepare`
2. Check that the `.husky/pre-commit` file is executable
3. Verify lint-staged configuration in `package.json`

If pre-push hooks aren't working:

1. Check that the `.husky/pre-push` file is executable
2. Verify that `npm run check` and `npm run test:run` work manually
3. Ensure all dependencies are installed

### CSS Issues

If you encounter CSS-related problems:

1. Check that all CSS files are properly imported in `main.css`
2. Verify that `main.css` is imported in `main.js`
3. Ensure CSS files follow the modular architecture

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [Vitest Documentation](https://vitest.dev/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Vite Documentation](https://vitejs.dev/)
- [CSS @import Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/@import)
