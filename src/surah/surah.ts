import SurahAbstract from './surah-abstract';
import surahBuilder from './surah-builder';
import type { SurahNameID, SurahVerse } from './types';

export default class Surah extends SurahAbstract {
  constructor(value: SurahNameID | number) {
    const { surah, verses } = surahBuilder(value);
    super({
      arabics: verses.arabics,
      latins: verses.latins,
      translations: verses.translations,
      tafsirs: verses.tafsirs,
      ...surah,
    });
  }

  private isValidVerse(verse: number): boolean {
    return verse > 0 && verse <= this.numberOfVerse;
  }

  getVerse(verse: number): SurahVerse {
    if (!this.isValidVerse(verse)) throw new Error('Invalid verse');
    return {
      arabic: this.arabics[verse],
      latin: this.latins[verse],
      translation: { id: this.translations.id[verse] },
      tafsir: {
        id: { kemenag: this.tafsirs.id.kemenag[verse] },
      },
    };
  }

  getVerses(start: number, limit: number){

  }
}
