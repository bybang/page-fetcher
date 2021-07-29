//require -request (node) -fs (node)
const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2)

const fetcher = (args) => {
  const url = args[0]
  const filePath = args[1]
  
  request(url, function(error, response, body) {
    fs.writeFile(filePath, body, (err) => {
      if (err) throw err;
      const fileSize = body.length
      console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`);
    });
    // console.error('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
  });
}

fetcher(args);
