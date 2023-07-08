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

    // pubsub SUBSCRIBE
    pubSub.subscribe('todoFormSubmitted', (...args) => {
        console.log(args);
        console.log(args[0]);
        console.log(args[2]);
        console.log(args[3]);
        // const newTodo = new Todo(args[0], args[1], args[2], args[3])

        // pubSub.publish('newTodoCreated', newTodo)
    })


}

export {todo};