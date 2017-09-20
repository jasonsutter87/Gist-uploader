const readFile = require('./readFile');
const gistUploader = require('./gistUploader');
const prompt = require('syncprompt');

async function Runner() {
  try {
    let username;
    let usersPassword;
    const isPublic = prompt("Is this a public gist? (true, false)\t");
    const uploadToUserAccount = prompt("Upload the gist to users account? (yes, no)\t");
    if(uploadToUserAccount.toLowerCase() === 'yes') {
      username = prompt("What is your Github username?\t");
      usersPassword = prompt("What is your Github password?\t", { secure: true });
    }

    const fileName = process.argv[2];
    const gistDescription = process.argv[3];
    const contents = await readFile.readFile(fileName);
    const upload = await gistUploader.uploadGist(fileName, contents, gistDescription, username, usersPassword, isPublic);
    console.log(`Gist URL:  ${upload}`);
  } catch (error) {
    console.log(error);
  }
}

Runner();
