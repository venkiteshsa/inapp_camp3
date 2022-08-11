import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDataTable} from '@material/data-table';
import {MDCDialog} from '@material/dialog';
import {MDCSlider} from '@material/slider';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
const dialog = new MDCDialog(document.querySelector('.mdc-dialog'));

const slider = new MDCSlider(document.querySelector('.mdc-slider'));

dialog.listen('MDCDialog:opened', function() {
    // Assuming contentElement references a common parent element with the rest of the page's content
    contentElement.setAttribute('aria-hidden', 'true');
  });
  dialog.listen('MDCDialog:closing', function() {
    contentElement.removeAttribute('aria-hidden');
  });