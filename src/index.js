import _ from "lodash";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const readFile = (filepath) =>
  fs.readFileSync(getAbsolutePath(filepath), "utf-8");
const parseFile = (filepath) => JSON.parse(readFile(filepath));

const genDiff = (filepath1, filepath2) => {
  console.log("process.cwd()", process.cwd());

  const file1Content = parseFile(filepath1);
  const file2Content = parseFile(filepath2);

  console.log("Contents of file1.json:");
  console.log(file1Content);
  console.log("Contents of file2.json:");
  console.log(file2Content);
};

export default genDiff;
