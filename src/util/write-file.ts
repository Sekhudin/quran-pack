import fs from 'fs';
import path from 'path';

/**
 * Asynchronous function to write file
 * @param param list contains directory location and file location
 * @param content string or array buffer
 * @param cb callback that contains error if process failed
 */
export default function writeFile(
  [dirname, filePath]: [string, string],
  content: string | NodeJS.ArrayBufferView,
  cb: (err: NodeJS.ErrnoException | null) => void,
) {
  filePath = path.join(dirname, filePath);
  dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  fs.writeFile(filePath, content, cb);
}
