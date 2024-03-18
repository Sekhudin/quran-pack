export type * from './surah-constant';

type Lang = 'id';
type TafsirKey = 'kemenag';

type Arabics = Record<string, string>;
type Latins = Record<string, string>;
type Translations = Record<Lang, Record<string, string>>;
type Tafsirs = {
  id: Record<'kemenag', Record<string, string>>;
};

export type SurahVerses = {
  arabics: Arabics;
  latins: Latins;
  translations: Translations;
  tafsirs: Tafsirs;
};

export type SurahVerse = {
  arabic: string;
  latin: string;
  translation: Record<Lang, string>;
  tafsir: { id: Record<TafsirKey, string> };
};
