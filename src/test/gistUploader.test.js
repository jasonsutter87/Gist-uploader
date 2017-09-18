const gistUploader = require('../gistUploader');
const axios = require('axios');

describe('When not given Gist content or a description', () => {
  it('Returns an error', () => {
    axios.post = jest.fn(() => Promise.resolve({ data: { html_url: 'url' } }));
    gistUploader.uploadGist()
      .then((result) => {
        expect(result).toEqual(new Error('File not present'));
      });
  });
});

describe('When given Gist content and a description', () => {
  describe('When Gist inputs are a string', () => {
    it('Returns a Gist URL', () => {
      axios.post = jest.fn(() => Promise.resolve({ data: { html_url: 'url' } }));
      gistUploader.uploadGist('test', 'string')
        .then((result) => {
          expect(result).toEqual('url');
        });
      });
    });

  describe('When one of the Gist inputs are not a string', () => {
    it('Returns an error', () => {
      axios.post = jest.fn(() => Promise.resolve({ data: { html_url: 'url' } }));
      gistUploader.uploadGist('test', 343)
        .then((result) => {
          expect(result).toEqual(new Error('Content not a string'));
        });
    });

    it('Returns an error', () => {
      axios.post = jest.fn(() => Promise.resolve({ data: { html_url: 'url' } }));
      gistUploader.uploadGist(24324, 'string')
        .then((result) => {
          expect(result).toEqual(new Error('File not a string'));
        });
      });
  });
});
