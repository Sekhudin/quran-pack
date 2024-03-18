import fs from 'fs';
import path from 'path';

/**
 * Synchronous function to read json file
 * @param dirname directory location. ex: __dirname
 * @param filepath file location
 * @returns parsed json
 */
function json<T = unknown>(dirname: string, filepath: string): T {
  filepath = path.join(dirname, filepath);
  const file: string = fs.readFileSync(filepath, 'utf8');
  return JSON.parse(file) as T;
}

export default { json };
