[![](https://data.jsdelivr.com/v1/package/gh/scienced/algolia-colect-middleware-js/badge)](https://www.jsdelivr.com/package/gh/scienced/algolia-colect-middleware-js)

##  A simple frontend middleware for Algolia & Colect
Integrate Algolia search functionality in the [Colect.io](https://www.colect.io/) brand portal frontend. Script that overwrites current Colect search box with an Algolia connected search experience.

## Features

- Fullscreen search modal with filtering and autocomplete suggestions
- Overrides excisting search container
- Checks if Algolia index is available before injecting itself
- Up to 2 product images supported including "no image" placeholder
- Shadow Root to isolate itself from existing html/css/js
- Custom styling & "no results" html (pending)
- Integrated Algolia insights

## Demo (pending)

You can not yet play with `algolia-colect-middleware-js` in a demo environemnt.

## Installation

```sh
npm install
```
## Run local
Uses Vite for local server & hot reloading

```sh
npm run dev
```

## Build distribution
Uses Vite to build the bundeled JS and CSS files. These will be placed in the dist directory.

```sh
npm run build
```

## CDN (to be finalised)

```html
<!-- Jsdelivr CDN  -->
<script type="module" crossorigin src="https://jsdelivr.com/gh/scienced/algolia-colect-middleware-js@latest/dist/assets/index.js"></script>
<link rel="stylesheet" href="https://jsdelivr.com/gh/scienced/algolia-colect-middleware-js@latest/dist/assets/index.css">

<!-- Usage -->
<script>
         var options = {
          customerCollection: `${activeCollection.collectionId}`,
          customerLanguage: "[[session:language]]",
          customerId: "[[customer:customerNo]]",
          algoliaApplicationId: "XXXXXXXX",
          algoliaApiKey: "xxxxxxxxxxxxxxxxxxxx",
          container: ".search-button"
         }
         window.options = options;
      </script>
```

## Documentation

### Options

| Property | required | explained |
| -------- | ------- | --------- |
| `customerCollection`    | yes  | The exact name of the Algolia index |
| `customerLanguage`    | no  | Language of logged in user, currently not used. |
| `customerId`    | no  | Logged in user identification, for |
| `algoliaApplicationId`    | yes | Algolia unique application identifier, can be found [here](https://www.algolia.com/account/api-keys/all) |  
| `algoliaApiKey`    | yes  | Algolia Search API Key, can be found [here](https://www.algolia.com/account/api-keys/all) |  
| `container`    | yes  | The contatiner determins where the search field will be placed. By default in Colect: `.search-button`. Can also be an ID like `#search-bar` | 


### Author
- [Michiel](https://github.com/scienced)

