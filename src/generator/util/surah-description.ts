import {
  SURAH_NAMES,
  SURAH_NUM_VERSES,
  SURAH_NAMES_ID,
  SURAH_NAMES_LATIN,
  SURAH_CATEGORIES,
  SURAH_NAMES_TRANS_ID,
} from '../../surah/constant/surah-constant';

type SurahDescriptionFN = (num: number) => {
  number: number;
  name: (typeof SURAH_NAMES)[number];
  name_latin: (typeof SURAH_NAMES_LATIN)[number];
  name_id: (typeof SURAH_NAMES_ID)[number];
  name_trans_id: (typeof SURAH_NAMES_TRANS_ID)[number];
  number_of_verse: (typeof SURAH_NUM_VERSES)[number];
  category: (typeof SURAH_CATEGORIES)[number];
};

const surahDescription: SurahDescriptionFN = (num) => {
  if (num < 0 || num >= 114)
    throw new Error(`surah ${num} invalid, out of index`);
  return {
    number: num + 1,
    name: SURAH_NAMES[num],
    name_latin: SURAH_NAMES_LATIN[num],
    name_id: SURAH_NAMES_ID[num],
    name_trans_id: SURAH_NAMES_TRANS_ID[num],
    number_of_verse: SURAH_NUM_VERSES[num],
    category: SURAH_CATEGORIES[num],
  };
};
export default surahDescription;
