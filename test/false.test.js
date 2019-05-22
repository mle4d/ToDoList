const test = QUnit.test;
QUnit.module('check false');

function taskCompleted(todo) {
    return /*html*/ `
        <li>
            <input type="checkbox" type="checkbox">${todo.task}
        </li>
    `;
}

test('list item checked equals false', (assert) => {
    // Arrange
    const todo = {
        task: 'Gravy',
        completed: false
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox" type="checkbox">Gravy
        </li>
    `;

    // Act 
    const html = taskCompleted(todo);

    // Assert
    assert.htmlEqual(html, expected);
});