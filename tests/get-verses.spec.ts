import * as Quran from '../src';

describe("Qur'an getVerses(startVerse, limitVerse) - surah Al-Fatihah", () => {
  test('qurah surah name al-fatihah verses 2 until 5, limit 4', () => {
    const quran = Quran.surah('Al-Fatihah');
    const verses = quran.getVerses(2, 4);

    expect(verses.hasPrev).toBeTruthy();
    expect(verses.hasNext).toBeTruthy();

    expect(verses.arabics['1']).toBeUndefined();
    expect(verses.arabics['2']).toBeDefined();
    expect(verses.arabics['3']).toBeDefined();
    expect(verses.arabics['4']).toBeDefined();
    expect(verses.arabics['5']).toBeDefined();
    expect(verses.arabics['6']).toBeUndefined();

    expect(verses.latins['1']).toBeUndefined();
    expect(verses.latins['2']).toBeDefined();
    expect(verses.latins['3']).toBeDefined();
    expect(verses.latins['4']).toBeDefined();
    expect(verses.latins['5']).toBeDefined();
    expect(verses.latins['6']).toBeUndefined();

    expect(verses.translations.id['1']).toBeUndefined();
    expect(verses.translations.id['2']).toBeDefined();
    expect(verses.translations.id['3']).toBeDefined();
    expect(verses.translations.id['4']).toBeDefined();
    expect(verses.translations.id['5']).toBeDefined();
    expect(verses.translations.id['6']).toBeUndefined();

    expect(verses.tafsirs.id.kemenag['1']).toBeUndefined();
    expect(verses.tafsirs.id.kemenag['2']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['3']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['4']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['5']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['6']).toBeUndefined();
  });

  test('qurah surah name al-fatihah verses 1 until 5, limit 5', () => {
    const quran = Quran.surah('Al-Fatihah');
    const verses = Quran.surah('Al-Fatihah').getVerses(1, 5);

    console.log('object :>> ', verses);

    expect(verses.hasPrev).toBeFalsy();
    expect(verses.hasNext).toBeTruthy();

    expect(verses.arabics['1']).toBeDefined();
    expect(verses.arabics['2']).toBeDefined();
    expect(verses.arabics['3']).toBeDefined();
    expect(verses.arabics['4']).toBeDefined();
    expect(verses.arabics['5']).toBeDefined();
    expect(verses.arabics['6']).toBeUndefined();

    expect(verses.latins['1']).toBeDefined();
    expect(verses.latins['2']).toBeDefined();
    expect(verses.latins['3']).toBeDefined();
    expect(verses.latins['4']).toBeDefined();
    expect(verses.latins['5']).toBeDefined();
    expect(verses.latins['6']).toBeUndefined();

    expect(verses.translations.id['1']).toBeDefined();
    expect(verses.translations.id['2']).toBeDefined();
    expect(verses.translations.id['3']).toBeDefined();
    expect(verses.translations.id['4']).toBeDefined();
    expect(verses.translations.id['5']).toBeDefined();
    expect(verses.translations.id['6']).toBeUndefined();

    expect(verses.tafsirs.id.kemenag['1']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['2']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['3']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['4']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['5']).toBeDefined();
    expect(verses.tafsirs.id.kemenag['6']).toBeUndefined();

    expect(verses.arabics['5']).toBe(
      'اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ',
    );
    expect(verses.latins['5']).toBe("Iyyāka na'budu wa iyyāka nasta'īn(u),");
    expect(verses.translations.id['5']).toBe(
      'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.',
    );
    expect(verses.tafsirs.id.kemenag['5']).toBe(
      'Atas dasar itu semua, hanya kepada Engkaulah kami menyembah dan beribadah dengan penuh ketulusan, kekhusyukan, dan tawakal, dan hanya kepada Engkaulah kami memohon pertolongan dalam segala urusan dan keadaan kami, sambil kami berusaha keras.',
    );
  });
});
