import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import parseFile from './parsers.js';
import buildDiff from './buildDiff.js';
import formatter from './formatters/index.js';

const readfile = (filepath) => {
  const currentDir = cwd();
  const absolutePath = resolve(currentDir, filepath);
  const content = readFileSync(absolutePath, 'utf-8');

  return content;
};

const getExtension = (file) => file.split('.')[1];

const genDiff = (filepath1, filepath2) => {
  const file1 = parseFile(getExtension(filepath1), readfile(filepath1));
  const file2 = parseFile(getExtension(filepath2), readfile(filepath2));

  const diffTree = buildDiff(file1, file2);
  // console.log('первый файл', file1);
  // console.log('второй файл', file2);
  // console.log(JSON.stringify(buildDiff(file1, file2), null, ' '));
  return formatter(diffTree);
};

export default genDiff;
