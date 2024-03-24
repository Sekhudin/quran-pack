import Quran, { Surah } from '../src';

describe("Qur'an defined using quran function and match properties - surah Al-Fatihah", () => {
  test('using contructor with string name of surah (ID)', () => {
    const quran = Quran('Al-Fatihah');
    expect(quran.surahNumber).toBe(1);
    expect(quran.name).toBe('الفاتحة');
    expect(quran.nameLatin).toBe('Al-Fātiḥah');
    expect(quran.nameID).toBe('Al-Fatihah');
    expect(quran.nameTranslateID).toBe('Pembuka');
    expect(quran.category).toBe('Makkiyah');
    expect(quran.numberOfVerse).toBe(7);
    expect(quran.isMakkiyah).toBe(true);
    expect(quran.isMadaniyah).toBe(false);
    expect(quran.arabics).toBeDefined();
    expect(Object.keys(quran.arabics).length).toBe(7);
    expect(quran.latins).toBeDefined();
    expect(Object.keys(quran.latins).length).toBe(7);
    expect(quran.translations.id).toBeDefined();
    expect(Object.keys(quran.translations.id).length).toBe(7);
    expect(quran.tafsirs.id.kemenag).toBeDefined();
    expect(Object.keys(quran.tafsirs.id.kemenag).length).toBe(7);
  });

  test('using contructor with number of surah', () => {
    const quran = Quran(1);
    expect(quran.surahNumber).toBe(1);
    expect(quran.name).toBe('الفاتحة');
    expect(quran.nameLatin).toBe('Al-Fātiḥah');
    expect(quran.nameID).toBe('Al-Fatihah');
    expect(quran.nameTranslateID).toBe('Pembuka');
    expect(quran.category).toBe('Makkiyah');
    expect(quran.numberOfVerse).toBe(7);
    expect(quran.isMakkiyah).toBe(true);
    expect(quran.isMadaniyah).toBe(false);
    expect(quran.arabics).toBeDefined();
    expect(Object.keys(quran.arabics).length).toBe(7);
    expect(quran.latins).toBeDefined();
    expect(Object.keys(quran.latins).length).toBe(7);
    expect(quran.translations.id).toBeDefined();
    expect(Object.keys(quran.translations.id).length).toBe(7);
    expect(quran.tafsirs.id.kemenag).toBeDefined();
    expect(Object.keys(quran.tafsirs.id.kemenag).length).toBe(7);
  });
});

describe("Qur'an defined and match properties - surah Al-Jumu'ah", () => {
  test('using contructor with string name of surah (ID)', () => {
    const quran = Quran("Al-Jumu'ah");
    expect(quran.surahNumber).toBe(62);
    expect(quran.name).toBe('الجمعة');
    expect(quran.nameLatin).toBe("Al-Jumu'ah");
    expect(quran.nameID).toBe("Al-Jumu'ah");
    expect(quran.nameTranslateID).toBe('Jumat');
    expect(quran.category).toBe('Madaniyah');
    expect(quran.numberOfVerse).toBe(11);
    expect(quran.isMakkiyah).toBe(false);
    expect(quran.isMadaniyah).toBe(true);
    expect(quran.arabics).toBeDefined();
    expect(Object.keys(quran.arabics).length).toBe(11);
    expect(quran.latins).toBeDefined();
    expect(Object.keys(quran.latins).length).toBe(11);
    expect(quran.translations.id).toBeDefined();
    expect(Object.keys(quran.translations.id).length).toBe(11);
    expect(quran.tafsirs.id.kemenag).toBeDefined();
    expect(Object.keys(quran.tafsirs.id.kemenag).length).toBe(11);
  });

  test('using contructor with number of surah', () => {
    const quran = Quran(62);
    expect(quran.surahNumber).toBe(62);
    expect(quran.name).toBe('الجمعة');
    expect(quran.nameLatin).toBe("Al-Jumu'ah");
    expect(quran.nameID).toBe("Al-Jumu'ah");
    expect(quran.nameTranslateID).toBe('Jumat');
    expect(quran.category).toBe('Madaniyah');
    expect(quran.numberOfVerse).toBe(11);
    expect(quran.isMakkiyah).toBe(false);
    expect(quran.isMadaniyah).toBe(true);
    expect(quran.arabics).toBeDefined();
    expect(Object.keys(quran.arabics).length).toBe(11);
    expect(quran.latins).toBeDefined();
    expect(Object.keys(quran.latins).length).toBe(11);
    expect(quran.translations.id).toBeDefined();
    expect(Object.keys(quran.translations.id).length).toBe(11);
    expect(quran.tafsirs.id.kemenag).toBeDefined();
    expect(Object.keys(quran.tafsirs.id.kemenag).length).toBe(11);
  });
});

describe("Qur'an defined using Surah class and match properties - surah Al-Fatihah", () => {
  test('using contructor with string name of surah (ID)', () => {
    const quran = new Surah('Al-Fatihah');
    expect(quran.surahNumber).toBe(1);
    expect(quran.name).toBe('الفاتحة');
    expect(quran.nameLatin).toBe('Al-Fātiḥah');
    expect(quran.nameID).toBe('Al-Fatihah');
    expect(quran.nameTranslateID).toBe('Pembuka');
    expect(quran.category).toBe('Makkiyah');
    expect(quran.numberOfVerse).toBe(7);
    expect(quran.isMakkiyah).toBe(true);
    expect(quran.isMadaniyah).toBe(false);
    expect(quran.arabics).toBeDefined();
    expect(Object.keys(quran.arabics).length).toBe(7);
    expect(quran.latins).toBeDefined();
    expect(Object.keys(quran.latins).length).toBe(7);
    expect(quran.translations.id).toBeDefined();
    expect(Object.keys(quran.translations.id).length).toBe(7);
    expect(quran.tafsirs.id.kemenag).toBeDefined();
    expect(Object.keys(quran.tafsirs.id.kemenag).length).toBe(7);
  });

  test('using contructor with number of surah', () => {
    const quran = new Surah(1);
    expect(quran.surahNumber).toBe(1);
    expect(quran.name).toBe('الفاتحة');
    expect(quran.nameLatin).toBe('Al-Fātiḥah');
    expect(quran.nameID).toBe('Al-Fatihah');
    expect(quran.nameTranslateID).toBe('Pembuka');
    expect(quran.category).toBe('Makkiyah');
    expect(quran.numberOfVerse).toBe(7);
    expect(quran.isMakkiyah).toBe(true);
    expect(quran.isMadaniyah).toBe(false);
    expect(quran.arabics).toBeDefined();
    expect(Object.keys(quran.arabics).length).toBe(7);
    expect(quran.latins).toBeDefined();
    expect(Object.keys(quran.latins).length).toBe(7);
    expect(quran.translations.id).toBeDefined();
    expect(Object.keys(quran.translations.id).length).toBe(7);
    expect(quran.tafsirs.id.kemenag).toBeDefined();
    expect(Object.keys(quran.tafsirs.id.kemenag).length).toBe(7);
  });
});

describe("Qur'an defined and match properties - surah Al-Jumu'ah", () => {
  test('using contructor with string name of surah (ID)', () => {
    const quran = new Surah("Al-Jumu'ah");
    expect(quran.surahNumber).toBe(62);
    expect(quran.name).toBe('الجمعة');
    expect(quran.nameLatin).toBe("Al-Jumu'ah");
    expect(quran.nameID).toBe("Al-Jumu'ah");
    expect(quran.nameTranslateID).toBe('Jumat');
    expect(quran.category).toBe('Madaniyah');
    expect(quran.numberOfVerse).toBe(11);
    expect(quran.isMakkiyah).toBe(false);
    expect(quran.isMadaniyah).toBe(true);
    expect(quran.arabics).toBeDefined();
    expect(Object.keys(quran.arabics).length).toBe(11);
    expect(quran.latins).toBeDefined();
    expect(Object.keys(quran.latins).length).toBe(11);
    expect(quran.translations.id).toBeDefined();
    expect(Object.keys(quran.translations.id).length).toBe(11);
    expect(quran.tafsirs.id.kemenag).toBeDefined();
    expect(Object.keys(quran.tafsirs.id.kemenag).length).toBe(11);
  });

  test('using contructor with number of surah', () => {
    const quran = new Surah(62);
    expect(quran.surahNumber).toBe(62);
    expect(quran.name).toBe('الجمعة');
    expect(quran.nameLatin).toBe("Al-Jumu'ah");
    expect(quran.nameID).toBe("Al-Jumu'ah");
    expect(quran.nameTranslateID).toBe('Jumat');
    expect(quran.category).toBe('Madaniyah');
    expect(quran.numberOfVerse).toBe(11);
    expect(quran.isMakkiyah).toBe(false);
    expect(quran.isMadaniyah).toBe(true);
    expect(quran.arabics).toBeDefined();
    expect(Object.keys(quran.arabics).length).toBe(11);
    expect(quran.latins).toBeDefined();
    expect(Object.keys(quran.latins).length).toBe(11);
    expect(quran.translations.id).toBeDefined();
    expect(Object.keys(quran.translations.id).length).toBe(11);
    expect(quran.tafsirs.id.kemenag).toBeDefined();
    expect(Object.keys(quran.tafsirs.id.kemenag).length).toBe(11);
  });
});
