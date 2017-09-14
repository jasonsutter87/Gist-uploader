const readFile = require('./readFile');
const uploadGist = require('./gistUploader');

async function Runner() {
  const fileName = process.argv[2];
  const gistDescription = process.argv[3];
  try {
    const contents = await readFile(fileName);
    const upload = await uploadGist(contents, gistDescription)
    console.log(`Gist was uploaded to: ${upload.data.url}`);
  } catch (error) {
    console.log(error);
  }
}

Runner();
