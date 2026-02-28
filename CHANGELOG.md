# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial monorepo structure
- MCP server adaptation layer
- Workspace configuration with pnpm
- Separated engine package to `packages/quran-search-engine`
- Shared linting and formatting configurations
- Updated documentation for monorepo setup

### Changed
- Restructured project from single package to monorepo
- Moved engine-specific files to packages directory
- Updated package.json to workspace configuration

### Fixed
- Resolved import paths for MCP server
- Fixed workspace dependency resolution
- Ensured both packages build correctly

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

## [0.1.1] - 2026-02-28

### Added
- Repository URL format in package.json

### Changed
- Updated repository URL format to use git+https protocol

### Fixed
- Repository URL format in package.json
- Other minor fixes in documentation and configuration
