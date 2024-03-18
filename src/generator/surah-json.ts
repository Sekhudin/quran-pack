import { kemenag, SurahResponse, TafsirResponse } from '../lib/axios-client';
import writeFile from '../util/write-file';
import surahVerses from '../surah/surah-verses';
import { SURAH_VERSES } from '../surah/constant/surah-constant';
import { KEMENAG_PATH } from '../constant';

async function generate() {
  for (let i = 0; i < 114; i++) {
    const response = await kemenag.get<SurahResponse>(
      KEMENAG_PATH.quranVerse(SURAH_VERSES[i], i + 1),
    );

    if (!response.data || !response.data.data || !response.data.data.length) {
      throw new Error(
        `Failed generate surah-json. axios -status ${response.status}`,
      );
    }

    const _surah = response.data.data;

    if (_surah.length !== SURAH_VERSES[i]) {
      throw new Error(
        `Surah ${i} is supposed to have ${SURAH_VERSES[i]} verses`,
      );
    }

    const arabics: ReturnType<typeof surahVerses>['arabics'] = {};
    const latins: ReturnType<typeof surahVerses>['latins'] = {};
    const translations: ReturnType<typeof surahVerses>['translations'] = {
      id: {},
    };
    const tafsirs: ReturnType<typeof surahVerses>['tafsirs'] = {
      id: { kemenag: {} },
    };

    for (let j = 0; j < _surah.length; j++) {
      const _verse = _surah[j];
      const responseTafsir = await kemenag.get<TafsirResponse>(
        KEMENAG_PATH.quranTafsir(_verse.id),
      );

      if (!responseTafsir.data || !responseTafsir.data.data) {
        throw new Error(
          `Tafsir of surah ${_verse.surah.latin} verse ${j} is undefined!`,
        );
      }
      const _tafsir = responseTafsir.data.data;

      arabics[j + 1] = _verse.arabic.trim();
      latins[j + 1] = _verse.latin.trim();
      translations.id[j + 1] = _verse.translation.trim();
      tafsirs.id.kemenag[j + 1] = _tafsir.tafsir.wajiz.trim();
    }
    const surahFullVerse = surahVerses(i, {
      arabics,
      latins,
      translations,
      tafsirs,
    });
    const _temp = ''
      .concat(JSON.stringify(surahFullVerse))
      .replace(/‘/g, "'")
      .trim();

    writeFile([__dirname, `../surah/source/${i + 1}.json`], _temp, (err) => {
      if (err) throw new Error(`Failed generate surah-json, ==> ${err}`);
      console.log(
        `${i + 1} of 114 ===>`,
        `Surah ${surahFullVerse.name_latin} json file successfully generated`,
      );
    });
  }
}

generate();
