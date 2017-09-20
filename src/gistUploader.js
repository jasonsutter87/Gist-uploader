const axios = require('axios');

const GIST_URL = 'https://api.github.com/gists';

/**
 * Upload a Gist to Github.
 * @param {string} file - The name of the file for the Gist.
 * @param {string} input - The contents of the Gist.
 * @param {string} description - The description of the Gist, Defaults to 'Gist description'.
 * @param {string} username - The username of a GitHub user'.
 * @param {string} usersPassword - The password of a GitHub user'.
 * @param {boolean} isPublic - Sets if the gist is public or not'.
 * @returns {(string | error)} - String of the Gist URL or an error
 */
async function uploadGist(file, content, description = 'Gist description', username='', usersPassword='', isPublic) {
  try {
    if (!file) {
      throw new Error('File not present');
    } else if ( typeof file !== 'string') {
      throw new Error('File not a string');
    }

    if (!content || typeof content !== 'string') {
      throw new Error('Content not a string');
    }

    let result;
    if(username !== '' &&  usersPassword !== '') {
      result = await axios({
        method: 'post',
        url: GIST_URL,
        auth: {
          username: username,
          password: usersPassword
        },
        data: {
          'description': description,
          'public': isPublic,
          'files': {
            [file]:  {
              'content': content,
            },
          },
        },
      }
      );
    } else {
      result = await axios({
        method: 'post',
        url: GIST_URL,
        data: {
          'description': description,
          'public': isPublic,
          'files': {
            [file]:  {
              'content': content,
            },
          },
        },
      }
      );
    }
    process.stdout.write('\nGist has been uploaded\n')
    return result.data.html_url;
  } catch (error) {
    return error;
  }
}

module.exports = { uploadGist };
