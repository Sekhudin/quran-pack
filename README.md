## Quran-pack

Quran package is sourced from the website of the Ministry of Religion of the Republic of Indonesia.
This package uses the nodejs fs package so it can only be used on nodejs.

### Installation

Install package using npm

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
import Quran from 'quran-pack';
```

Import the package into your js/ts file with named import:

```typescript
import { Surah } from 'quran-pack';
```

#### Declaration instance

```typescript
const quran = Quran('Al-Fatihah');
```

or

```typescript
const quran = new Surah('Al-Fatihah');
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

#### Use the provided methods:

```typescript
const quran = Quran('Al-Fatihah');
const verse = quran.getVerse(5); // return object surah al-fatihah verse 5.
const verses = quran.getVerses(1, 5); // return object surah alfatihah from verse 1 until verse 5, because the limit are 5 verses.
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
quran.theMethod();
quran.anotherMethod();
```
