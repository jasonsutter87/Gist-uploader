const fs = require('fs');
const writeProgressBar = require('./writeProgressBar');

/**
 * Reads the input text file.
 * @param {string} file - Text file to be read.
 * @returns {Promise} - Promise object represents the contents of the readStream
 */
function readFile(file) {
  return new Promise((resolve, reject) => {
    try {
      const fileSizeInBytes = fs.statSync(file).size;
      let totalBytesProcessed = 0;
      const stream = fs.createReadStream(file);
      stream.on('data', (chunk) => {
        const textChunk = chunk.toString('utf8');
        totalBytesProcessed += chunk.length;

        let total = fileSizeInBytes - totalBytesProcessed
        while (total > 0) {
          writeProgressBar.writeProgressBar(0, totalBytesProcessed, fileSizeInBytes);
          total = total - fileSizeInBytes
        }
        writeProgressBar.writeProgressBar(0, totalBytesProcessed, fileSizeInBytes);
        resolve(textChunk);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { readFile };
