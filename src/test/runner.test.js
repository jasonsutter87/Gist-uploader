const runner = require('../runner');
const readFile = require('../readFile');
const uploadGist = require('../gistUploader');

describe('When no filename argument is passed to runner file', () => {
  it('Returns an error', () => {
    runner()
       .then((result) => {
         expect(result).toEqual('Please pass a file or directory path');
       });
    });
});

describe('When filename argument is passed to runner file', () => {
  describe('If the readFile can not read file', () => {
    it('Returns an error', () => {
      const readFile = jest.fn(() => Promise.reject('ENOENT'));
      readFile('text.txt')
      .catch((result) => {
        expect(result).toEqual('ENOENT');
      });
      });
    });

  describe('If the readFile can read file', () => {
    it('Return string to pass to the Gist uploader', () => {
      const readFile = jest.fn(() => 'testing');
      readFile('text.txt')
        expect(readFile('text.txt')).toEqual('testing');
      });
  });
});

describe('If the Gist uploader succeed', () => {
  it('Returns an URL', () => {
    const uploadGist = jest.fn(() => Promise.resolve('url'));
    uploadGist('test', 'string')
      .then((result) => {
        expect(result).toEqual('url');
      });
  });
});

describe('If the Gist fails', () => {
  it('Returns an error', () => {
    const uploadGist = jest.fn(() => Promise.reject('Error'));
    uploadGist('test', 'string')
    .catch((result) => {
      expect(result).toEqual('Error');
    })
  });
});
