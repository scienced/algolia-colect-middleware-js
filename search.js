import { setupModal } from './modal.js'

import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { dynamicWidgets, panel, menu, searchBox, hits, stats, queryRuleCustomData, refinementList, clearRefinements } from 'instantsearch.js/es/widgets';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { history } from 'instantsearch.js/es/lib/routers';
import { connectSearchBox } from 'instantsearch.js/es/connectors';

//Check Index availability, retrurn true if index is available, false otherwise
async function indexAvail(options){
const searchClient = await algoliasearch(options.algoliaApplicationId, options.algoliaApiKey);
const index =  await searchClient.initIndex(options.customerCollection);
const chilDaddy = await index.exists()
return chilDaddy
}


//initate Algolia library and check if index if available
function setupAcm(options, container){

//setup algolia
const searchClient = algoliasearch(options.algoliaApplicationId, options.algoliaApiKey);
const instantSearchRouter = history();
const index = searchClient.initIndex(options.customerCollection);

const search = instantsearch({
  indexName: options.customerCollection,
  searchClient,
  routing: true,
});

var statie = document.querySelector('.a4f-searchquery-container').shadowRoot.querySelector('#stats')
var banner = document.querySelector('.a4f-searchquery-container').shadowRoot.querySelector('#banner')
var results = document.querySelector('.a4f-searchquery-container').shadowRoot.querySelector('#hits')
var clear = document.querySelector('.a4f-searchquery-container').shadowRoot.querySelector('#clear')


const virtualSearchBox = connectSearchBox(() => {});

      search.addWidgets([
        virtualSearchBox({}),


  stats({
          container: statie,
        }),

   clearRefinements({
          container: clear,
        }),

  queryRuleCustomData({
          container: banner,
          templates: {
            default: `
              {{#items}}
                <a href="{{link}}">
                <img src={{banner_image}} />
                </a>
              {{/items}}
            `,
          },
        }),

  hits({
          container: results,
          templates: {
          item: (hit, bindEvent) =>  `
            <a href="${hit.link}" ${bindEvent('click', hit, 'pdp clicked')}>
            <div class="card">
            
            
            ${hit.image_link ? '<img class="zoom" style="max-width: 100%; max-height: 300px" src='+ hit.image_link +'>' : ''}
            ${hit.alt_image ? '<img class="zoom" style="max-width: 100%; max-height: 300px" src='+ hit.alt_image +'>' : ''}

            ${(hit.productGroupCode ==='Outrunning') ? '<span class="btn-text white-txt uppercase space-no-wrap" style="background-color:#FFA500; padding: 0 16px; color: white;">' + hit.productGroupCode +'</span>' : ''}
            ${(hit.productGroupCode ==='Pre-Sale') ? '<span class="btn-text white-txt uppercase space-no-wrap" style="background-color:#ff7a7a; padding: 0 16px; color: white;">' + hit.productGroupCode +'</span>' : ''}
            ${(hit.productGroupCode ==='On-Stock') ? '' : ''}
          

             <div>
             <h1>${hit._highlightResult.title.value}</h1>            
              <p class="price">${hit.productID} - ${hit.colorCode}</p>
              <p class="price">WSP: ${hit.currencyCode} ${hit.wholesalePrice} - RSP: ${hit.currencyCode} ${hit.retailPrice}</p>
            </div>
            </a>
          `,
          empty: `<div>We are sorry but there are no results for your search <strong>"{{ query }}"</strong></div>
          <br>
          <div class="js-no-result-search-suggestion">
            <div class="offset-1 flex--col">
                <div class="flex--col ">
                    <h2>Suggestions</h2>
                </div>
                <button class="flex flex--coll">
                    <a href="?PL_TriumphTEST%5Bquery%5D=amourette">Amourette</a>
                </button>
                 <button class="flex flex--coll">
                    <a href="?PL_TriumphTEST%5Bquery%5D=signature%20sheer">Signature Sheer</a>
                </button>
                 <button class="flex flex--coll">
                    <a href="?PL_TriumphTEST%5Bquery%5D=lift%20smart">Lift Smart</a>
                </button>
                <br>
                <a href="#">
                <img style="margin-top:30px;" src=https://images.cmft.io/1115457393585688576/1575458344662081536/1575458344683053056/Frame_1518.jpg />
                </a>     
            </div>
        </div>
          `
        },
        }),

  dynamicWidgets({
    container: document.querySelector('.a4f-searchquery-container').shadowRoot.querySelector('#dynamic-widgets'),

    fallbackWidget: ({ container, attribute }) =>
    panel({ templates: { header: attribute } })(
      refinementList
    )({ container, attribute }),

    widgets: [
    container =>
      panel({ templates: { header: 'Sub-Brand' } })(
      refinementList
      )({ container, 
          attribute: 'collectionId',
        }),
      container =>
      panel({ templates: { header: 'Series' } })(
      refinementList
      )({ container, 
          attribute: 'userDefinedField2',
          showMore: true,
          showMoreLimit: 150,
        }),
      container =>
      panel({ templates: { header: 'Lifecycle' } })(
      refinementList
      )({ container, 
          attribute: 'productGroupCode',
        }),
      container =>
      panel({ templates: { header: 'Segment' } })(
      refinementList
      )({ container, 
          attribute: 'collectionDesc',
        }),
      container =>
      panel({ templates: { header: 'Product Line' } })(
      refinementList
      )({ container, 
          attribute: 'categories',
        }),
      container =>
      panel({ templates: { header: 'Color' } })(
      refinementList
      )({ container, 
          attribute: 'simpleColor',
          limit: 20,
        }),
      container =>
      panel({ templates: { header: 'Sizes' } })(
      refinementList
      )({ container, 
          attribute: 'sizes',
          showMore: true,
          showMoreLimit: 80,
        }),
      container =>
      refinementList({
        container,
          attribute: 'lifecycle',
          cssClasses: {checkbox: 'lala'},
        }),
  ],
  }),      

]);

search.start();



// Set the InstantSearch index UI state from external events.
      function setInstantSearchUiState(indexUiState) {
        search.setUiState(uiState => ({
          ...uiState,
          [options.customerCollection]: {
            ...uiState[options.customerCollection],
            // We reset the page when the search state changes.
            page: 1,
            ...indexUiState,
          },
        }));
      }

      // Return the InstantSearch index UI state.
      function getInstantSearchUiState() {
        const uiState = instantSearchRouter.read();

        return (uiState && uiState[options.customerCollection]) || {};
      }

      const searchPageState = getInstantSearchUiState();

      let skipInstantSearchUiStateUpdate = false;

       const querySuggestionsPlugin = createQuerySuggestionsPlugin({
        searchClient,
        indexName: options.customerCollection+'_query_suggestions',
        getSearchParams({ state }) {
         return { hitsPerPage: state.query ? 5 : 5 };
        },

            });

      const recentSearchesPlugin = createLocalStorageRecentSearchesPlugin({
        key: 'RECENT_SEARCH',
        limit: 5,
      });

      const { setQuery } = autocomplete({
        container: document.querySelector('.a4f-searchquery-container').shadowRoot.querySelector('#autocomplete'),
        placeholder: 'Search for products',

        plugins: [querySuggestionsPlugin, recentSearchesPlugin],
        openOnFocus: true,
        //debug: true,
        detachedMediaQuery: 'none',
        initialState: {
          query: searchPageState.query || '',
        },
        onSubmit({ state }) {
          setInstantSearchUiState({ query: state.query });
        },
        onReset() {
          setInstantSearchUiState({ query: '' });
        },
        onStateChange({ prevState, state }) {

          if (!skipInstantSearchUiStateUpdate && prevState.query !== state.query) {
            setInstantSearchUiState({ query: state.query });
            //clear all refinements when the search query changes
            search.helper.clearRefinements().search();
           // console.log(search.helper.state.query)
          }
          skipInstantSearchUiStateUpdate = false;
        },

      })



      // This keeps Autocomplete aware of state changes coming from routing
      // and updates its query accordingly
      window.addEventListener('popstate', () => {
        skipInstantSearchUiStateUpdate = true;
        setQuery(search.helper?.state.query || '');
      });

      //show modal if url has a search parameter
      document.addEventListener("DOMContentLoaded", function(event) {
        if (searchPageState.query) {
          document.querySelector('.a4f-searchquery-container').shadowRoot.querySelector('#acm-modal').style.display = "block";
          //document.querySelector('.a4f-searchquery-container').shadowRoot.querySelector('#acm-searchfield').value = searchPageState.query;
         // modal.style.display = "block";
        }
      });

}

async function init(container, options) {
  await setupModal('container',container)
  console.log('Finished building the modal, starting up Algolia now');
  setupAcm(options, container)
}


export class Search {

  constructor(container, options) {
    indexAvail(options).then((response) => {
      if (response) {
        init(container, options);    
      }
      else {
        console.log("Index not found on Algolia - search field not overriden")
      }
    });
  }

};

