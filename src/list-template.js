function template(food) { 
    return /*html*/`
    <li>
        <h2>${food.title}</h2>
        <input type="checkbox" value="${food.value}">
    </li>
`;
}

export default template;