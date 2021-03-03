import jQuery from "jquery";
import * as $ from 'jquery';
window.$ = window.jQuery = jQuery;

function fonctionJS(nomJoueur){

      $('#rechercheAutoComplete').autocomplete({
              source : nomJoueur
      });
}
export default fonctionJS;
