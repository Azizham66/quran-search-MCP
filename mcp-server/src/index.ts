import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { registerSearchTools } from './tools/searchTools.js';

async function bootstrap() {
  const server = new McpServer({
    name: 'quran-search-engine-mcp',
    version: '0.1.0',
  });

  registerSearchTools(server);
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

bootstrap();
