import type { SurahVerses } from './types';

type SurahConstructor = {
  number: number;
  name: string;
  name_latin: string;
  name_id: string;
  name_trans_id: string;
  category: string;
  number_of_verse: number;
  arabics: SurahVerses['arabics'];
  latins: SurahVerses['latins'];
  translations: SurahVerses['translations'];
  tafsirs: SurahVerses['tafsirs'];
};

export abstract class SurahAbstract {
  private _number: number;
  private _name: string;
  private _name_latin: string;
  private _name_id: string;
  private _name_trans_id: string;
  private _category: string;
  private _number_of_verse: number;
  private _arabics: SurahVerses['arabics'];
  private _latins: SurahVerses['latins'];
  private _translations: SurahVerses['translations'];
  private _tafsirs: SurahVerses['tafsirs'];

  constructor(value: SurahConstructor) {
    this._number = value.number;
    this._name = value.name;
    this._name_latin = value.name_latin;
    this._name_id = value.name_id;
    this._name_trans_id = value.name_trans_id;
    this._category = value.category;
    this._number_of_verse = value.number_of_verse;

    this._arabics = value.arabics;
    this._latins = value.latins;
    this._translations = value.translations;
    this._tafsirs = value.tafsirs;
  }

  get surahNumber() {
    return this._number;
  }

  get name() {
    return this._name;
  }

  get nameLatin() {
    return this._name_latin;
  }

  get nameID() {
    return this._name_id;
  }

  get nameTranslateID() {
    return this._name_trans_id;
  }

  get category() {
    return this._category;
  }

  get numberOfVerse() {
    return this._number_of_verse;
  }

  get arabics() {
    return this._arabics;
  }

  get latins() {
    return this._latins;
  }

  get translations() {
    return this._translations;
  }

  get tafsirs() {
    return this._tafsirs;
  }

  get isMakkiyah() {
    return this._category.toLowerCase() === 'Makkiyah'.toLowerCase();
  }

  get isMadaniyah() {
    return this._category.toLowerCase() === 'Madaniyah'.toLowerCase();
  }
}
