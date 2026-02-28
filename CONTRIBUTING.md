# Contributing to Quran Search Engine MCP Server

First off, thank you for considering contributing to the Quran Search Engine MCP Server! It's people like you that make the open-source community such a great place.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Help?

We welcome contributions of all kinds, including:

- **Bug reports**: Found an issue? Please file a bug report with detailed information
- **Feature requests**: Have an idea for a new feature? We'd love to hear it
- **Documentation**: Help improve our documentation and examples
- **Code contributions**: Fix bugs, add features, or improve performance

## Development Setup

1. **Fork the repository**
2. **Clone your fork locally**
   ```bash
   git clone https://github.com/YOUR_USERNAME/quran-search-engine.git
   cd quran-search-engine/mcp-server
   ```
3. **Install dependencies**
   ```bash
   pnpm install
   ```
4. **Start development**
   ```bash
   pnpm dev
   ```

## Making Changes

### Branch Naming

Use descriptive branch names:
- `fix/search-error-handling`
- `feature/add-fuzzy-search`
- `docs/update-api-documentation`

### Code Style

This project uses:
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting

Please ensure your code follows the existing style and passes all linting checks.

### Testing

Before submitting a pull request:

1. **Run tests**
   ```bash
   pnpm test
   ```
2. **Build the project**
   ```bash
   pnpm build
   ```
3. **Test the MCP server manually**
   ```bash
   echo '{"jsonrpc": "2.0", "method": "tools/list", "params": {}, "id": 1}' | pnpm start
   ```

## Submitting Changes

1. **Update documentation** if you've added or changed functionality
2. **Add tests** for new features or bug fixes
3. **Ensure all tests pass**
4. **Create a pull request** with a clear description of your changes

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Testing
- [ ] Tests pass locally
- [ ] Manual testing completed
- [ ] Documentation updated

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-review completed
- [ ] Documentation updated if needed
```

## Areas of Contribution

### Search Functionality
- Improve search algorithms
- Add new search modes
- Optimize performance

### MCP Integration
- Add new MCP tools
- Improve error handling
- Enhance schema validation

### Documentation
- Improve API documentation
- Add more examples
- Create tutorials

### Data Management
- Optimize data loading
- Improve caching strategies
- Add new data sources

## Getting Help

If you need help with contributing:

- **GitHub Issues**: For bug reports and feature requests
- **Discussions**: For general questions and ideas
- **Code Reviews**: We'll provide feedback on your pull requests

## Recognition

Contributors will be recognized in:
- Our contributors list
- Release notes for significant contributions
- Special thanks in documentation

Thank you for contributing to the Quran Search Engine MCP Server!
