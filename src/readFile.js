const fs = require('fs');

/**
 * Reads the input text file.
 * @param {string} file - Text file to be read.
 */
function readFile(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = {readFile};
