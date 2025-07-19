# 🎯 Rubik's Scrambler

A simple and elegant web application for generating valid move sequences for the 3x3 Rubik's Cube.

## 📋 Description

Rubik's Scrambler is a tool that generates random and valid move sequences for the Rubik's Cube. The application ensures that there are no two consecutive moves on the same face or axis, following standard scrambling rules for official competitions.

## ✨ Features

- **Smart generation**: Avoids consecutive moves on the same face or axis
- **Minimalist interface**: Clean and easy-to-use design
- **Valid sequences**: Complies with official scrambling standards
- **Real-time updates**: Generates new sequences with a single click
- **Responsive**: Works perfectly on mobile and desktop devices

## 🎮 How to Use

1. **Automatic generation**: When the page loads, a 25-move sequence is automatically generated
2. **New sequence**: Click the "New Scramble" button to generate a new sequence
3. **Follow the sequence**: Use the generated sequence to scramble your Rubik's Cube by following each move step by step, then start solving it!

## 🎲 Algorithm

The algorithm implements the following rules to generate valid sequences:

1. **Standard length**: 25 moves by default
2. **Valid moves**: R, L, U, D, F, B with modifiers (', 2)
3. **Restrictions**:
   - No two consecutive moves on the same face
   - No two consecutive moves on the same axis
4. **Randomness**: Completely random selection of valid moves

---

## 🛠️ Development

### Quick Start

```bash
git clone <repository-url>
cd rubiks-scrambler
npm install
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality
- `npm run format` - Format code
- `npm run check` - Run quality checks
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report

### Technologies

- **HTML5** - Semantic structure
- **CSS3** - Modular styles with @import
- **JavaScript ES6+** - Move generation logic
- **Vite** - Build tool and development server
- **Vitest** - Unit testing framework

**📚 For detailed development information, coding standards, and troubleshooting, see [DEVELOPMENT.md](./DEVELOPMENT.md)**

### 🤝 Contributing

Contributions are welcome. To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Note**: This project uses automated code quality tools. All code is automatically linted, formatted, and tested before commits via Husky and lint-staged. See [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed development guidelines.

## 📝 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 🙏 Acknowledgments

- Inspired by scrambling tools used in official speedcubing competitions
- Developed for the cubing community seeking consistent practice

---

**Enjoy solving your Rubik's Cube! 🎯**
