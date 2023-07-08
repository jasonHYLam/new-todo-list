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

    //delete project;  
    // create project

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            pushToArray(this);
        }

        // USED
        addToDo(todo) {
            this.todoArray.push(todo)
        }
        // NOT USED
        removeToDo(todo) {
            this.todoArray.filter(el => el != todo);
        }

        // NOT USED AND DEVELOP
        changeToDo(todo) {

        }

        // NOT USED AND DEVELOP
        changeName(name) {
            this.name = name;
        }
    }


    // this should create a project and add it to projectArray. is this clean code?
    let testProject = new Project('testProject');

    // subscribe to when todo is added
    pubSub.subscribe('todoAdded',(todo) => {
        // const index = promptProjectToAdd();
        // selectProjectWithIndex(index).addToDo(todo);//not sure if this works
    });

    // CREATE MORE SUBSCRIBES

    // subscribe to when projectform is submitted
    pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        console.log(projectArray);

        // when a new project is created
        // is it wise to put a publish inside a subscribe? i mean, i don't see why not
        pubSub.publish('projectAdded', projectArray);
    })



}


