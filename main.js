/*
    Hide Placeholder on Input Focus
*/

var input = document.getElementById('input');

// on click in input remove placeholder
input.onfocus = function () {

    'use strict';

    // store Placeholder Attribute in Backup Attribute
    this.setAttribute('data-place', this.getAttribute('placeholder'));

    // Empty Placeholder Attribute from data
    this.setAttribute('placeholder', '');
};

// on click out input return placeholder
input.onblur = function () {

    'use strict';

    // Get Placeholder Attr From Backup Attribute
    this.setAttribute('placeholder', this.getAttribute('data-place'));

    // Empty Backup Attribute
    this.setAttribute('data-place', '');
    
};


