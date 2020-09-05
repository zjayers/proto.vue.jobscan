import { APP_SIZER_ID, APP_WIDTH } from '@/constants/constants';

/**
 * Injects (n)px padding into the left side of the root <html> tag to allow
 * empty space to be filled by the Vue app
 */
/**
 * Inject empty space into the left side of the HTML document to allow space
 * for the Vue Application
 */
export function injectRootElementPadding() {
    // Get the root html element of the page
    const rootHTML = document.getElementsByTagName('html')[0];

    // Set a base class on the html element for use by the jscan app
    rootHTML.setAttribute('class', '.' + APP_SIZER_ID);

    // Set the left padding to equal that of the app width
    rootHTML.style.marginLeft = APP_WIDTH + 'px';
}
