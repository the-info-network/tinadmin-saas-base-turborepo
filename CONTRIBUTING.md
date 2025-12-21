# Contributing to SaaS Platform Template

Thank you for your interest in contributing! This document provides guidelines for contributing to the template.

## 🤝 How to Contribute

### Reporting Issues

- Check if the issue already exists
- Use the issue template
- Provide clear reproduction steps
- Include environment details (Node version, OS, etc.)

### Suggesting Features

- Open a discussion first for major features
- Explain the use case and benefits
- Consider if it fits the template's scope

### Submitting Pull Requests

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the code style
   - Add tests if applicable
   - Update documentation
4. **Test your changes**
   ```bash
   pnpm install
   pnpm build:all
   pnpm test
   pnpm lint
   ```
5. **Commit with clear messages**
   ```bash
   git commit -m "feat: add new feature"
   ```
6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## 📝 Code Style

- Use TypeScript for all new code
- Follow existing patterns and conventions
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Keep functions small and focused

## 🧪 Testing

- Add tests for new features
- Ensure existing tests pass
- Test in both light and dark modes
- Test responsive layouts

## 📚 Documentation

- Update relevant documentation
- Add inline comments for complex logic
- Update README.md if needed
- Add examples for new features

## 🔍 Code Review Process

All submissions require review. We use GitHub pull requests for this purpose.

- Be responsive to feedback
- Keep PRs focused and small
- Update your PR based on feedback
- Be patient and respectful

## 🎯 Contribution Ideas

### Good First Issues
- Documentation improvements
- UI/UX enhancements
- Bug fixes
- Test coverage improvements

### Feature Contributions
- New authentication providers
- Additional payment gateways
- Email provider integrations
- UI component additions
- Performance optimizations

### Template Improvements
- Better error handling
- Improved type safety
- Enhanced accessibility
- Mobile optimizations

## 🚫 What Not to Contribute

- Breaking changes without discussion
- Features that are too specific to one use case
- Large refactors without prior approval
- Dependencies that significantly increase bundle size

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 💬 Questions?

- Open a discussion on GitHub
- Check existing issues and discussions
- Review the documentation

Thank you for contributing! 🎉

