import { setupModal } from './modal.js'

import algoliasearch from 'algoliasearch';
import instantsearch from 'instantsearch.js';
import { dynamicWidgets, panel, menu, searchBox, hits, stats, queryRuleCustomData, refinementList, clearRefinements } from 'instantsearch.js/es/widgets';
import { autocomplete, getAlgoliaResults } from '@algolia/autocomplete-js';
import { createQuerySuggestionsPlugin } from '@algolia/autocomplete-plugin-query-suggestions';
import { createLocalStorageRecentSearchesPlugin } from '@algolia/autocomplete-plugin-recent-searches';
import { history } from 'instantsearch.js/es/lib/routers';
import { connectSearchBox } from 'instantsearch.js/es/connectors';
//import { createAlgoliaInsightsPlugin } from '@algolia/autocomplete-plugin-algolia-insights';
import { createInsightsMiddleware } from 'instantsearch.js/es/middlewares';
import aa from 'search-insights';


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

const insightsMiddleware = createInsightsMiddleware({
  insightsClient: aa,
});

search.use(insightsMiddleware);
aa('setUserToken', options.customerId);


var statie = document.querySelector('#acm_js').shadowRoot.querySelector('#stats')
var banner = document.querySelector('#acm_js').shadowRoot.querySelector('#banner')
var results = document.querySelector('#acm_js').shadowRoot.querySelector('#hits')
var clear = document.querySelector('#acm_js').shadowRoot.querySelector('#clear')


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
            <a href="/webstore/v2/product/${options.customerCollection}/${hit.productID}/${hit.colorCode}" ${bindEvent('click', hit, 'pdp clicked')}>
            <div class="card">

            <img srcset="${hit.image_link}" src="https://colect-uploads.s3.eu-west-1.amazonaws.com/backend/kDhEtBJWgRJJshry.png" class="zoom" style="max-width: 100%; max-height: 300px" onerror="this.onerror = null;this.srcset = this.src;" />

            ${(hit.alt_image === undefined) ? '' : '<img src="' + hit.alt_image + '" class="zoom" style="max-width: 100%; max-height: 300px" /> '}           
           

            ${(hit.sale != '') ? '<span class="btn-text white-txt uppercase space-no-wrap" style="background-color:#FFA500; padding: 0 16px; color: white;">' + hit.sale +'</span>' : ''}
             <div>
             <h1>${hit._highlightResult.title.value}</h1>            
              <p class="description">${hit.productID} - ${hit.colorCode}</p>
              <p class="price">WSP: ${hit.currencyCode} ${hit.wholesalePrice} <br /> RSP: ${hit.currencyCode} ${hit.retailPrice}</p>
            </div>
            </a>
          `,
          empty: `<div>We are sorry but there are no results for your search <strong>"{{ query }}"</strong></div>
          
          `
        },
        }),

  dynamicWidgets({
    container: document.querySelector('#acm_js').shadowRoot.querySelector('#dynamic-widgets'),

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
      panel({ templates: { header: 'Lifecycle' } })(
      refinementList
      )({ container, 
          attribute: 'lifecycle',
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
        container: document.querySelector('#acm_js').shadowRoot.querySelector('#autocomplete'),
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
          document.querySelector(options.container).shadowRoot.querySelector('#acm-modal').style.display = "block";
          //document.querySelector(options.container).shadowRoot.querySelector('#acm-searchfield').value = searchPageState.query;
         // modal.style.display = "block";
        }
      });

}

async function init(options) {
  await setupModal(options)
  console.log('Finished building the search modal, starting up Algolia now');
  setupAcm(options)
}


export class Search {

  constructor(options) {
    indexAvail(options).then((response) => {
      if (response) {
        init(options);    
      }
      else {
        console.log("Index not found on Algolia - search field not overriden")
      }
    });
  }

};

