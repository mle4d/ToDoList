function taskCompleted(foods) {
    let checked = '';

    if(task.completed) {
        checked = 'checked';
    }

    return /*html*/`
        <li>
            <input type="checkbox" ${checked}>${foods.task}
        </li>
    `;
}

export default taskCompleted;