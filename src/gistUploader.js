const axios = require('axios');

const GIST_URL = 'https://api.github.com/gists';

/**
 * Upload a Gist to Github.
 * @param {string} input - The contents of the Gist.
 * @param {string} description - The description of the Gist, Defaults to 'Gist description'.
 */
function uploadGist(input, description='Gist description') {
  return axios.post(
    GIST_URL,
    {
      'description': description,
      'public': true,
      'files': {
        'Gist':  {
          'content': input,
        }
      }
    },
  );
}

module.exports = uploadGist;
