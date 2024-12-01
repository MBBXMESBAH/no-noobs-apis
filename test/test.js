const { shortenURL, imageToPrompt, tikSearch, ytdl } = require('../src/index');

// Shorten URL
shortenURL("https://www.google.com")
  .then(result => {
    console.log("Shortened URL:", result);
  })
  .catch(error => {
    console.error("Error shortening URL:", error.message || error);
  });

// Image to Prompt
imageToPrompt("https://i.ibb.co/dB0zKZ4/image.jpg")
  .then(result => {
    console.log("Image Prompt:", result);
  })
  .catch(error => {
    console.error("Error generating prompt from image:", error.message || error);
  });

// TikTok Search
tikSearch("marvel 4k edit", 2)
  .then(result => {
    console.log("TikTok Search Results:", result);
  })
  .catch(error => {
    console.error("Error searching TikTok:", error.message || error);
  });

// YouTube Download
ytdl("https://youtu.be/fVPDf9UQE3k")
  .then(result => {
    console.log("YouTube Download URL:", result);
  })
  .catch(error => {
    console.error("Error downloading YouTube video:", error.message || error);
  });