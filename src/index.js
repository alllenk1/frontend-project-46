import _ from 'lodash';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) =>
  fs.readFileSync(getAbsolutePath(filepath), 'utf-8');
const parseFile = (filepath) => JSON.parse(readFile(filepath));

const genDiff = (filepath1, filepath2) => {
  let result = '';
  const file1 = parseFile(filepath1);
  const file2 = parseFile(filepath2);

  const sortedKeys = _.sortBy(_.union(Object.keys(file1), Object.keys(file2)));
  sortedKeys.map((key) => {
    if (Object.hasOwn(file1, key) && Object.hasOwn(file2, key)) {
      if (file1[key] === file2[key]) {
        result += `    ${key}: ${file1[key]} \n`;
      } else {
        result += `  - ${key}: ${file1[key]} \n`;
        result += `  + ${key}: ${file2[key]} \n`;
      }
    }

    if (Object.hasOwn(file1, key) && !Object.hasOwn(file2, key)) {
      result += `  - ${key}: ${file1[key]} \n`;
    }

    if (Object.hasOwn(file2, key) && !Object.hasOwn(file1, key)) {
      result += `  + ${key}: ${file2[key]} \n`;
    }
  });
  return `{\n  ${result.trim()}\n}`;
};

export default genDiff;
