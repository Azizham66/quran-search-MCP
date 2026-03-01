import { search } from 'quran-search-engine';
import type {
  AdvancedSearchOptions,
  MorphologyAya,
  PaginationOptions,
  SearchResponse,
  VerseInput,
  WordMap,
} from '../types/index.js';

export const searchHandler = <TVerse extends VerseInput>(params: {
  query: string;
  quranData: TVerse[];
  morphologyMap: Map<number, MorphologyAya>;
  wordMap: WordMap;
  options?: AdvancedSearchOptions;
  pagination?: PaginationOptions;
}): SearchResponse<TVerse> => {
  const result = search(
    params.query,
    params.quranData,
    params.morphologyMap,
    params.wordMap,
    params.options,
    params.pagination,
  );
  return result;
};
