import { pubSub } from "./pubsub";

export function display() {

    const todoContainer = document.querySelector("#todoContainer");

    const createTodoDOM = (elType, value) => {
        const todoDOM = document.createElement('div');
        const todoProp = document.createElement(elType);
        todoProp.textContent = value;
        todoDOM.appendChild(todoProp);
        todoContainer.appendChild(todoDOM);
    }

    // when new todo is created, display todo
    pubSub.subscribe('newTodoCreated', (todo) => {
        createTodoDOM('span', todo.title)
        createTodoDOM('span', todo.description)
        createTodoDOM('span', todo.dueDate)
        createTodoDOM('span', todo.priority)
    })
    


    const projectSelect = document.querySelector("#projectSelect");
    
    const createProjectOption = (project) => {
        const option = document.createElement('option');
        option.textContent= project.name;
        console.log(`project name: ${project.name}`)
        projectSelect.appendChild(option);

    }
    const createAllOptions = (projectArray) => {
        projectArray.textContent = '';
        projectArray.forEach(createProjectOption)
    }


    // when creating new project, display all projects
    pubSub.subscribe('projectAdded', createAllOptions);
}