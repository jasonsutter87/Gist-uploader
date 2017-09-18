const readFile = require('./readFile');
const gistUploader = require('./gistUploader');

async function Runner() {
  try {
    const fileName = process.argv[2];
    const gistDescription = process.argv[3];
    const contents = await readFile.readFile(fileName);
    const upload = await gistUploader.uploadGist(fileName, contents, gistDescription);
    console.log(upload);
  } catch (error) {
    console.log(error);
  }
}

Runner();
