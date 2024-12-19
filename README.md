---

# NO-NOOBS-APIS

`@saxx/no-noobs-apis` is a collection of powerful and easy-to-use APIs designed to enhance your projects with various functionalities. It includes `shortenURL`, `imageToPrompt`, `tikSearch`, `ytdl`, `alldl`, `aiDetector`, `instaSearch`, and `pinSearch`, with plans for more in the future.

<p>
<a href="https://github.com/MBBXMESBAH"><img title="Author" src="https://img.shields.io/badge/Author-Mesbah%20Saxx-black.svg?style=for-the-badge&logo=github" alt=""></a>
</p>
<a href="https://github.com/MBBXMESBAH?tab=followers"><img title="Followers" src="https://img.shields.io/github/followers/MBBXMESBAH?color=black&style=flat-square" alt=""></a>

![npm](https://img.shields.io/npm/v/@saxx/no-noobs-apis)
![npm](https://img.shields.io/npm/dw/@saxx/no-noobs-apis)
![npm](https://img.shields.io/npm/dt/@saxx/no-noobs-apis)

---

## What's New

### `v1.0.3`
- **`alldl API`**:
  - Fixed 404 error handling for a smoother experience.
- **New Features**:
  - Added `aiDetector`: Detect AI-generated content with precision.
  - Added `instaSearch`: Search and retrieve Instagram content.
  - Added `pinSearch`: Search and retrieve Pinterest content.

---

## Features

- **imageToPrompt API**: Converts images to textual prompts.
- **shortenURL API**: Shortens a provided URL.
- **tikSearch API**: Searches TikTok videos based on a query.
- **ytdl API**: Retrieves download links for YouTube videos.
- **alldl API**: Downloads videos from a wide range of sites with detailed metadata.
- **aiDetector API**: Detects AI-generated text with ease.
- **instaSearch API**: Fetches Instagram content by search query.
- **pinSearch API**: Searches Pinterest content and retrieves results.
- Easy-to-use API structure for seamless integration.

---

## Installation

To install the library, use npm:

```bash
npm install @saxx/no-noobs-apis@latest
```

---

## Usage

Here’s how to use `@saxx/no-noobs-apis`:

### Importing the Library

```javascript
const { shortenURL, imageToPrompt, tikSearch, ytdl, alldl, alldlSupportSite, aiDetector, instaSearch, pinSearch } = require('@saxx/no-noobs-apis');
```

### Example Usage

#### Shorten URL
```javascript
shortenURL("https://www.google.com")
  .then(result => console.log("Shortened URL:", result))
  .catch(error => console.error("Error shortening URL:", error));
```

#### Image to Prompt
```javascript
imageToPrompt("https://i.ibb.co/dB0zKZ4/image.jpg")
  .then(result => console.log("Image Prompt:", result))
  .catch(error => console.error("Error generating prompt:", error));
```

#### TikTok Search
```javascript
tikSearch("marvel 4k edit", 2)
  .then(result => console.log("TikTok Results:", result))
  .catch(error => console.error("Error searching TikTok:", error));
```

#### YouTube Download
```javascript
ytdl("https://youtu.be/fVPDf9UQE3k")
  .then(result => console.log("YouTube Download URL:", result))
  .catch(error => console.error("Error downloading YouTube video:", error));
```

#### All Video Downloader
```javascript
alldl("https://www.instagram.com/reel/DDuZosrS9YE/")
  .then(result => console.log("Alldl Data:", result))
  .catch(error => console.error("Error fetching video:", error));
```

#### Supported Sites for Video Downloads
```javascript
alldlSupportSite()
  .then(result => console.log("Supported Sites:", result))
  .catch(error => console.error("Error fetching supported sites:", error));
```

#### AI Detector
```javascript
aiDetector("How can I help you today?")
  .then(result => console.log("AI Detector Result:", result))
  .catch(error => console.error("Error detecting AI content:", error));
```

#### Instagram Search
```javascript
instaSearch("nature photography")
  .then(result => console.log("Instagram Search Results:", result))
  .catch(error => console.error("Error searching Instagram:", error));
```

#### Pinterest Search
```javascript
pinSearch("cat", 5)
  .then(result => console.log("Pinterest Search Results:", result))
  .catch(error => console.error("Error searching Pinterest:", error));
```

---

## API Reference

### `shortenURL(url: string)`
Shortens a URL.
- **Parameters**:  
  `url` (string): The URL to shorten.  
- **Returns**: Shortened URL as a string.

---

### `imageToPrompt(imageUrl: string)`
Converts an image URL to a textual prompt.
- **Parameters**:  
  `imageUrl` (string): The URL of the image.  
- **Returns**: Textual description based on the image.

---

### `tikSearch(query: string, count: number)`
Searches TikTok videos based on a query.
- **Parameters**:  
  `query` (string): Search query.  
  `count` (number): Number of results to fetch.  
- **Returns**: A list of TikTok video results.

---

### `ytdl(videoUrl: string)`
Fetches download links for a YouTube video.
- **Parameters**:  
  `videoUrl` (string): The YouTube video URL.  
- **Returns**: Download links for the video.

---

### `alldl(videoUrl: string)`
Downloads a video from the given URL.
- **Parameters**:  
  `videoUrl` (string): The video URL.  
- **Returns**: Metadata and download URL for the video.

---

### `alldlSupportSite()`
Retrieves a list of supported sites for `alldl`.
- **Returns**: An array of supported site domains.

---

### `aiDetector(content: string)`
Detects AI-generated content in a given text.
- **Parameters**:  
  `content` (string): Text to analyze.  
- **Returns**: Detection results with probabilities.

---

### `instaSearch(query: string)`
Searches Instagram for content based on a query.
- **Parameters**:  
  `query` (string): Search query.  
- **Returns**: Instagram search results.

---

### `pinSearch(query: string, count: number)`
Searches Pinterest for content.
- **Parameters**:  
  `query` (string): Search query.  
  `count` (number): Number of results to fetch.  
- **Returns**: Pinterest search results.

---

## Error Handling

The library provides descriptive error messages for:
- Invalid input data.
- Network issues.
- API errors.

---

## Dependencies

The project uses the following dependencies:

- [axios](https://www.npmjs.com/package/axios): For making HTTP requests.
- [cheerio](https://www.npmjs.com/package/cheerio): For parsing and manipulating HTML in Node.js.
- [form-data](https://www.npmjs.com/package/form-data): For creating and handling `multipart/form-data` streams.
- [fs](https://www.npmjs.com/package/fs): For interacting with the file system.
- [path](https://www.npmjs.com/package/path): For working with file and directory paths.
---

## Contributing

Contributions are welcome! Submit issues or pull requests on [GitHub](https://github.com/MBBXMESBAH/no-noobs-apis).

---

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---

## Author

- **Mesbah Saxx**  
  [GitHub Profile](https://github.com/MBBXMESBAH)

---

## Links

- **Repository**: [GitHub](https://github.com/MBBXMESBAH/no-noobs-apis)  
- **Issues**: [Submit Issues](https://github.com/MBBXMESBAH/no-noobs-apis/issues)  

---