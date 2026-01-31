# Contributing to Rent-a-Rover

Thank you for your interest in contributing to Rent-a-Rover! This document provides guidelines for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Git

### Setup
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/rent-a-rover.git`
3. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   cd ../backend && npm install
   ```
4. Set up environment variables (see `.env.example` files)

## 📝 Development Workflow

### Branch Naming
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring

### Commit Messages
Follow conventional commits format:
- `feat: add user authentication`
- `fix: resolve MongoDB connection timeout`
- `docs: update README with setup instructions`
- `style: format code with prettier`

### Code Style
- Use ESLint for JavaScript/React code
- Follow existing code formatting
- Add comments for complex logic
- Write meaningful variable names

## 🧪 Testing
- Test your changes locally before submitting
- Ensure both frontend and backend run without errors
- Verify API endpoints work as expected

## 📤 Pull Request Process
1. Update documentation if needed
2. Ensure code follows project style
3. Test thoroughly
4. Create a pull request with a clear description
5. Link any related issues

## 🐛 Reporting Issues
When reporting issues, include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, Node version, etc.)

## 💡 Feature Requests
- Check existing issues first
- Provide detailed use case
- Explain expected behavior
- Consider implementation approach

## 📜 Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Keep discussions professional

Thank you for contributing! 🎉
