const { imageToPrompt } = require('../src/index');


imageToPrompt("https://i.ibb.co/dB0zKZ4/image.jpg")
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error("Error:", error);
  });
