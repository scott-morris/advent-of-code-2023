import ejs from 'ejs';
import { leftPad } from '@helpers/left-pad';
import path from 'path';
import fs from 'fs/promises';

async function safeCreateFolder(folderName: string): Promise<boolean> {
  try {
    await fs.mkdir(folderName);
    return true;
  } catch {
    return false;
  }
}

export async function buildFromTemplate(day: number): Promise<void> {
  const dayString = leftPad(day, { length: 2, padWith: '0' });
  const templateFolder = path.resolve(import.meta.dir, `../template`);
  const outputFolder = path.resolve(import.meta.dir, `../src/day${dayString}`);

  const folderCreated = await safeCreateFolder(outputFolder);
  if (!folderCreated) {
    console.log(`Folder not created. Quitting.`);
    return;
  }

  const files = await fs.readdir(templateFolder);
  files.forEach(async (fileName) => {
    const inputFile = path.join(templateFolder, fileName);
    const outputFile = path.join(outputFolder, fileName);

    console.log(`input: ${inputFile} || output: ${outputFile}`);

    if (path.extname(fileName) === '.ejs') {
      const fileContents = (await fs.readFile(inputFile)).toString();
      const template = ejs.compile(fileContents);
      const outputContents = template({ day_1: String(day), day_2: dayString });

      console.log(`writing to ${path.basename(outputFile, '.ejs')}`);
      await fs.writeFile(
        path.join(outputFolder, path.basename(outputFile, '.ejs')),
        outputContents
      );
    } else {
      await fs.copyFile(inputFile, outputFile);
    }
  });
}
