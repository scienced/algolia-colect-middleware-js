// import './style.css'
//import cssUrl from './style.css'
const cssUrl = new URL('./style.css', import.meta.url).href;

export function setupModal(options) {

  const modalHtml = `
       <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/scienced/algolia-colect-middleware-js@latest/dist/assets/style.css">
      
      <!-- search field -->
      <span class="aa-Form acm-box">
         <div class="aa-InputWrapperPrefix">
            <label class="aa-Label" for="autocomplete-0-input" id="autocomplete-0-label">
               <button class="aa-SubmitButton" type="submit" title="Submit">
                  <svg class="aa-SubmitIcon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                     <path d="M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"> 
                     </path>
                  </svg>
               </button>
            </label>
         </div>
         <div class="aa-InputWrapper">
            <input class="aa-Input acm-searchquery" aria-autocomplete="both" aria-labelledby="autocomplete-0-label" id="acm-searchfield" autocomplete="off" autocorrect="off" autocapitalize="off" enterkeyhint="search" spellcheck="false" placeholder="Search for products" maxlength="512" type="search">
         </div>
      </span>

      <!-- The Modal -->
      <div id="acm-modal" class="modal" style="display:none;">
        <!-- Modal content -->
        <div class="modal-content">
          <div style="display: flex; justify-content: flex-end">
            <div id="acm-close">&#x2715 </div>
          </div>
          <div id="searchbox"></div>
          <br>
          <div id="autocomplete" style="    max-width: 650px;
          margin: auto; margin-bottom: 1rem;"></div>
          <br>
          <div id="autocomplete2" style="    max-width: 650px;
          margin: auto; margin-bottom: 1rem;"></div>
          <div class="with-sidebar">
            <div class="hide-when-no-result">
              <!-- sidebar -->
              <div id="stats"></div>
              <div id="clear"></div>


              <div id="dynamic-widgets" style="margin-top: 15px;"></div>
              
            </div>
            <div>
              <!-- non-sidebar -->
              <div id="banner"></div>
              <div id="hits"></div>
            </div>
          </div>
        </div>
      </div>
      `;
  // searchFieldId.insertAdjacentHTML("beforeend", modalHtml);

  var div2 = document.querySelector(options.container);
  div2.outerHTML = `
       <div id="acm_js"></div>
       `;

  var div = document.querySelector("#acm_js");
      
  var shadowRoot = div.attachShadow({ mode: 'open' });
  shadowRoot.innerHTML = modalHtml;

  //document.querySelector('.a4f-searchquery-container').innerHTML = modalHtml

  // Get the modal
  var modal = shadowRoot.getElementById('acm-modal');

  // input field
  var input = shadowRoot.getElementById('acm-searchfield');
  input.onfocus = function () {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  };

  // Get the <span> element that closes the modal
  var span = shadowRoot.getElementById('acm-close');
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = 'none';
    document.body.style.overflow = 'scroll';
    document.getElementsByTagName('html')[0].style.overflow = 'scroll';
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}
