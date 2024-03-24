import Quran from '../src';

describe("Qur'an getVerse(verseNumber) - surah Al-Fatihah", () => {
  test('Quran surah name al-fatihah verse 5 - ', () => {
    const quran = Quran('Al-Fatihah');
    const verse = quran.getVerse(5);
    expect(verse.arabic).toBe('اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ');
    expect(verse.latin).toBe("Iyyāka na'budu wa iyyāka nasta'īn(u),");
    expect(verse.translation.id).toBe(
      'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.',
    );
    expect(verse.tafsir.id.kemenag).toBe(
      'Atas dasar itu semua, hanya kepada Engkaulah kami menyembah dan beribadah dengan penuh ketulusan, kekhusyukan, dan tawakal, dan hanya kepada Engkaulah kami memohon pertolongan dalam segala urusan dan keadaan kami, sambil kami berusaha keras.',
    );
  });

  test('Quran surah number 1 verse 5', () => {
    const quran = Quran(1);
    const verse = quran.getVerse(5);
    expect(verse.arabic).toBe('اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ');
    expect(verse.latin).toBe("Iyyāka na'budu wa iyyāka nasta'īn(u),");
    expect(verse.translation.id).toBe(
      'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.',
    );
    expect(verse.tafsir.id.kemenag).toBe(
      'Atas dasar itu semua, hanya kepada Engkaulah kami menyembah dan beribadah dengan penuh ketulusan, kekhusyukan, dan tawakal, dan hanya kepada Engkaulah kami memohon pertolongan dalam segala urusan dan keadaan kami, sambil kami berusaha keras.',
    );
  });
});
