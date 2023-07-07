class Todo {
    constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    }

    setProp(prop, value) {
        this[prop] = value;
    } 
}

const todoTest = () => {
    let test = new Todo(
        'let',
        'let us',
        'now',
        'urgent',
         )
    console.log(
        test
    // test.getProp(test.titleProp)
    )
    
}

export {todoTest};