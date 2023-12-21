import { program } from 'commander';
import { buildFromTemplate } from './scripts/build-from-template';

program.name('Advent of Code 2023 Runner');

console.log('Hello world');
buildFromTemplate(5);
