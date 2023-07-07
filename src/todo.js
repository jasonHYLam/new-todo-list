const makeTodo = (title, description, dueDate, priority) => {
    let title = title;
    let description = description;
    let dueDate = dueDate;
    let priority = priority;

    const getProp = (prop) => prop;
    const setProp = (prop, newValue) => prop = newValue;

    return {getProp, setProp};
}

const todoTest = () => {
    let test = makeTodo(
        'let',
        'let us',
        'now',
        'urgent',
         )
    console.log(

    test.getProp(title)
    )
    
}

export {todoTest};