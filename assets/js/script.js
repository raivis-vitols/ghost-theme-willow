/*
 | -----------------------------------------------------------------------------
 | Functionality for off-canvas menu / sidebar visibility
 | -----------------------------------------------------------------------------
*/

/*jslint browser:true*/

(function (document) {
    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var menu = document.getElementById('mobile-menu'),
            wrapper = document.getElementById('wrapper'),
            content = document.getElementById('content'),
            menuVisibilityData = 'data-menu-visible';

        /*
         | ---------------------------------------------------------------------
         | Click on content element results in menu getting closed
         | ---------------------------------------------------------------------
         */
        content.addEventListener('click', function (event) {
            if (wrapper.getAttribute(menuVisibilityData)) {
                wrapper.removeAttribute(menuVisibilityData);

                event.preventDefault();
                event.stopPropagation();
            }
        });

        /*
         | ---------------------------------------------------------------------
         | Click on menu element results in menu getting opened
         | ---------------------------------------------------------------------
         */
        menu.addEventListener('click', function (event) {
            if (!wrapper.getAttribute(menuVisibilityData)) {
                wrapper.setAttribute(menuVisibilityData, '1');
            } else {
                wrapper.removeAttribute(menuVisibilityData);
            }

            event.preventDefault();
            event.stopPropagation();
        });
    });
}(document));