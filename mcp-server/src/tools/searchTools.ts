import { searchHandler } from '../handlers/handlers.js';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getDataCache } from '../data/dataCache.js';
import { z } from 'zod';
import type { SearchSchemaType, AdvancedSearchOptions, PaginationOptions } from '../types/index.js';

export const registerSearchTools = (server: McpServer) => {
  server.registerTool(
    'search',
    {
      title: 'search',
      description: 'Search the Quran',
      inputSchema: z.object({
        query: z.string(),
        options: z
          .object({
            limit: z.number().optional(),
            offset: z.number().optional(),
            matchType: z.enum(['exact', 'fuzzy', 'prefix']).optional(),
            includeMorphology: z.boolean().optional(),
            includeWordMap: z.boolean().optional(),
          })
          .optional(),
      }),
    },
    async ({ query, options }: SearchSchemaType) => {
      try {
        // Get data from cache (loaded once during bootstrap)
        const { quranData, morphologyMap, wordMap } = getDataCache();

        // Convert MCP options to internal format
        let searchOptions: AdvancedSearchOptions | undefined;
        let pagination: PaginationOptions | undefined;

        if (options) {
          searchOptions = {
            lemma: options.matchType === 'exact' || options.matchType === 'fuzzy',
            root: false,
            fuzzy: options.matchType === 'fuzzy',
          };

          if (options.limit !== undefined) {
            pagination = { limit: options.limit };
          }

          if (options.offset !== undefined) {
            pagination = pagination || {};
            pagination.page = Math.floor(options.offset / (options.limit || 10)) + 1;
          }
        }

        // Perform search
        const result = searchHandler({
          query,
          quranData,
          morphologyMap,
          wordMap,
          options: searchOptions,
          pagination,
        });

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result),
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                error: error instanceof Error ? error.message : 'Unknown error occurred',
              }),
            },
          ],
        };
      }
    },
  );
};
