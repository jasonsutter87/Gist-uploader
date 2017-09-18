const fs = require('fs');

/**
 * Reads the input text file.
 * @param {string} file - Text file to be read.
 */
function readFile(file) {
  return new Promise((resolve, reject) => {
    try {
      const fileSizeInBytes = fs.statSync(file).size;
      let totalBytesProcessed = 0;
      const stream = fs.createReadStream(file);
      stream.on('data', (chunk) => {
        var textChunk = chunk.toString('utf8');
        totalBytesProcessed += chunk.length;
        console.log('Reading File: ' + ((totalBytesProcessed/fileSizeInBytes).toFixed(2) * 100).toString() +'%' )
        resolve(textChunk);
      });
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = { readFile };
