const progressBar = require('./progressBar');

/**
 * Writes the progess of the progressBar
 * @param {integer} indexOfCursor - Index to move the cursor after clearing the console.
 * @param {integer} totalByes - Total bytes processed.
 * @param {integer} fileSize - File size in bytes.
 */
function writeProgressBar(indexOfCursor, totalByes, fileSize){
  process.stdout.clearLine(process.stdout, indexOfCursor)
  process.stdout.cursorTo(0)
  process.stdout.write(`Reading File: [${progressBar(((totalByes/fileSize).toFixed(2) * 100))}]` )
}

module.exports = writeProgressBar;
