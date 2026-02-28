# Quran Search Engine MCP Server

> **⚠️ Important Notice**: This is an **adaptation layer** that provides MCP (Model Context Protocol) server functionality for the original [quran-search-engine](https://github.com/adelpro/quran-search-engine) by [Adel Benyahia](https://github.com/adelpro). If you're looking for the core search engine library, documentation, or want to use the search functionality directly in your applications, please visit the original project.

## Overview

This MCP server exposes the powerful Quran Search Engine as a tool that can be used by AI assistants and MCP-compatible clients. It acts as a bridge between the original search engine and MCP-compatible AI systems.

## Credit & Attribution

**Original Project**: [quran-search-engine](https://github.com/adelpro/quran-search-engine) by [Adel Benyahia](https://github.com/adelpro)

This MCP server is built on top of and depends entirely on the original Quran Search Engine. All search functionality, Arabic text processing, morphological analysis, and data structures are provided by the original library.

### For Original Library Documentation

If you need:
- **Core API documentation**
- **Search algorithm details** 
- **Direct library usage examples**
- **Performance benchmarks**
- **Data source information**

👉 **Visit**: [https://github.com/adelpro/quran-search-engine](https://github.com/adelpro/quran-search-engine)

---

## MCP Server Features

This adaptation layer provides:

- **Exact Search**: Find exact matches of Arabic text
- **Fuzzy Search**: Find similar words and phrases
- **Prefix Search**: Find words starting with specific prefixes
- **Morphological Analysis**: Search by lemma and root words
- **Pagination**: Control result sets with limit and offset
- **Multi-language Support**: Search in Arabic and transliterated text
- **Performance Optimized**: Data caching for fast response times

## Installation

```bash
npm install quran-search-mcp
```

## Quick Start

### As MCP Server

Start the server:

```bash
npx quran-search-mcp
```

The server will load Quran data once during startup and then listen for MCP requests via stdio.

### As Library

Import the MCP server functions:

```typescript
import { bootstrap, createServer } from 'quran-search-mcp';

// Create and start server programmatically
const server = await createServer();

// Or use bootstrap directly
await bootstrap();
```

---

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/Azizham66/quran-search-MCP.git
cd quran-search-MCP

# Install dependencies for all packages
pnpm install

# Build all packages
pnpm build

# Start development mode
pnpm dev:mcp
```

### Project Structure

```
quran-search-MCP/
├── packages/
│   └── quran-search-engine/     # Original search engine 
├── mcp-server/                  # MCP server adaptation
│   ├── src/                     # Server source code
│   │   ├── data/                # Data caching module
│   │   ├── handlers/            # Search handlers
│   │   ├── tools/               # MCP tools
│   │   ├── types/               # Type definitions
│   │   └── index.ts             # Server entry point
│   ├── dist/                    # Built server files
│   ├── package.json              # Server package config
│   └── tsconfig.json           # TypeScript config
├── README.md                    # This documentation
├── CHANGELOG.md                 # Version history
└── package.json                 # Workspace configuration
```

### Testing

```bash
# Run tests for the engine
pnpm test

# Test the MCP server manually
echo '{"jsonrpc": "2.0", "method": "tools/list", "params": {}, "id": 1}' | pnpm start

# Test search functionality
echo '{"jsonrpc": "2.0", "method": "tools/call", "params": {"name": "search", "arguments": {"query": "الرحمن"}}, "id": 2}' | pnpm start
```

---

## Architecture

The MCP server is built with performance in mind:

- **Data Caching**: Three key datasets are loaded once during server bootstrap:
  - **Quran Text**: Complete Quranic verses with Uthmani and standard Arabic text
  - **Morphology Map**: Morphological analysis data for each verse (roots, lemmas, forms)
  - **Word Map**: Comprehensive word-to-verse mapping for fast lookups
- **Type Safety**: Full TypeScript support with Zod schema validation
- **Error Handling**: Comprehensive error handling and logging
- **Memory Efficient**: Optimized data structures for fast search operations

---

## Available Tools

### Search Tool

Search the Quran for specific text or concepts.

**Parameters:**
- `query` (string, required): The search term
- `options` (object, optional):
  - `limit` (number): Maximum number of results (default: 20)
  - `offset` (number): Number of results to skip
  - `matchType` (string): Search mode - "exact", "fuzzy", or "prefix"
  - `includeMorphology` (boolean): Include morphological analysis
  - `includeWordMap` (boolean): Include word mapping data

**Example Request:**
```json
{
  "jsonrpc": "2.0",
  "method": "tools/call",
  "params": {
    "name": "search",
    "arguments": {
      "query": "الرحمن",
      "options": {
        "limit": 5,
        "matchType": "exact"
      }
    }
  },
  "id": 1
}
```

---

## API Reference

### Search Results Schema

Each search result contains:

- `sura_id`: Chapter number
- `aya_id_display`: Verse number in Arabic numerals
- `uthmani`: Uthmani script text
- `standard`: Standard Arabic text
- `sura_name`: Chapter name in Arabic
- `sura_name_en`: Chapter name in English
- `matchScore`: Relevance score
- `matchType`: Type of match found
- `matchedTokens`: Array of matched tokens

### Response Structure

- `results`: Array of matching verses
- `counts`: Search statistics by match type
- `pagination`: Pagination information

---

## Contributing

Contributions are welcome! Please read our contributing guidelines and submit pull requests.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

## License

MIT License - see LICENSE file for details.

---

## Acknowledgments & License

### Original Project Credit

This MCP server is an adaptation layer built upon the excellent [quran-search-engine](https://github.com/adelpro/quran-search-engine) by [Adel Benyahia](https://github.com/adelpro). 

- **Original Engine Author**: Adel Benyahia <contact@adelpro.us.kg>
- **Original Engine Project**: https://github.com/adelpro/quran-search-engine
- **Original Engine License**: MIT

### Adaptation Layer

This MCP server adaptation is also licensed under MIT and maintains compatibility with the original project's licensing terms.
 - **MCP Server Author**: Aziz Hamdan <azizham66@gmail.com>
 - **MCP Server Project**: https://github.com/Azizham66/quran-search-MCP
 - **MCP Server License**: MIT

### Data Sources

The Quranic data, morphology, and word mappings used by this MCP server are the same as those provided by the original quran-search-engine project, sourced from the Quranic Arabic Corpus v4.0.

---

**Thank you to Adel Benyahia for creating and maintaining the excellent quran-search-engine library that makes this MCP adaptation possible!**

---

## Repository

- **GitHub**: https://github.com/Azizham66/quran-search-MCP
- **Issues**: https://github.com/Azizham66/quran-search-MCP/issues
- **npm**: https://www.npmjs.com/package/quran-search-mcp
