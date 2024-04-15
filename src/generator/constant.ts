import { kemenag, SurahListResponse } from './lib/axios-client';
import { KEMENAG_PATH } from './lib/constant';
import { writeFile } from './util';

async function generate() {
  const response = await kemenag.get<SurahListResponse>(
    KEMENAG_PATH.quranSurah(),
  );

  if (!response.data || !response.data.data || !response.data.data.length) {
    throw new Error(
      `Failed generate surah-list. axios -status ${response.status}`,
    );
  }

  let _surahTemp: string = `export const SURAH_LIST = `;
  const surahList: Record<
    | 'number'
    | 'name'
    | 'name_latin'
    | 'name_id'
    | 'name_trans_id'
    | 'number_of_verse'
    | 'category',
    unknown
  >[] = [];

  const surahNames: string[] = [];
  const surahNamesLatin: string[] = [];
  const surahNamesID: string[] = [];
  const surahNamesTransID: string[] = [];
  const surahCategories: string[] = [];
  const surahVerses: number[] = [];
  const data = response.data.data;

  if (Object.keys(data).length !== 114) {
    throw new Error('Failed generate surah-constant. sum of surah invalid!');
  }

  for (let i = 0; i < Object.keys(data).length; i++) {
    const _surah = data[i];
    surahNames.push(_surah.arabic.trim());
    surahNamesLatin.push(_surah.latin.trim());
    surahNamesID.push(_surah.transliteration.trim());
    surahNamesTransID.push(_surah.translation.trim());
    surahVerses.push(_surah.num_ayah);
    surahCategories.push(_surah.location.trim());

    // surah list
    const surah: (typeof surahList)[number] = {
      number: i + 1,
      name: _surah.arabic.trim(),
      name_latin: _surah.latin.trim(),
      name_id: _surah.transliteration.trim(),
      name_trans_id: _surah.translation.trim(),
      number_of_verse: _surah.num_ayah,
      category: _surah.location.trim(),
    };

    surahList.push(surah);
    console.log(`Surah ${surah.name_latin} successfully added to surah-list`);
  }

  _surahTemp = _surahTemp
    .concat(JSON.stringify(surahList) + ';')
    .replace(/‘/g, "'")
    .trim();

  const _typeTemp: string = ''
    .concat(
      `import type { SURAH_NAMES, SURAH_NUM_VERSES, SURAH_NAMES_ID, SURAH_NAMES_LATIN, SURAH_CATEGORIES, SURAH_NAMES_TRANS_ID, SURAH_LIST } from './constant';\n`,
      `\nexport type SurahNumber = number;\n`,
      `export type SurahName = (typeof SURAH_NAMES)[number];\n`,
      `export type SurahNameLatin = (typeof SURAH_NAMES_LATIN)[number];\n`,
      `export type SurahNameID = (typeof SURAH_NAMES_ID)[number];\n`,
      `export type SurahNameTransID = (typeof SURAH_NAMES_TRANS_ID)[number];\n`,
      `export type SurahCategory= (typeof SURAH_CATEGORIES)[number];\n`,
      `export type SurahVerse = (typeof SURAH_NUM_VERSES)[number];\n`,
      `export type SurahList = typeof SURAH_LIST;\n`,
    )
    .trim();

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
      ' as const;\n\n',
    )
    .concat(_surahTemp)
    .replace(/‘/g, "'")
    .trim();

  writeFile([__dirname, '../surah/source/constant.ts'], _constTemp, (err) => {
    if (err) throw new Error(`failed generate surah-constant, ==> ${err}`);
    console.log('Surah-constant successfully generated');
  });

  writeFile([__dirname, '../surah/source/types.ts'], _typeTemp, (err) => {
    if (err) throw new Error(`failed generate surah-types, ==> ${err}`);
    console.log('Type of surah-constant successfully generated');
  });
}

generate();
