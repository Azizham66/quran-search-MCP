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

    // Export server instance for external usage
    return server;
  } catch (error) {
    console.error('Failed to bootstrap server:', error);
    process.exit(1);
  }
}

// Export for direct usage
export { bootstrap };

// Also export a factory function for creating server
export const createServer = async () => {
  return await bootstrap();
};

// Start server when run directly
if (process.argv[1].endsWith('index.js')) {
  bootstrap().catch((error) => {
    console.error('❌ Server startup failed:', error);
    process.exit(1);
  });
}
