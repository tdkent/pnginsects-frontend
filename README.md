# Insects of Papua New Guinea

## Description

[PNGInsects.com](https://www.pnginsects.com/) is an image-based website documenting the many insects found on Papua New Guinea, a large island country in the southwestern Pacific.

I developed this application between September and November 2023 as freelance project in collaboration with conservationist and photographer James Wareing. The project leveraged Next.js, particularly its powerful Image component, to deliver an optimized browsing experience. Key techniques included lazy loading, fallback images, and robust error handling to ensure high performance and reliability.

The website organizes its content by taxonomic orders, such as Coleoptera (beetles) and Lepidoptera (butterflies and moths). Given that some pages feature hundreds of images, maintaining performance, responsiveness, and accessibility was a top priority throughout development.

## Features

- Displays thousands of images, meticulously organized by insect order and species, within a fully responsive, mobile-first layout.
- User-friendly interface includes a dark mode option and intuitive subnavigation elements for seamless browsing.
- Powered by a Node.js web server that serves hosted image data and automates content updates using the Cloudinary Node.js SDK.

## Backend

The backend for this project (private repository) is a Node.js REST server designed to manage and process hosted image data from Cloudinary. For each specific webpage (e.g., representing a particular insect order), the server:

- Fetches image data from Cloudinary.

- Organizes the data by species.

- Extracts captions from each image’s `public_id`, filters out unwanted characters, and generates HTML snippets to ensure proper display on the frontend.

- Sorts the processed image data and sends it to the frontend.

The integration of the Cloudinary Node.js SDK enables automated updates to the image data. When new subdirectories are added in Cloudinary, corresponding species sections are dynamically created in the frontend. Fetch requests also account for additions and removals, ensuring the website stays up-to-date with minimal manual intervention.

### Example Code

```js
export const extractCaptions = (resources: CloudinaryResource[]) => {
  return resources.map((img) => {
    const fragment = img.public_id.split("/")[2];
    let filteredString = "";

    // italicize species names
    // ' (apostrophe) indicates word should be italicized
    if (fragment[0] === "'") {
      for (let i = 0; i < fragment.length; i++) {
        const char = fragment[i];
        if (char === "'") {
          if (i === 0 || fragment[i - 1] === " ") filteredString += "<i>";
          else filteredString += "</i>";
        } else filteredString += char;
      }

      // remove auto-generated duplicate naming
      // ex: (2) or (3)
      // check if character is '(' and following char is a number
      const regex = /[(]+[0-9]/g;
      // if so, remove the last 4 characters from the string
      // if the copy number is 9 or less, this will remove ' (x)'
      // if the copy number is 10 or greater, this will remove '(xx)'
      // in this case we can use trim() to remove the trailing space
      if (filteredString.match(regex))
        filteredString = filteredString.slice(0, -4);
      // add line break tag if caption includes a common name
      const commonNameHyphen = " - ";
      if (filteredString.includes(commonNameHyphen)) {
        filteredString =
          filteredString.split(commonNameHyphen)[0] +
          "<br />" +
          filteredString.split(commonNameHyphen)[1];
      }
    }
    return { ...img, caption: filteredString.trim() };
  });
};
```

## Built with

### Frontend

- TypeScript
- React 18
- Next.js 14
- Tailwind CSS
- Zustand
- react-intersection-observer

### Backend

- Node.js
- Express.js
- express-validator
- Cloudinary Node.js SDK

## Views
