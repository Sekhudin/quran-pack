export const KEMENAG_BASE_URL = 'https://web-api.qurankemenag.net';
export const KEMENAG_PATH = {
  quranSurah: () => 'quran-surah',
  quranVerse: (limit: number, surah: number) =>
    `quran-ayah?start=0&limit=${limit}&surah=${surah}`,
  quranTafsir: (id: number) => `quran-tafsir/${id}`,
};
