const { shortenURL, imageToPrompt, tikSearch, ytdl, alldl, alldlSupportSite, aiDetector, instaSearch, pinSearch, } = require('./no-noobs-apis.js');

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

// All video downloader
alldl("https://www.instagram.com/reel/DDuZosrS9YE/")
  .then(result => {
    console.log("Alldl data:", result);
  })
  .catch(error => {
    console.error("Error fetching alldl video:", error.message || error);
  });

// All video downloader support site
alldlSupportSite()
  .then(result => {
    console.log("Supported Sites:", result);
  })
  .catch(error => {
    console.error("Error fetching alldl video support site:", error.message || error);
  });

// AI Detector
aiDetector("How can I help you today?")
  .then(result => {
    console.log("AI Detector Result:", result);
  })
  .catch(error => {
    console.error("Error detecting AI content:", error.message || error);
  });

// Instagram Search
instaSearch("nature photography")
  .then(result => {
    console.log("Instagram Search Results:", result);
  })
  .catch(error => {
    console.error("Error searching Instagram:", error.message || error);
  });

// Pinterest Search
pinSearch("cat", 5)
  .then(result => {
    console.log("Pinterest Search Results:", result);
  })
  .catch(error => {
    console.error("Error searching Pinterest:", error.message || error);
  });