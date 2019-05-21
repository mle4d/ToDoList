import template from './pic-template.js';
import htmlToDOM from '../src/html-to-DOM.js';
import images from './images.js';
import templateHeader from './template-header.js';

const food = document.getElementById('foods');
const header = document.getElementById('grocery-list');

images.forEach(foods => {
    const html = template(foods);
    const dom = htmlToDOM(html);
    food.appendChild(dom);

});

const htmlHeader = templateHeader();
const domHeader = htmlToDOM(htmlHeader);
header.appendChild(domHeader);