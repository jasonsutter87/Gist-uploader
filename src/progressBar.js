const PROGRESS_LENGTH = 20;

/**
* The current progress percentage from the readStream.
* @param {integer} currentProgress - Current progress percentage of readStream.
* @returns {string} - String containing progress bar
*/
function progressBar(currentProgress) {
  const progressbar = new Array(PROGRESS_LENGTH).fill('-');

  const newProgress = Math.round(currentProgress * PROGRESS_LENGTH / 100);
  for (let i = 0; i < newProgress; i += 1) {
   progressbar[i] = '=';
  }

  return progressbar.join('');
}

module.exports = progressBar;
