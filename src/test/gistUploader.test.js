const uploadGist = require('../gistUploader');
const axios = require('axios');

describe('When not given Gist content or a description', () => {
  it('Returns an error', () => {
    axios.post = jest.fn(() => Promise.resolve({ data: { html_url: 'url' } }));
    uploadGist()
      .then((result) => {
        expect(result).toEqual(new Error('File not present'));
      });
  });
});

describe('When given Gist content and a description', () => {
  describe('When Gist inputs are a string', () => {
    it('Returns a Gist URL', () => {
      axios.post = jest.fn(() => Promise.resolve({ data: { html_url: 'url' } }));
      uploadGist('test', 'string')
        .then((result) => {
          expect(result).toEqual('url');
        });
      });
    });
});
