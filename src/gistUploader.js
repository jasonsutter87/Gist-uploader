const axios = require('axios');

const GIST_URL = 'https://api.github.com/gists';

/**
 * Upload a Gist to Github.
 * @param {string} file - The name of the file for the Gist.
 * @param {string} content - The contents of the Gist.
 * @param {string} description - The description of the Gist, Defaults to 'Gist description'.
 * @returns {(string | error)} - String of the Gist URL or an error
 */
async function uploadGist(file, content, description = 'Gist description') {
  try {
    const post = {
      description: description,
      public: true,
      files: {
        file:  {
          'content': content,
        },
      },
    }
    const result = await axios({
      method: 'post',
      url: GIST_URL,
      data: post
    })
    .catch((error) => {
      if(error.request) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    return {status: result.status, message: result.data.html_url};
  } catch (error) {
    return {status: error.response.status, message: error.response.data.message};
  }
}

module.exports = uploadGist;
