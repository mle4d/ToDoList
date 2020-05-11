import template from '../src/template-header.js';
const test = QUnit.test;
QUnit.module('header template');

test('header template', (assert) => {

    const expected = /*html*/ `
    <header>
        <h1>Grocery List</h1>
    </header>
`;

    // Act
    const html = template();

    
    assert.htmlEqual(html, expected);

});
