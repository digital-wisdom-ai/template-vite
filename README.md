# Vite React Template

A modern React template using Vite, TypeScript, Material-UI, and testing setup.

## Features

- ⚡️ Vite for super fast development
- 🎨 Material-UI with emotion styling
- 📝 TypeScript support
- ✅ Testing setup with Vitest and Testing Library
- 🔍 ESLint + Prettier configuration
- 📱 Responsive design ready

## Getting Started

1. Clone this template
2. Install dependencies:
   ```bash
   pnpm i
   ```
3. Start the development server:
   ```bash
   make emulator
   ```

## Available Scripts

- `make emulator` - Start development server
- `make build` - Build for production
- `make lint` - Run ESLint
- `make lintFix` - Fix ESLint issues
- `make preCommit` - Run pre-commit checks manually
- `make test` - Run tests once
- `make test-watch` - Run tests in watch mode
- `make format` - Format all files
- `make checkFormat` - Check files for formatting issues (used in CI)
- `make clean` - Remove build artifacts

## Project Structure

```
src/
  ├── App.tsx         # Root application component
  ├── components/     # Reusable components & their tests
  ├── test/           # Test configuration
  ├── types/          # TypeScript definitions
  ├── theme.ts        # Theme configuration
  └── main.tsx        # Application entry point
```

## Contributing

Feel free to submit issues and enhancement requests!
