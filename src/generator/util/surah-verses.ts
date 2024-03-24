import surahDescription from './surah-description';
import type { SurahVerses } from '../../surah/types';

type SurahVersesFN = (
  num: number,
  v: SurahVerses,
) => ReturnType<typeof surahDescription> & SurahVerses;

const surahVerses: SurahVersesFN = (num, v) => {
  const descriptions = surahDescription(num);
  return { ...descriptions, ...v };
};

export default surahVerses;
