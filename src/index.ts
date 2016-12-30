import * as fs from 'fs';

function printContents(
  fileName: string,
  callback?: (contents: string) => void
): void {
  fs.readFile(fileName, (err, data) => {
    if (err)
      throw err;

    if (callback) {
      const contents = data.toString();
      callback(contents);
    }
  })
}

if (fs.existsSync('sauce')) {
  printContents('sauce', (contents) => {
    console.log('Contents of the file are:', contents);
  });
} else {
  fs.writeFile('sauce', 'noob', (err) => {
    printContents('sauce', (contents) => {
      console.log(`Wrote '${contents}' to the sauce file`);
    });
  })
}
