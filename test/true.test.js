const test = QUnit.test;
QUnit.module('checked true');

function taskCompleted(todo) {
    return /*html*/ `
        <li>
            <input type="checkbox" type="checkbox" checked>${todo.task}
        </li>
    `;
}

test('list item checked equals true', (assert) => {
    // Arrange
    const todo = {
        task: 'Gravy',
        completed: true
    };

    const expected = /*html*/ `
        <li>
            <input type="checkbox" type="checkbox" checked>Gravy
        </li>
    `;

    // Act 
    const html = taskCompleted(todo);

    // Assert
    assert.htmlEqual(html, expected);
});