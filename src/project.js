import { pubSub } from "./pubsub";

export function project() {
    let projectArray = [];

    let matchingProject = {};
    //getProject and sendTodoToProjectTodoArray occur consecutively
    // get project from todo form; first get matching project, then wait for todo to be added to the project
    pubSub.subscribe('getProjectFromTodoForm',(projectMatch) => {//dunno what to call projectMatch; the thing that i pass to find the correct project
        const selectedProject = projectArray.find((project) => {return project.name == projectMatch})//also, may need to use data attribute, rather than name. or use form vaolidation to not use same name
        setMatchingProject(selectedProject);
    });

    //get project from project select; immediately publish to display array
    pubSub.subscribe('getProjectFromProjectSelect',(projectMatch) => {
        const selectedProject = projectArray.find((project) => {return project.name == projectMatch})
        setMatchingProject(selectedProject);
        pubSub.publish('displaySelectedProject', matchingProject)
    });

    //add todo to project todoArray
    pubSub.subscribe('sendTodoToProjectTodoArray', (todo) => {
        addTodoToProjectArray(matchingProject, todo)
        // pubSub to display the todos; send to display.js
        pubSub.publish('displaySelectedProject', matchingProject)
    });

    // subscribe to when projectform is submitted
    pubSub.subscribe('projectFormSubmitted', (name) => {
        const newProject = new Project(name); 
        setMatchingProject(newProject)

        // when a new project is created
        pubSub.publish('projectAdded', projectArray); //needed to display all project options
        pubSub.publish('displaySelectedProject', matchingProject) //needed to set header and todo to particular project
    })

    pubSub.subscribe('deleteTodo', (todoIndex) => {
        // modifies in place, mutating the original array. this is what we want
        matchingProject.todoArray.forEach((todo) => {
            console.log(todo.todoNumber);
        })
        matchingProject.todoArray.splice(
            matchingProject.todoArray.findIndex((item) => item.todoNumber == todoIndex), 1)
        // now display again
        console.log(todoIndex)
        pubSub.publish('displaySelectedProject', matchingProject)
    })

    // modify todo when the form for it is submitted
    pubSub.subscribe('submitChangedTodo', ([todoIndex, {newTitle, newDescription, newPriority}]) => {
        let todoToChange = matchingProject.todoArray.find((todo) => {return todo.todoNumber == todoIndex});
        console.log(todoToChange);
        todoToChange.setProp('title', newTitle);
        todoToChange.setProp('description', newDescription);
        todoToChange.setProp('priority', newPriority);

        pubSub.publish('displaySelectedProject', matchingProject)
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

    class Project {
        constructor(name) {
            this.todoArray = [];
            this.name = name;
            increaseProjects(this);
        }
    }

    // this should create a project and add it to projectArray. is this clean code?

    const pageLoad = () => {
        let testProject = new Project('My First Project');
        // added this below
        setMatchingProject(testProject);
        pubSub.publish('loadInitialOptions', projectArray);

        // added this below
        pubSub.publish('loadInitialProject', matchingProject);
    }

    // create new project on first load
    pageLoad();
}


