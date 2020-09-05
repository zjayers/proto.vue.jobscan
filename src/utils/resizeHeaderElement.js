import { APP_WIDTH } from '@/constants/constants';

/**
 * Check for any <header> tags in the html document and resize them as well
 * Most <header> tags are set to a 'fixed' style, so resizing the html body
 * does not affect the <header> tags
 */
export function resizeHeaderElement() {
    // Get the header tag from the html document
    const header = document.querySelector('header');

    // If a header was found => continue
    if (header) {
        // Need to check if the selected header is the parent-most element of the <header> tag.
        // Loop upwards through the DOM, starting with the <header> tag, until the nodes parent is the <body> tag.
        let headerContainer = header;

        while (headerContainer.parentNode !== document.body) {
            headerContainer = headerContainer.parentNode;
        }

        // Set the left margin of the header container to allow mounting of the Vue application
        headerContainer.style.marginLeft = APP_WIDTH + 'px';

        // To avoid overflow on the right side of the page, resize the <header>
        header.style.width = header.clientWidth - APP_WIDTH + 'px';
    }
}
