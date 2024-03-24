import Surah, { SurahNameID, SurahNumber } from './surah/surah';
import { surahList, SurahList } from './surah/source/surah-list';

export { Surah, surahList };
export type { SurahList, SurahNameID, SurahNumber };
export default function quran(v: SurahNameID | SurahNumber): Surah {
  return new Surah(v);
}
