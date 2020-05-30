"use strict";

const h1 = document.querySelectorAll('p');

console.log(h1);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    // script.async = false;
    document.body.append(script);
}

loadScript('test.js');
loadScript('some.js');