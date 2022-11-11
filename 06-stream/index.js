const fs = require("fs");
const path = require("path");

const input = path.resolve(__dirname, "input.txt");
const output = path.resolve(__dirname, "output.txt");

const writableStream = fs.createWriteStream(output);

const readableStream = fs.createReadStream(input, {
  highWaterMark: 15,
});

readableStream.on("readable", () => {
  try {
    writableStream.write(`${readableStream.read()}\n`);
  } catch (error) {
    // catch the error when the chunk cannot be read.
  }
});
