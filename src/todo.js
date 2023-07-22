import { pubSub } from "./pubsub";
import {format} from 'date-fns';
import localStorageModule from "./localStorage";

//may have to encapsulate all of this into a function

function todo() {
    // 


    // localStorage.clear();
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
        setProp(prop, value) {
            this[prop] = value;
        } 

        constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.number = todoCounter;
        incrementCounter();
        pubSub.publish('sendTodoToProjectTodoArray', this)
        localStorageModule.storeTodoCounter(todoCounter);
        }

        // setProp(prop, value) {
        //     this[prop] = value;
        // } 
    }

    const pageLoad = () => {
        // localStorageModule.resetStorage();
        // console.log(localStorageModule.getLocalStorage());
        if (localStorageModule.isTodoEmpty()) {
            localStorageModule.storeTodoCounter(todoCounter);
        } else {
            todoCounter = localStorageModule.getTodoCounterFromStorage();
            localStorageModule.storeTodoCounter(todoCounter);
        }
    }
    pageLoad();
}

export {todo};