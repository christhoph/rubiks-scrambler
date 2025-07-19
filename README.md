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

### 🚀 Technologies Used

- **HTML5** - Semantic structure
- **CSS3** - Modern and responsive styles
- **JavaScript ES6+** - Move generation logic
- **Vite** - Build tool and development server

### 📦 Installation

#### Prerequisites

- Node.js v20.9.0 or higher
- npm (included with Node.js)

#### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd rubiks-scrambler
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Go to `http://localhost:5173`
   - Enjoy generating move sequences!

### 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build

### 📁 Project Structure

```
rubiks-scrambler/
├── index.html              # Main page
├── package.json            # Project configuration
├── src/
│   ├── main.js             # Application entry point
│   ├── modules/
│   │   ├── index.js        # Module exports
│   │   └── scrambler/
│   │       ├── index.js    # Scrambler exports
│   │       ├── constants.js # Constants and configuration
│   │       ├── generateScramble.js # Generation logic
│   │       └── renderScramble.js   # DOM rendering
│   └── styles/             # CSS style files
└── public/                 # Static files
```

### 🤝 Contributing

Contributions are welcome. To contribute:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is under the MIT License. See the `LICENSE` file for more details.

## 🙏 Acknowledgments

- Inspired by scrambling tools used in official speedcubing competitions
- Developed for the cubing community seeking consistent practice

---

**Enjoy solving your Rubik's Cube! 🎯**
