import { pubSub } from "./pubsub";

//may have to encapsulate all of this into a function

function todo() {

    let todoArray = [];

    const pushToArray = (todo) => {
        todoArray.push(todo);
    }

    const displayArray = () => {
        console.log(todoArray);
    }


    class Todo {
        constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        // when todo is created, push to todoarray
        pushToArray(this);
        // when todo is created, publish the event, which triggers callback to add to project
        pubSub.publish('todoAdded', this)//not sure if this haha works 
        }

        setProp(prop, value) {
            this[prop] = value;
        } 
    }

    let test = new Todo(
        'let',
        'let us',
        'now',
        'urgent',
        );
        
    // displayArray();
}

export {todo};