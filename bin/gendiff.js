#!/usr/bin/env node

import { Command } from "commander";
const program = new Command();

// eslint-disable-next-line no-unused-expressions
program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0", "-V, --version", "output the version number")
  .helpOption("-h, --help", "output usage information")
  .argument("<filepath1> <filepath2>")
  .option("-f, --format <type>", "output format");

program.parse();
