import { pubSub } from "./pubsub";

export function project() {

    // subscribe to when todo is added
    pubSub.subscribe('getProject',(projectMatch) => {//dunno what to call projectMatch; the thing that i pass to find the correct project
        const test = projectArray.filter((project) => project.name == projectMatch)
        console.log('test this ')
        console.log(test);

        // pubSub to display the todos
    });

    // subscribe to when projectform is submitted
    pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 

        // when a new project is created
        pubSub.publish('projectAdded', projectArray);
    })



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

    const pageLoad = () => {
        let testProject = new Project('My First Project');
        console.log('do this please')
        pubSub.publish('loadPage', projectArray)
        console.log('project array under')
        console.log(projectArray)
    }



    // create new project on first load

    pageLoad();
}


