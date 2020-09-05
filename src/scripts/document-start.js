import {
    injectRootElementPadding,
    generateMountingDiv,
} from '../utils/injectRootPadding';

// Inject the amount of padding needed to display the Vue app into the left side of the page
injectRootElementPadding();

// Create the div needed to hold the vue app and append it to the html document
generateMountingDiv();
