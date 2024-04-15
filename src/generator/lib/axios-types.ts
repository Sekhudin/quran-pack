export type SurahListResponse = {
  data: {
    id: number;
    arabic: string;
    latin: string;
    transliteration: string;
    translation: string;
    num_ayah: number;
    location: string;
  }[];
};

export type SurahResponse = {
  data: {
    id: number;
    surah_id: number;
    ayah: number;
    juz: number;
    arabic: string;
    latin: string;
    translation: string;
    surah: SurahListResponse['data'][number];
  }[];
};

export type TafsirResponse = {
  data: {
    id: number;
    tafsir: {
      wajiz: string;
      tahlili: string;
    };
  } & SurahResponse['data'][number];
};
