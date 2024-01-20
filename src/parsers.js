import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) => fs.readFileSync(getAbsolutePath(filepath), 'utf-8');

export const JSONparser = (filepath) => JSON.parse(readFile(filepath));
export const YMLparser = (filepath) => yaml.load(readFile(filepath, 'utf8'));
