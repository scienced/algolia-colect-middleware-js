##  A simple frontend middleware for Algolia & Colect
Integrate Algolia search functionality in the [Colect.io](https://www.colect.io/) brand portal frontend. 

## Features

- Search modal with filtering and autocomplete suggestions
- Overrides excisting search container
- Checks if Algolia index is available before injecting itself
- CDN for JS & CSS code 
- Shadow Dom to isolate itself from existing html/css/js
- Custom styling (pending)

## Demo (pending)

You can not yet play with `algolia-colect-middleware-js` in a demo environemnt.

## Installation

```sh
npm install
```
## Run local
Uses Vite for local server & hot reloading

```sh
npn run dev
```

## Build distribution
Uses Vite to build an ES & UMD JS library

```sh
npn run build
```

## CDN (to be finalised)

```html
<!-- Netlify CDN  -->
<script type="module" crossorigin src="https://superlative-meringue-b70113.netlify.app/assets/index.js"></script>
<link rel="stylesheet" href="https://superlative-meringue-b70113.netlify.app/assets/index.css">

<!-- Usage -->
 <script >
     var container = document.querySelector('.placeholder')
     var options = {
      customerCollection: "placeholder",
      customerLanguage: "placeholder",
      customerId: "placeholder",
      algoliaApplicationId: "placeholder",
      algoliaApiKey: "placeholder",
    }
 </script>
```

## Documentation

The contatiner determins where the search field will be placed. Provide an id (#placeholder) or class (.placeholder). 

### Options

| Property | required | explained |
| -------- | ------- | --------- |
| `customerCollection`    | yes  | the exact name of the Algolia index |
| `customerLanguage`    | no  | language of logged in user (optional) |
| `customerId`    | no  | logged in user identification (optional) |
| `algoliaApplicationId`    | yes | Algolia unique application identifier [link](https://www.algolia.com/account/api-keys/all) |  
| `algoliaApiKey`    | yes  | Algolia Search API Key [link](https://www.algolia.com/account/api-keys/all) |  


### Author
- [Michiel](https://github.com/scienced)

