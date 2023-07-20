import { pubSub } from "./pubsub";

export function project() {

    // localStorage.clear();
    let projectCounter = 0;

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            this.number = projectCounter;
            increaseProjects(this);
            incrementCounter();
        }
    }

    const incrementCounter = () => {
        projectCounter++
    }

    let projectArray = [];
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
        addTodoToProjectArray(matchingProject, todo)
        // pubSub to display the todos; send to display.js
        pubSub.publish('displaySelectedProject', matchingProject)
        // when making anychange, upload to local storage
        pushToLocalStorage();
    });

    // subscribe to when projectform is submitted
    pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        setMatchingProject(newProject)

        // when a new project is created
        pubSub.publish('projectAdded', projectArray); //needed to display all project options
        pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
        pushToLocalStorage();
    })

    pubSub.subscribe('getProjectToDelete', (projectIndex) => {
        projectArray.forEach(item => console.log(item))
        deleteElement(projectArray, projectIndex);
        projectArray.forEach(item => console.log(item))
        pubSub.publish('projectDeleted', projectArray); //reset project options

        // if projectIndex == matching project, then clear everything
        if (projectIndex == matchingProject.number) {
            pubSub.publish('clearDeletedProjectContent')
        } else {
            pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
        }
        pushToLocalStorage();
    })

    pubSub.subscribe('deleteTodo', (todoIndex) => {
        // modifies in place, mutating the original array. this is what we want
        matchingProject.todoArray.forEach((todo) => {
            console.log(todo.number);
        })
        deleteElement(matchingProject.todoArray, todoIndex)
        // now display again
        pubSub.publish('displaySelectedProject', matchingProject)
        pushToLocalStorage();
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
    }
    const addTodoToProjectArray = (project, todo) => {
        project.todoArray.push(todo)
    }

    const deleteElement = (array, index) => {
        array.splice(
            array.findIndex((item) => item.number == index),1)
    }

    const increaseProjects = (project) => {
        projectArray.push(project)
    }

    // when making any change to project, assign project Array to local Storage
    const pushToLocalStorage = () => {
        localStorage.projectArray = JSON.stringify(projectArray);
        localStorage.projectCounter = JSON.stringify(projectCounter);
        localStorage.matchingProject = JSON.stringify(matchingProject);
    }

    const pageLoad1 = () => {
        console.log(localStorage);
        //clear storage
        // localStorage.clear();
        if (localStorage.projectArray == null) {
            let testProject = new Project('My First Project!');
            setMatchingProject(testProject);
            // pubSub.publish('loadInitialOptions', projectArray);
            // pubSub.publish('loadInitialProject', matchingProject);
        } else {
            projectArray = JSON.parse(localStorage.projectArray);
            projectCounter = JSON.parse(localStorage.projectCounter);
            matchingProject = JSON.parse(localStorage.matchingProject);
            // pubSub.publish('loadInitialOptions', projectArray);
        }
            pubSub.publish('loadInitialOptions', projectArray);
            pubSub.publish('loadInitialProject', matchingProject);

    }
    // create new project on first load
    pageLoad1();
    console.log('matchingproject');
    console.log(localStorage);

    console.log(localStorage.projectArray);
    console.log(localStorage.matchingProject);
    console.log(matchingProject);
    console.log(projectCounter);

    console.log('does this take place');
}


