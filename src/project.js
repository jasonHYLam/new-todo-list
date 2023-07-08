import { pubSub } from "./pubsub";

export function project() {

    let projectArray = [];

    const pushToArray = (project) => {
        projectArray.push(project)
    }

    const getArray = () => {projectArray};

    const displayArray = () => {
        console.log(projectArray);
    }

    const promptProjectToAdd = () => {
        prompt(`choose a project! ${getArray()}`);
    }

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            pushToArray(this);
        }
        // add todo to project; get todo array, select todo from array. based on index? data attribute?
        // delete todo from project; based on index/data attr?; should not delete todo in all todos, just the one in todoArray
        // change todo; based on index/data attr?
        // change name?
    }

    let testProject = new Project('testProject');
    displayArray();

    // subscribe to when todo is added

    pubSub.subscribe('todoAdded',() => {
        promptProjectToAdd();

    });

    //delete project;  
    // create project

}
