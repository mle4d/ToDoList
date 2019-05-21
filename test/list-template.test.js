import template from '../src/list-template.js';
const test = QUnit.test;

test('list template test', assert => {
    
    //const list = {
       // dang I'm not sure what to out here
        
    };
    const expected = /*html*/`
    <li><input type="checkbox" value="Chikn">Chik'n</li>
`;


    const html = template(list);
    
    assert.htmlEqual(html, expected);

});