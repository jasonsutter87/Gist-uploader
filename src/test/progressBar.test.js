const progressBar = require('../progressBar');

describe('When given a progress percentage', () => {
  describe('When the percentage is 100 or greater', () => {
    it('Returns a full progressBar', () => {
      expect(progressBar(103)).toEqual('=====================');
    });
  });

  describe('When the percentage last digit is greater than 7', () => {
    it('Returns a progressBar rounded up to the next base 10 number.', () => {
      expect(progressBar(7)).toEqual('=-------------------');
    });

    it('Returns a progressBar rounded up to the next base 10 number.', () => {
      expect(progressBar(77)).toEqual('===============-----');
    });
  });

  describe('When the percentage last digit is greater than 3', () => {
    it('Returns a progressBar rounded up to next base 5 number.', () => {
      expect(progressBar(3)).toEqual('=-------------------');
    });
    it('Returns a progressBar rounded up to next base 5 number.', () => {
      expect(progressBar(33)).toEqual('=======-------------');
    });
  });

  describe('When the percentage last digit is less than 3', () => {
    it('Returns a progressBar rounded down to next base 10 number.', () => {
      expect(progressBar(1)).toEqual('--------------------');
    });

    it('Returns a progressBar rounded down to next base 10 number.', () => {
      expect(progressBar(11)).toEqual('==------------------');
    });
  });
});
