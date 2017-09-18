const axios = require('axios');

const GIST_URL = 'https://api.github.com/gists';

/**
 * Upload a Gist to Github.
 * @param {string} file - The name of the file for the Gist.
 * @param {string} input - The contents of the Gist.
 * @param {string} description - The description of the Gist, Defaults to 'Gist description'.
 */
async function uploadGist(file, content, description = 'Gist description') {
  try {
    if (!file) {
      throw new Error('File not present');
    } else if ( typeof file !== 'string') {
      throw new Error('File not a string');
    }

    if (!content || typeof content !== 'string') {
      throw new Error('Content not a string');
    }

    const result = await axios.post(
      GIST_URL,
      {
        'description': description,
        'public': true,
        'files': {
          [file]:  {
            'content': content,
          },
        },
      },
    );
    return result.data.html_url;
  } catch (error) {
    return error;
  }
}

module.exports = {uploadGist};
