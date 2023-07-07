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
         );
        
    test.setProp('description', "bad boy");

    console.log(
        test.description
    )
    
}

export {todoTest};