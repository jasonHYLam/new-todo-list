import { pubSub } from "./pubsub";
import {format} from 'date-fns';

//may have to encapsulate all of this into a function

function todo() {
    // 

    localStorage.clear();

    // pubsub SUBSCRIBE
    pubSub.subscribe('todoFormSubmitted', (args) => {//probably could destructure this tbh
        const newTodo = new Todo(args[0], args[1], args[2], args[3])

        // in fact, what i think needs to happen is to publish the todo to an event, and project will subscribe to put that in todoarray.
        // and then that will publish to display.
        // NEXT, IMPLEMENT CHANGING TODOS; CHANGE PROPERTY, DELETE
    })

    let todoCounter = 0;

    const incrementCounter = () => {
        todoCounter++
    }


    class Todo {
        constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.number = todoCounter;
        incrementCounter();

        // may have to move this elsewhere, but when new todo is created, append it to a project todoArray
        pubSub.publish('sendTodoToProjectTodoArray', this)
        pushToLocalStorage();
        console.log('todoCounter updated!');
        console.log(localStorage.todoCounter);
        console.log(todoCounter);
        }

        setProp(prop, value) {
            this[prop] = value;
        } 
    }
    const pushToLocalStorage = () => {
        localStorage.todoCounter = JSON.stringify(todoCounter);
    }

    const pageLoad = () => {
        const localStorageLength = 0;
        pubSub.publish('getLocalStorageLength', localStorageLength);

        if (localStorageLength != 0) {pubSub.publish('getTodoCounterFromStorage', todoCounter)};
        // if (localStorage.todoCounter == null) {} 
        // else {
        //     todoCounter = JSON.parse(localStorage.todoCounter);
        // }
    }
    console.log(localStorage);
    console.log('todo counter before page load');
    // console.log(localStorage.todoCounter);
    // console.log(todoCounter);
    pageLoad();
    // localStorage.clear();
    console.log('todo counter on page load');
    // console.log(localStorage.todoCounter);
    // console.log(todoCounter);
}

export {todo};