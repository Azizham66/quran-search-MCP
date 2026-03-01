# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed
- Removed console.log statements that were breaking JSON output for MCP agents
- Cleaned up server startup code to ensure raw JSON response

### Changed
- Simplified searchHandler implementation for better maintainability
- Improved code formatting and structure

## [0.1.3] - 2026-03-02

### Fixed
- **Critical**: Removed console.log statements that were corrupting JSON output for MCP agents
- Cleaned up server startup to ensure raw JSON responses
- Simplified handler implementation

## [0.1.0] - 2026-02-28

### Added
- MCP server for Quran Search Engine
- Data caching for performance optimization
- JSON-RPC protocol support
- Search tool with multiple match types
- TypeScript and Zod schema validation

### Changed
- Adapted original search engine for MCP protocol
- Modified data loading for server environment

### Fixed
- Type compatibility issues with MCP SDK
- Import path resolution in workspace
- Build configuration for monorepo

## [0.1.2] - 2026-02-28

### Fixed
- MCP server direct execution detection
- Server startup and JSON-RPC communication
- Data loading and search functionality
- Console logging for better debugging

### Changed
- Simplified server startup logic
- Improved error handling
- Enhanced development experience

---

## [0.1.1] - 2026-02-28

### Added
- Repository URL format in package.json

### Changed
- Updated repository URL format to use git+https protocol

### Fixed
- Repository URL format in package.json
- Other minor fixes in documentation and configuration
