import { pubSub } from "./pubsub";

export function project() {

    let projectArray = [];

    const pushToArray = (project) => {
        projectArray.push(project)
    }

    const getArray = () => projectArray;

    const displayArray = () => {
        console.log(projectArray);
    }

    const promptProjectToAdd = () => {
        return prompt(`choose a project! ${getArray().map((p, index) => [p.name, index])}`);
    }

    const selectProjectWithIndex = (index) => {
        return getArray()[index];
    }

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            pushToArray(this);
        }

        addToDo(todo) {
            this.todoArray.push(todo)
        }
        // add todo to project; get todo array, select todo from array. based on index? data attribute?
        // delete todo from project; based on index/data attr?; should not delete todo in all todos, just the one in todoArray
        // change todo; based on index/data attr?
        // change name?
    }


    // this should create a project and add it to projectArray. is this clean code?
    let testProject = new Project('testProject');

    // subscribe to when todo is added
    pubSub.subscribe('todoAdded',(todo) => {
        const index = promptProjectToAdd();
        console.log(index);

        console.log(projectArray[index].todoArray);
        selectProjectWithIndex(index).addToDo(todo);//not sure if this works
        console.log(projectArray[index].todoArray);
    });



    //delete project;  
    // create project

}
