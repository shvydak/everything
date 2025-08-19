# Full-Stack Learning Project

## 🎯 Project Overview

This is a comprehensive learning project designed to teach modern full-stack web development using industry best practices. The project covers everything from basic concepts to production deployment.

## 🏗️ Architecture

```
learning-fullstack-app/
├── backend/          # Express.js + TypeScript API server
├── frontend/         # React + TypeScript client application
├── shared/           # Shared types and utilities
└── docs/            # Documentation and learning materials
```

## 🛠️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **MongoDB** - NoSQL database
- **Redis** - In-memory data store
- **JWT** - Authentication
- **Joi/Zod** - Data validation

### Frontend
- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Query** - Data fetching
- **React Router** - Navigation

### Development Tools
- **Yarn** - Package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Playwright** - E2E testing
- **Docker** - Containerization

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn package manager
- MongoDB (local or cloud)
- Redis (local or cloud)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd learning-fullstack-app
```

2. Install dependencies:
```bash
yarn install
```

3. Set up environment variables:
```bash
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
```

4. Start development servers:
```bash
yarn dev
```

## 📚 Learning Path

### Phase 1: Foundation (Week 1-2)
- [ ] TypeScript basics
- [ ] Express.js server setup
- [ ] MongoDB connection
- [ ] Basic CRUD operations

### Phase 2: Backend Development (Week 3-4)
- [ ] Authentication & Authorization
- [ ] Input validation
- [ ] Error handling
- [ ] API documentation

### Phase 3: Frontend Development (Week 5-6)
- [ ] React with TypeScript
- [ ] State management
- [ ] API integration
- [ ] Component architecture

### Phase 4: Integration & Testing (Week 7-8)
- [ ] Full-stack integration
- [ ] Testing strategies
- [ ] Performance optimization
- [ ] Security implementation

### Phase 5: Deployment & Production (Week 9-10)
- [ ] Docker containerization
- [ ] Production deployment
- [ ] Monitoring and logging
- [ ] Maintenance

## 🎓 Learning Approach

This project follows a **hands-on, incremental learning approach**:

1. **Concept First**: We explain the theory before implementation
2. **Real Examples**: Every concept is demonstrated with practical code
3. **Best Practices**: Industry standards are followed throughout
4. **Progressive Complexity**: We build from simple to complex features
5. **Production Ready**: Code is written with deployment in mind

## 📝 Development Guidelines

- All code must be written in TypeScript
- Follow ESLint and Prettier configurations
- Write tests for new features
- Use conventional commit messages
- Document complex logic
- Follow security best practices

## 🔧 Available Scripts

- `yarn dev` - Start development servers
- `yarn build` - Build for production
- `yarn test` - Run all tests
- `yarn lint` - Check code quality
- `yarn format` - Format code with Prettier

## 📖 Documentation

- [Backend API Documentation](./backend/README.md)
- [Frontend Documentation](./frontend/README.md)
- [Deployment Guide](./docs/deployment.md)
- [Learning Materials](./docs/learning/)

## 🤝 Contributing

This is a learning project, so feel free to:
- Ask questions
- Experiment with code
- Suggest improvements
- Share your learnings

## 📄 License

This project is for educational purposes.
