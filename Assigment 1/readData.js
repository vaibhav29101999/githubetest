const fs = require('fs');

fs.readFile('data.txt', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:');
  console.log(data.toString());
});
