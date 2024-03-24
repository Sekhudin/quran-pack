import writeFile from '../util/write-file';
import surahDescription from './util/surah-description';

function generate() {
  let _surahTemp: string = `export type SurahList = typeof surahList;\nexport const surahList = `;
  const surahList: ReturnType<typeof surahDescription>[] = [];
  const sumOfSurah = 114;

  for (let id = 0; id < sumOfSurah; id++) {
    const surah = surahDescription(id);
    surahList.push(surah);
    console.log(`Surah ${surah.name_latin} successfully added to surah-list`);
  }

  _surahTemp = _surahTemp
    .concat(JSON.stringify(surahList) + ';')
    .replace(/‘/g, "'")
    .trim();

  writeFile([__dirname, '../surah/source/surah-list.ts'], _surahTemp, (err) => {
    if (err) throw new Error(`failed generate surah-list, ==> ${err}`);
    console.log('Surah-list file successfully generated');
  });
}

generate();
