# Quran Search Engine MCP Server

A Model Context Protocol (MCP) server that provides Quran search capabilities to AI assistants and MCP-compatible clients.

## Overview

This MCP server exposes the powerful Quran Search Engine as a tool that can be used by AI assistants for searching Quranic text, verses, and related content. It supports multiple search modes including exact matching, fuzzy search, and morphological analysis.

## Features

- **Exact Search**: Find exact matches of Arabic text
- **Fuzzy Search**: Find similar words and phrases
- **Prefix Search**: Find words starting with specific prefixes
- **Morphological Analysis**: Search by lemma and root words
- **Pagination**: Control result sets with limit and offset
- **Multi-language Support**: Search in Arabic and transliterated text
- **Performance Optimized**: Data caching for fast response times

## Installation

```bash
npm install quran-search-engine-mcp-server
```

## Quick Start

### As MCP Server

Start the server:

```bash
npm start
```

The server will load Quran data once during startup and then listen for MCP requests via stdio.

### Available Tools

#### Search Tool

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

## Development

### Setup

```bash
# Install dependencies
pnpm install

# Build the project
pnpm build

# Start in development mode
pnpm dev
```

### Testing

```bash
# Run tests
pnpm test

# Test the server manually
echo '{"jsonrpc": "2.0", "method": "tools/list", "params": {}, "id": 1}' | pnpm start
```

## Architecture

The MCP server is built with performance in mind:

- **Data Caching**: Quran data, morphology, and word maps are loaded once during server bootstrap
- **Type Safety**: Full TypeScript support with Zod schema validation
- **Error Handling**: Comprehensive error handling and logging
- **Memory Efficient**: Optimized data structures for fast search operations

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

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please read the contributing guidelines and submit pull requests.

## Support

For issues and questions, please use the GitHub issue tracker.
