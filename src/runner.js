const readFile = require('./readFile');
const uploadGist = require('./gistUploader');

async function Runner(fileName, description) {
  if(!fileName){
    console.log('Please pass a file or directory path');
    return 'Please pass a file or directory path';
  }
  try {
    const contents = await readFile(fileName);
    const upload = await uploadGist(fileName, contents, description);
    console.log('\nYour Gist has successfully uploaded.')
    console.log(`View Gist at: ${upload.message}.`)
  } catch (error) {
    console.log('Upload Failed')
    // TODO: Add a more descriptive message for other test cases
  }
}

Runner(process.argv[2], process.argv[3]);

module.exports = Runner;
