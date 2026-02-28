import { loadMorphology, loadWordMap, loadQuranData } from 'quran-search-engine';
import type { MorphologyAya, WordMap, QuranText } from 'quran-search-engine';

export interface DataCache {
  quranData: QuranText[];
  morphologyMap: Map<number, MorphologyAya>;
  wordMap: WordMap;
}

let dataCache: DataCache | null = null;

export const loadDataCache = async (): Promise<DataCache> => {
  if (dataCache) {
    return dataCache;
  }

  try {
    const [quranData, morphologyMap, wordMap] = await Promise.all([
      loadQuranData(),
      loadMorphology(),
      loadWordMap(),
    ]);

    dataCache = {
      quranData,
      morphologyMap,
      wordMap,
    };

    console.log('Quran search data loaded successfully');
    return dataCache;
  } catch (error) {
    console.error('Failed to load data cache:', error);
    throw error;
  }
};

export const getDataCache = (): DataCache => {
  if (!dataCache) {
    throw new Error('Data cache not initialized. Call loadDataCache() first.');
  }
  return dataCache;
};
