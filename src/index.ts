import { surahList } from './surah/source/surah-list';
import { Surah, type SurahNameID, type SurahNumber } from './surah/surah';

function surah(v: SurahNameID | SurahNumber): Surah {
  return new Surah(v);
}

export { surah, Surah, surahList };

