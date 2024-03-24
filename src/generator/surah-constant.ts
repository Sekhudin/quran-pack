import { kemenag, SurahListResponse } from '../lib/axios-client';
import { writeFile } from '../util/write-file';
import { KEMENAG_PATH } from './util/constant';

async function generate() {
  const response = await kemenag.get<SurahListResponse>(
    KEMENAG_PATH.quranSurah(),
  );
  if (!response.data || !response.data.data || !response.data.data.length) {
    throw new Error(
      `Failed generate surah-list. axios -status ${response.status}`,
    );
  }

  const surahNames: string[] = [];
  const surahNamesLatin: string[] = [];
  const surahNamesID: string[] = [];
  const surahNamesTransID: string[] = [];
  const surahCategories: string[] = [];
  const surahVerses: number[] = [];
  const data = response.data.data;
  for (let i = 0; i < Object.keys(data).length; i++) {
    const _surah = data[i];
    surahNames.push(_surah.arabic.trim());
    surahNamesLatin.push(_surah.latin.trim());
    surahNamesID.push(_surah.transliteration.trim());
    surahNamesTransID.push(_surah.translation.trim());
    surahCategories.push(_surah.location.trim());
    surahVerses.push(_surah.num_ayah);
  }

  const _constTemp: string = ''
    .concat(
      'export const SURAH_NAMES = ',
      JSON.stringify(surahNames),
      ' as const;\n\n',
      'export const SURAH_NAMES_LATIN = ',
      JSON.stringify(surahNamesLatin),
      ' as const;\n\n',
      'export const SURAH_NAMES_ID = ',
      JSON.stringify(surahNamesID),
      ' as const;\n\n',
      'export const SURAH_NAMES_TRANS_ID = ',
      JSON.stringify(surahNamesTransID),
      ' as const;\n\n',
      'export const SURAH_CATEGORIES = ',
      JSON.stringify(surahCategories),
      ' as const;\n\n',
      'export const SURAH_NUM_VERSES = ',
      JSON.stringify(surahVerses),
      ' as const;',
    )
    .replace(/‘/g, "'")
    .trim();

  const _typeTemp: string = ''
    .concat(
      `import type { SURAH_NAMES, SURAH_NUM_VERSES, SURAH_NAMES_ID, SURAH_NAMES_LATIN, SURAH_CATEGORIES, SURAH_NAMES_TRANS_ID } from '../constant/surah-constant';\n`,
      `\nexport type SurahNumber = number;\n`,
      `export type SurahName = (typeof SURAH_NAMES)[number];\n`,
      `export type SurahNameLatin = (typeof SURAH_NAMES_LATIN)[number];\n`,
      `export type SurahNameID = (typeof SURAH_NAMES_ID)[number];\n`,
      `export type SurahNameTransID = (typeof SURAH_NAMES_TRANS_ID)[number];\n`,
      `export type SurahCategory= (typeof SURAH_CATEGORIES)[number];\n`,
      `export type SurahVerse = (typeof SURAH_NUM_VERSES)[number];`,
    )
    .trim();

  writeFile(
    [__dirname, '../surah/constant/surah-constant.ts'],
    _constTemp,
    (err) => {
      if (err) throw new Error(`failed generate surah-constant, ==> ${err}`);
      console.log('Surah-constant successfully generated');
    },
  );

  writeFile(
    [__dirname, '../surah/types/surah-constant.ts'],
    _typeTemp,
    (err) => {
      if (err) throw new Error(`failed generate surah-types, ==> ${err}`);
      console.log('Type of surah-constant successfully generated');
    },
  );
}

generate();
