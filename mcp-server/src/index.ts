import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerSearchTools } from './tools/searchTools.js';
import { loadDataCache } from './data/dataCache.js';

async function bootstrap() {
  try {
    // Load data once during server bootstrap
    await loadDataCache();

    const server = new McpServer({
      name: 'quran-search-engine-mcp',
      version: '0.1.0',
    });

    registerSearchTools(server);
    const transport = new StdioServerTransport();
    await server.connect(transport);
  } catch (error) {
    console.error('Failed to bootstrap server:', error);
    process.exit(1);
  }
}

bootstrap();
