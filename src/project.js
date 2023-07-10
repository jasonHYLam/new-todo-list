import { pubSub } from "./pubsub";

export function project() {
    let projectArray = [];


    let matchingProject = {};
    // subscribe to when todo is added
    pubSub.subscribe('getProject',(projectMatch) => {//dunno what to call projectMatch; the thing that i pass to find the correct project
        console.log('lets see if this works')
        projectArray.forEach((project) => {

            console.log(project)
            console.log(project.todoArray)
        })
        const selectedProject = projectArray.find((project) => {return project.name == projectMatch})//also, may need to use data attribute, rather than name. or use form vaolidation to not use same name

        console.log('selected project todo array')

        console.log(selectedProject)
        console.log(selectedProject.todoArray)
        setMatchingProject(selectedProject);
        // oh boy what do i do here, because the function i want to call has two arguments that come from different places...
        // need a todo, should i just send it here first
        // and then put it in addTodoToProjectArray


        // deal with this later
        // pubSub to display the todos; send to display.js
        // pubSub.publish("displaySelectedProjectElements", selectedProject);
        console.log('x')
        console.log(matchingProject);
        console.log('matching project todo array');
        console.log(matchingProject.todoArray)

    });

    //add todo to project todoArray
    pubSub.subscribe('sendTodoToProjectTodoArray', (todo) => {
        console.log('y')
        console.log(matchingProject);
        // matchingProject.addToDo(todo)
        // console.log(matchingProject);
        addTodoToProjectArray(matchingProject, todo)
        console.log(matchingProject);
    });

    // subscribe to when projectform is submitted
    pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 

        // when a new project is created
        pubSub.publish('projectAdded', projectArray);
    })



    const setMatchingProject = (project) => {
        matchingProject = project;
    }
    const addTodoToProjectArray = (project, todo) => {
        project.todoArray.push(todo)
    }

    const increaseProjects = (project) => {
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
            increaseProjects(this);
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
        pubSub.publish('loadPage', projectArray)
    }



    // create new project on first load

    pageLoad();
}


