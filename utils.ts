const getInput = (filePath: string) =>
  Bun.file(filePath)
    .text()
    .then((fileText) => fileText.replace(/(\r\n)|\r|\n/g, "\n"));

export const getInputStrings = (filePath: string) =>
  getInput(filePath).then((fileContents) => fileContents.split(/\n/g));
