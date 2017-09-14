const axios = require('axios');

const GIST_URL = 'https://api.github.com/gists';

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
