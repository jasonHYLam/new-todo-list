import { pubSub } from "./pubsub";

export function project() {

    let projectCounter = 0;

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            this.number = projectCounter;
            increaseProjects(this);
            incrementCounter();
            console.log(this.number);
        }
    }

    const incrementCounter = () => {
        projectCounter++
    }

    let projectArray = [];

    if (localStorage.projectArray) {

    }

    let matchingProject = {};
    //getProject and sendTodoToProjectTodoArray occur consecutively
    // get project from todo form; first get matching project, then wait for todo to be added to the project
    pubSub.subscribe('getProjectFromTodoForm',(projectIndex) => {
        const selectedProject = projectArray.find((project) => {return project.number == projectIndex})
        setMatchingProject(selectedProject);
    });

    //get project from project select; immediately publish to display array
    pubSub.subscribe('getProjectFromProjectSelect',(projectIndex) => {
        const selectedProject = projectArray.find((project) => {return project.number == projectIndex})
        setMatchingProject(selectedProject);
        pubSub.publish('displaySelectedProject', matchingProject)
    });

    //add todo to project todoArray
    pubSub.subscribe('sendTodoToProjectTodoArray', (todo) => {
        console.log(matchingProject);
        addTodoToProjectArray(matchingProject, todo)
        // pubSub to display the todos; send to display.js
        pubSub.publish('displaySelectedProject', matchingProject)
        // when making anychange, upload to local storage
        // pushToLocalStorage();
    });

    // subscribe to when projectform is submitted
    pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        setMatchingProject(newProject)

        // when a new project is created
        pubSub.publish('projectAdded', projectArray); //needed to display all project options
        pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
        // pushToLocalStorage();
    })

    pubSub.subscribe('getProjectToDelete', (projectIndex) => {
        const projectToDelete = projectArray.find((project) => {return project.number == projectIndex})
        projectArray
    })

    pubSub.subscribe('deleteTodo', (todoIndex) => {
        // modifies in place, mutating the original array. this is what we want
        matchingProject.todoArray.forEach((todo) => {
            console.log(todo.number);
        })
        matchingProject.todoArray.splice(
            matchingProject.todoArray.findIndex((item) => item.number == todoIndex), 1)
        // deleteElement(matchingProject.todoArray, todoIndex)
        // now display again
        pubSub.publish('displaySelectedProject', matchingProject)
        // pushToLocalStorage();
    })

    // modify todo when the form for it is submitted
    pubSub.subscribe('submitChangedTodo', ([todoIndex, {newTitle, newDescription, newPriority}]) => {
        let todoToChange = matchingProject.todoArray.find((todo) => {return todo.number == todoIndex});
        console.log(todoToChange);
        todoToChange.setProp('title', newTitle);
        todoToChange.setProp('description', newDescription);
        todoToChange.setProp('priority', newPriority);

        pubSub.publish('displaySelectedProject', matchingProject)
        // pushToLocalStorage();
    })

    const setMatchingProject = (project) => {
        matchingProject = project;
        console.log(project);
        console.log(matchingProject);
    }
    const addTodoToProjectArray = (project, todo) => {
        project.todoArray.push(todo)
    }

    const deleteElement = (array, index) => {
        array.splice(
            array.findIndex((item) => item.number = index),1)
    }


    const increaseProjects = (project) => {
        projectArray.push(project)
    }

    // when making any change to project, assign project Array to local Storage
    const pushToLocalStorage = () => {
        console.log(projectArray)

        localStorage.projectArray = JSON.stringify(projectArray)
        console.log(localStorage.projectArray);
        let test = JSON.parse(localStorage.projectArray);
        console.log(test)
    }

    const pageLoad = () => {
        //clear storage
        localStorage.clear();
        console.log(localStorage.projectArray);
        console.log(localStorage);
        let testProject = new Project('My First Project!');
        // added this below
        setMatchingProject(testProject);
        pubSub.publish('loadInitialOptions', projectArray);

        // added this below
        pubSub.publish('loadInitialProject', matchingProject);
    }

    // create new project on first load
    pageLoad();
}


