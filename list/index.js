#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    throw new Error(err);
  }

  filenames.forEach(filename => {
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err);
      }

      if (stats.isDirectory()) {
        console.log(filename);
      } else {
        console.log('\x1b[34m', filename);
      }
    });
  });
});
