const fs = require('fs');
fs.readFile('./files/file1.txt', 'utf8', (err, data1) => {
    if (err) {
      console.error('Error reading file1:', err);
      return;
    }
    fs.readFile('./files/file2.txt', 'utf8', (err, data2) => {
      if (err) {
        console.error('Error reading file2:', err);
        return;
      }
      const combinedData = data1 + '\n' + data2;
      fs.writeFile('combined.txt', combinedData, (err) => {
        if (err) {
          console.error('Error writing to combined.txt:', err);
          return;
        }
        console.log('Files successfully combined and written to combined.txt');
      });
    });
  });
  