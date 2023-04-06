##  A simple frontend middleware for Algolia & Colect
Integrate Algolia search functionality in the Colect.io brand portal frontend. 

## Features

- Search modal with filtering and autocomplete suggestions
- Overrides excisting search container
- Checks if Algolia index is available before injecting itself
- Standalone JS library
- Shadow Dom to isolate itself from existing html/css/js
- Custom styling posible 

## Demo

You can play with `algolia-Colect-frondend-middleware-js` at [netlify.app](https://algolia-poc.netlify.app/) 

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

## CDN

```html
<!-- jsDelivr  -->
 <script src="https://cdn.jsdelivr.net/gh/scienced/acm/dist/algolia_colect_middleware.umd.js"></script> -->

<!-- Usage -->
 <script >
     const container = document.querySelector('.a4f-searchquery-container')
     const options = {
      customerCollection: "indexName",
      customerLanguage: "EN",
      customerId: "434783",
      algoliaApplicationId: "E8HZJDQU",
      algoliaApiKey: "2eab4c570c21e4ef676760e93c7483c45a",
    }
  const acm = new Search(container, options)
 </script>
```

## Documentation

### Options

| Property | required    |
| -------- | ------- |
| `customerCollection`    | yes  |
| `customerLanguage`    | no  |
| `customerId`    | no  |
| `algoliaApplicationId`    | no  |
| `algoliaApiKey`    | yes  |


### Author
- [Michiel](https://github.com/scienced)

