##  A simple frontend middleware for Algolia & Colect
Integrate Algolia search functionality in the [Colect.io](https://www.colect.io/) brand portal frontend. 

## Features

- Search modal with filtering and autocomplete suggestions
- Overrides excisting search container
- Checks if Algolia index is available before injecting itself
- Standalone JS library
- Shadow Dom to isolate itself from existing html/css/js
- Custom styling 

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
<!-- jsDelivr  -->
 <script src="https://cdn.jsdelivr.net/gh/scienced/algolia-colect-middleware-js/dist/algolia_colect_middelware.umd.js"></script> -->

<!-- Usage -->
 <script >
     const container = document.querySelector('.placeholder')
     const options = {
      customerCollection: "placeholder",
      customerLanguage: "placeholder",
      customerId: "placeholder",
      algoliaApplicationId: "placeholder",
      algoliaApiKey: "placeholder",
    }
  const acm = new Search(container, options)
 </script>
```

## Documentation

The contatiner determins where the search field will be placed. Provide a id (#placeholder) or class (.placeholder). 

### Options

| Property | required | explained |
| -------- | ------- | --------- |
| `customerCollection`    | yes  | the exact name of the Algolia collection |
| `customerLanguage`    | no  | language of logged in user (optional) |
| `customerId`    | no  | logged in user identification (optional) |
| `algoliaApplicationId`    | yes | Algolia unique application identifier [link](https://www.algolia.com/account/api-keys/all) |  
| `algoliaApiKey`    | yes  | Algolia Search API Key [link](https://www.algolia.com/account/api-keys/all) |  


### Author
- [Michiel](https://github.com/scienced)

