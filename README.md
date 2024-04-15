## Quran-pack

Quran package is sourced from the website of the Ministry of Religion of the Republic of Indonesia.

### Installation

Install package using npm.

```typescript
npm i quran-pack
```

### Features

<ul>
  <li><input type="checkbox" checked />
  Search surah by surah name or surah number.
  </li>
  <li><input type="checkbox" checked />
  Search for a specific surah verse.
  </li>
  <li><input type="checkbox" checked />
  Search for a specific surah verses with limit.
  </li>
  <li><input type="checkbox" checked />
  Equipped with Arabic, Latin text, translation and interpretation.
  </li>
  <li><input type="checkbox" checked />
  Supports extensible classes.
  </li>
</ul>

### Quick Start

#### Import package

Import the package into your js/ts file with default import:

```typescript
import * as Quran from 'quran-pack';
```

Import the package into your js/ts file with named import:

```typescript
import { Surah } from 'quran-pack';
```

#### Declaration instance

```typescript
const quran = Quran.surah('Al-Fatihah');
// or
const quran1 = Quran.surah(1);
```

or

```typescript
const quran = new Surah('Al-Fatihah');
// or
const quran1 = new Surah(1);
```

#### Accessing property:

```typescript
//...
quran.surahNumber; // 1
quran.name; // الفاتحة
quran.nameLatin; // Al-Fātiḥah
quran.nameID; // Al-Fatihah
quran.nameTranslateID; // Pembuka
quran.category; // Makkiyah
quran.numberOfVerse; // 7
quran.isMakkiyah; // true
quran.isMadaniyah; // false
quran.arabics; // object
quran.latins; // object
quran.translations; // object
quran.tafsirs; // object
```

#### Surah list

```typescript
Quran.surahList; // list of surah
```

#### Use the provided methods:

```typescript
const quran = Quran.surah('Al-Fatihah');
const verse = quran.getVerse(5); // return object surah al-fatihah verse 5.
const verses = quran.getVerses(1, 3); // return object surah alfatihah from verse 1 until verse 3, because the limit are 3 verses.
```

Result `Quran.surah('Al-Fatihah').getVerse(5);`, its mean Al-Fatihah verse 5.

```typescript
{
  arabic: 'اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ',
  latin: "Iyyāka na'budu wa iyyāka nasta'īn(u),",
  translation: {
    id: 'Hanya kepada Engkaulah kami menyembah ...'
  },
  tafsir: {
    id: {
      kemenag: 'Atas dasar itu semua, ...'
    }
  }
}
```

Result `Quran.surah('Al-Fatihah').getVerses(1, 3);`, its mean Al-Fatihah verses 1 - 3.

```typescript
{
  hasPrev: false,
  hasNext: true,
  arabics: {
    '1': 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
    '2': 'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ',
    '3': 'الرَّحْمٰنِ الرَّحِيْمِۙ'
  },
  latins: {
    '1': 'Bismillāhir-raḥmānir-raḥīm(i).',
    '2': "Al-ḥamdu lillāhi rabbil-'ālamīn(a).",
    '3': 'Ar-raḥmānir-raḥīm(i).'
  },
  translations: {
    id: {
      '1': 'Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.',
      '2': 'Segala puji bagi Allah, Tuhan1) semesta alam',
      '3': 'Yang Maha Pengasih lagi Maha Penyayang,'
    }
  },
  tafsirs: {
    id: {
      kemenag: {
        '1': "Aku memulai bacaan Al-Qur'an ...",
        '2': "Segala puji kita persembahkan hanya untuk Allah semata ...",
        '3': "Dialah Yang Maha Pengasih, ...",
      }
    }
  }
}
```

Result `Quran.surahList`.

```typescript
[
  {
    number: 1,
    name: 'الفاتحة',
    name_latin: 'Al-Fātiḥah',
    name_id: 'Al-Fatihah',
    name_trans_id: 'Pembuka',
    number_of_verse: 7,
    category: 'Makkiyah',
  },
  {
    number: 2,
    name: 'البقرة',
    name_latin: 'Al-Baqarah',
    name_id: 'Al-Baqarah',
    name_trans_id: 'Sapi',
    number_of_verse: 286,
    category: 'Madaniyah',
  },
  ...
];
```

### Extensible Surah class

The Surah class is supports extensible that allow you to add additional methods or functions.

```typescript
import { Surah } from 'quran-pack';

class MySurah extends Surah {
  constructor(value) {
    super(value);
    // ...
  }

  theMethod() {
    // ...
  }

  anotherMethod() {
    // ...
  }
}

const quran = new MySurah(1);
quran.theMethod(); // output
quran.anotherMethod(); // output
```
