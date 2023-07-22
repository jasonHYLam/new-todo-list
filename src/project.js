import { pubSub } from "./pubsub";
import localStorageModule from "./localStorage";

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
        localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});
    });

    //get project from project select; immediately publish to display array
    pubSub.subscribe('getProjectFromProjectSelect',(projectIndex) => {
        const selectedProject = projectArray.find((project) => {return project.number == projectIndex})
        setMatchingProject(selectedProject);
        pubSub.publish('displaySelectedProject', matchingProject)
        localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});

    });

    //add todo to project todoArray
    pubSub.subscribe('sendTodoToProjectTodoArray', (todo) => {
        console.log(matchingProject)
        console.log(todo)
        addTodoToProjectArray(matchingProject, todo)
        console.log(matchingProject)
        // pubSub to display the todos; send to display.js
        pubSub.publish('displaySelectedProject', matchingProject)
        // when making anychange, upload to local storage
        localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});
    });

    // subscribe to when projectform is submitted
    pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        setMatchingProject(newProject)

        // when a new project is created
        pubSub.publish('projectAdded', projectArray); //needed to display all project options
        pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
        localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});
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
        localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});
    })

    pubSub.subscribe('deleteTodo', (todoIndex) => {
        // modifies in place, mutating the original array. this is what we want
        matchingProject.todoArray.forEach((todo) => {
            console.log(todo.number);
        })
        deleteElement(matchingProject.todoArray, todoIndex)
        // now display again
        pubSub.publish('displaySelectedProject', matchingProject)
        localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});
    })

    // modify todo when the form for it is submitted
    pubSub.subscribe('submitChangedTodo', ([todoIndex, {newTitle, newDescription, newPriority}]) => {
        let todoToChange = matchingProject.todoArray.find((todo) => {return todo.number == todoIndex});
        console.log(todoToChange);
        todoToChange.setProp('title', newTitle);
        todoToChange.setProp('description', newDescription);
        todoToChange.setProp('priority', newPriority);

        pubSub.publish('displaySelectedProject', matchingProject)
        localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});
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


    const pageLoad = () => {
        
        // localStorageModule.resetStorage();
        if (localStorageModule.isProjectEmpty()) {
            let testProject = new Project('My First Project!');
            setMatchingProject(testProject);
            localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});
        } else {
            const {array, counter, match} = localStorageModule.getProjectDetailsFromStorage()
            projectArray = array;
            projectCounter = counter;
            matchingProject = match;
            console.log(projectArray);
            localStorageModule.storeProjectDetails({projectArray, projectCounter, matchingProject});
        }
            pubSub.publish('loadInitialOptions', projectArray);
            pubSub.publish('loadInitialProject', matchingProject);
    }
    // create new project on first load
    pageLoad();
}


