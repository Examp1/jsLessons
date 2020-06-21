'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs');
    const modal = require('./modules/modal');
    const timer = require('./modules/timer');
    const card = require('./modules/cards');
    const forms = require('./modules/forms');
    const slider = require('./modules/slider');
    const calc = require('./modules/calc');

    tabs();
    modal();
    timer();
    card();
    forms();
    slider();
    calc();
});