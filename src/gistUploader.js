const fs = require('fs');


function readFile(file){
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data)
  })
}

readFile(process.argv[2])
