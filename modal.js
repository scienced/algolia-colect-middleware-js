// import './style.css'
export function setupModal(container, searchFieldId) {
  //build modal in dom
  const modalHtml = `
      <link rel="stylesheet" type="text/css" href="/style.css">
      
      <!-- search field -->
      <input type="text" name="q" value="" class="acm-searchquery" id="acm-searchfield" placeholder="Search for products" autocomplete="off">
      <!-- The Modal -->
      <div id="acm-modal" class="modal">
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

  var div = document.querySelector('.a4f-searchquery-container');
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
