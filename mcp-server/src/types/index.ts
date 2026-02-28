import { z } from 'zod';

const searchSchema = z.object({
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
});

export type {
  QuranText,
  VerseInput,
  MorphologyAya,
  WordMap,
  MatchType,
  AdvancedSearchOptions,
  SearchOptions,
  PaginationOptions,
  SearchResponse,
} from 'quran-search-engine';

export type SearchSchemaType = z.infer<typeof searchSchema>;
