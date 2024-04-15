import { SurahAbstract } from './abstract';
import { surahBuilder } from './builder';
import type {
  SurahNameID,
  SurahNumber,
  SurahVerse,
  SurahVerses,
} from './types';
export * from './source/constant';
export type * from './types';

type ReturnGetVerses = SurahVerses & { hasNext: boolean; hasPrev: boolean };

export type { SurahNameID, SurahNumber };
export class Surah extends SurahAbstract {
  constructor(value: SurahNameID | number) {
    const surah = surahBuilder(value);
    super(surah);
  }

  private isValidVerse(verse: number): boolean {
    return verse > 0 && verse <= super.numberOfVerse;
  }

  private hasPrev(start: number): boolean {
    return start > 1 && super.numberOfVerse !== 0;
  }

  private hasNext(start: number, limit: number): boolean {
    return start - 1 + limit < super.numberOfVerse;
  }

  private filter(
    obj: Record<string, string>,
    start: number,
    limit: number,
  ): Record<string, string> {
    const result: Record<string, string> = {};
    for (let i = start; i <= start + limit - 1; i++) {
      if (obj[i.toString()]) {
        result[i.toString()] = obj[i.toString()];
      }
    }
    return result;
  }

  getVerse(verse: number): SurahVerse {
    if (!this.isValidVerse(verse)) throw new Error('Invalid verse');
    return {
      arabic: super.arabics[verse],
      latin: super.latins[verse],
      translation: { id: super.translations.id[verse] },
      tafsir: {
        id: { kemenag: super.tafsirs.id.kemenag[verse] },
      },
    };
  }

  getVerses(start: number, limit: number): ReturnGetVerses {
    if (!start || !limit) throw new Error('start and limit should be defined!');
    if (start < 1 || start > super.numberOfVerse) {
      throw new Error('invalid start verse!');
    }

    return {
      hasPrev: this.hasPrev(start),
      hasNext: this.hasNext(start, limit),
      arabics: this.filter(super.arabics, start, limit),
      latins: this.filter(super.latins, start, limit),
      translations: { id: this.filter(super.translations.id, start, limit) },
      tafsirs: {
        id: { kemenag: this.filter(super.tafsirs.id.kemenag, start, limit) },
      },
    };
  }
}
