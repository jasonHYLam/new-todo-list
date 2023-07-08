import { pubSub } from "./pubsub";

export function project() {

    let projectArray = [];

    const pushToArray = (project) => {
        projectArray.push(project)
    }

    const displayArray = () => {
        console.log(projectArray);
    }

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            pushToArray(this);
        }
        // add todo to project; get todo array, select todo from array. based on index? data attribute?
        addTodo(todo) {
            this.todoArray.push(todo);
        }


        // delete todo from project; based on index/data attr?; should not delete todo in all todos, just the one in todoArray
        // change todo; based on index/data attr?
        // change name?
    }

    let testProject = new Project('testProject');
    displayArray();


    pubSub.subscribe('addTodo', )

    //delete project;  
    // create project

}
