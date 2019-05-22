import template from '../src/list-template.js';
const test = QUnit.test;
QUnit.module('header template');

test('header template', (assert) => {
    // Arrange
    const header = 'Grocery List';

    const expected = /*html*/ `
    <header>
        <h1>Grocery List</h1>
    </header>
`;

    // Act
    const html = template(header);

    
    assert.htmlEqual(html, expected);

});
