// Libraries

import { blue, red, bold, underline } from "colors";
import { fileExists, readFile, path } from "./fs.ts";
import "../types/global.d.ts";

// Private

const __dirname = import.meta.dir;

// Public

/**
 * Get the input file name for the given day.
 * @param {Number} dayNumber the number of the day to get the input file for
 * @returns {String} the path to the input file
 */
export default async function getInputFile(
  dayNumber: number
): Promise<RawInput> {
  const paddedNumber = dayNumber.toString().padStart(2, "0").slice(-2);
  const fileName = path.resolve(
    __dirname,
    `../../data/input-${paddedNumber}.data`
  );

  // Check for existence of file. If it does not exist, provide a user-friendly error message.
  if (!(await fileExists(fileName))) {
    console.log(
      `${bold(red("ERROR:"))} The input file ${blue(
        underline(fileName)
      )} does not exist. Please create it before continuing.`
    );
    process.exit();
  }

  return await readFile(fileName);
}
