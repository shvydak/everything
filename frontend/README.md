# Frontend Application

## 🎯 Overview

This is the frontend application built with React, TypeScript, and Vite. It follows modern best practices and provides a solid foundation for learning frontend development.

## 🛠️ Technology Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🚀 Getting Started

### Prerequisites

1. **Node.js 18+** - [Download here](https://nodejs.org/)
2. **Yarn** - Package manager

### Installation

1. **Install dependencies:**

    ```bash
    yarn install
    ```

2. **Start development server:**
    ```bash
    yarn dev
    ```

## 📝 Code Formatting

### Automatic Formatting

The project is configured with Prettier for automatic code formatting. When you save a file (Cmd+S), it will automatically be formatted according to the project's style guide.

### Manual Formatting

You can also format code manually:

```bash
# Format all files
yarn format

# Check formatting without changing files
yarn format:check

# Fix ESLint issues
yarn lint:fix
```

### Formatting Rules

The project uses the following Prettier configuration:

```json
{
    "bracketSpacing": false,
    "bracketSameLine": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "printWidth": 100,
    "arrowParens": "avoid"
}
```

## 🔧 Available Scripts

```bash
# Development
yarn dev              # Start development server
yarn build            # Build for production
yarn preview          # Preview production build

# Code Quality
yarn lint             # Check code with ESLint
yarn lint:fix         # Fix ESLint errors automatically
yarn format           # Format code with Prettier
yarn format:check     # Check formatting without changing files
```

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/   # React components
│   ├── pages/        # Page components
│   ├── hooks/        # Custom hooks
│   ├── utils/        # Utility functions
│   ├── types/        # TypeScript types
│   └── styles/       # CSS/styling
├── public/           # Static assets
├── .vscode/          # VS Code settings
├── .prettierrc       # Prettier configuration
├── .prettierignore   # Files to ignore by Prettier
└── eslint.config.js  # ESLint configuration
```

## 🎓 Learning Concepts

### 1. React with TypeScript

- **Functional Components**: Use functional components with hooks
- **TypeScript Interfaces**: Define proper types for props and state
- **Event Handling**: Type-safe event handlers
- **State Management**: Use React hooks for state management

### 2. Component Architecture

- **Single Responsibility**: Each component has one clear purpose
- **Props Interface**: Define clear interfaces for component props
- **Default Props**: Use default values for optional props
- **Component Composition**: Build complex UIs from simple components

### 3. Code Quality

- **ESLint**: Catch errors and enforce code style
- **Prettier**: Consistent code formatting
- **TypeScript**: Type safety and better IDE support
- **Import Organization**: Clean and organized imports

## 🔒 Development Best Practices

1. **Write TypeScript**: Use proper types for all variables and functions
2. **Component Structure**: Follow consistent component structure
3. **Naming Conventions**: Use descriptive names for components and functions
4. **Error Handling**: Implement proper error boundaries
5. **Performance**: Use React.memo and useMemo when appropriate
6. **Testing**: Write tests for components and utilities

## 🚀 Deployment

### Production Build

```bash
yarn build
```

### Preview Production Build

```bash
yarn preview
```

## 🤝 Contributing

1. Follow TypeScript best practices
2. Write tests for new features
3. Use conventional commit messages
4. Follow the established code style
5. Document complex logic

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev/)
- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
