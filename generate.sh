#!/bin/bash

# npx tsx src/generator/constant.ts
npx tsx src/generator/source.ts
echo "genearator successfully executed"
npm run format:dev
echo "genearator successfully formatted"