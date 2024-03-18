#!/bin/bash

npx tsx src/generator/surah-constant.ts
npx tsx src/generator/surah-json.ts
npx tsx src/generator/surah-list.ts
echo "genearator successfully executed"
npm run format:dev
echo "genearator successfully formatted"