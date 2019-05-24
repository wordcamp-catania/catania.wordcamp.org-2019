import $ from 'jquery';
import { createWapuu } from './wapuu';
import { wapuu as wapuuConfig } from './config';

$(document).ready(function(){
    const wapuu = createWapuu(wapuuConfig.className, wapuuConfig.href);
    const showWapuuIfOnTop = () => {
        const offset = jQuery('header').offset().top + 200;
        const scrollPos = $(window).scrollTop();

        if (scrollPos > offset) {
            wapuu.hide();
        } else {
            wapuu.show();
        }
    };

    // Attach into the page
    wapuu.attachTo(document.body);

    // Then show it (so we can trigger the transition)
    setTimeout(showWapuuIfOnTop, 2000);

    // Show or hide during scrolling
    $(window).on('scroll', showWapuuIfOnTop);
});