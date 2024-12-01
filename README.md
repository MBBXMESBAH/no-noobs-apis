```markdown
# NO-NOOBS-APIS

@saxx/no-noobs-apis is a collection of powerful and easy-to-use APIs designed to enhance your projects with various functionalities. Currently, it includes the `shortenURL`, `imageToPrompt`, `tikSearch`, and `ytdl` APIs, with plans to add more in the future.

<p>
<a href="https://github.com/MBBXMESBAH"><img title="Author" src="https://img.shields.io/badge/Author-Mesbah%20Saxx-black.svg?style=for-the-badge&logo=github" alt=""></a>
</p>
<a href="https://github.com/MBBXMESBAH?tab=followers"><img title="Followers" src="https://img.shields.io/github/followers/MBBXMESBAH?color=black&style=flat-square" alt=""></a>

![npm](https://img.shields.io/npm/v/@saxx/no-noobs-apis)
![npm](https://img.shields.io/npm/dw/@saxx/no-noobs-apis)
![npm](https://img.shields.io/npm/dt/@saxx/no-noobs-apis)

## Features

- **imageToPrompt API**: Converts images to textual prompts.
- **shortenURL API**: Shortens a provided URL.
- **tikSearch API**: Searches TikTok videos based on a query.
- **ytdl API**: Retrieves download links for YouTube videos.
- Easy-to-use API structure for integration into your projects.

## 📊 Statistics

- **Total Downloads**: ![npm](https://img.shields.io/npm/dt/@saxx/no-noobs-apis)
- **Weekly Downloads**: ![npm](https://img.shields.io/npm/dw/@saxx/no-noobs-apis)

## Installation

To install the library, use npm:

```bash
npm install @saxx/no-noobs-apis@latest
```

## Usage

Here’s how to use the `@saxx/no-noobs-apis`:

### Importing the Library

```javascript
const { shortenURL, imageToPrompt, tikSearch, ytdl } = require('@saxx/no-noobs-apis');
```

### Using the APIs

```javascript
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
```

## API Reference

### `shortenURL(url: string)`

Shortens a URL.

- **Parameters**:
  - `url` (string): The URL to shorten.
- **Returns**: A shortened version of the URL.

---

### `imageToPrompt(imageUrl: string)`

Converts an image URL to a textual prompt.

- **Parameters**:
  - `imageUrl` (string): The URL of the image to convert.
- **Returns**: A textual prompt based on the image.
- **Throws**: An error if the image is not found or if there is an issue with the API.

---

### `tikSearch(query: string, count: number)`

Searches TikTok for videos based on a query.

- **Parameters**:
  - `query` (string): The search query (e.g., "marvel 4k edit").
  - `count` (number): The number of results to fetch.
- **Returns**: A list of TikTok video results.
- **Throws**: An error if the search fails.

---

### `ytdl(videoUrl: string)`

Fetches download links for a YouTube video.

- **Parameters**:
  - `videoUrl` (string): The URL of the YouTube video.
- **Returns**: The download link for the video.
- **Throws**: An error if the video URL is invalid or if there is an issue with the API.

---

## Error Handling

The library provides meaningful error messages for issues such as:
- Image not found.
- Invalid YouTube video URL.
- Network errors while accessing the APIs.

## Dependencies

- [axios](https://www.npmjs.com/package/axios) for making HTTP requests.

## Contributing

Contributions are welcome! If you have any ideas, improvements, or bug fixes, feel free to submit a pull request or open an issue on GitHub.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

## Author

- **Mesbah Saxx**  
  [GitHub Profile](https://github.com/MBBXMESBAH)

---

## Links

- **Repository**: [@saxx/no-noobs-apis GitHub](https://github.com/MBBXMESBAH/no-noobs-apis)
- **Issues**: [Submit Issues](https://github.com/MBBXMESBAH/no-noobs-apis/issues)
- **Homepage**: [@saxx/no-noobs-apis Homepage](https://github.com/MBBXMESBAH/no-noobs-apis#readme)
```