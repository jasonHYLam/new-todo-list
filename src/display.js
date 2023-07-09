import { pubSub } from "./pubsub";

export function display() {

    // when new todo is created, display all todos
    pubSub.subscribe('newTodoCreated', displayProjectTodos)

    // when creating new project, display all projects
    pubSub.subscribe('projectAdded', displayAllProjectOptions);

    const todoContainer = document.querySelector("#todoContainer");

    const createGenericTodoDOM = (elType, value) => {
        const todoDOM = document.createElement('div');
        const todoProp = document.createElement(elType);
        todoProp.textContent = value;
        todoDOM.appendChild(todoProp);
        todoContainer.appendChild(todoDOM);
    }

    const createTodoDOM = (todo) => {
        createGenericTodoDOM('span', todo.title)
        createGenericTodoDOM('span', todo.description)
        createGenericTodoDOM('span', todo.dueDate)
        createGenericTodoDOM('span', todo.priority)
    }

    function displayProjectTodos(todoArray) {
        todoArray.forEach((todo) => createTodoDOM(todo));
    }


    const projectSelect = document.querySelector("#projectSelect");
    
    const createProjectOption = (project) => {
        const option = document.createElement('option');
        option.textContent= project.name;
        console.log(`project name: ${project.name}`)
        projectSelect.appendChild(option);

    }
    function displayAllProjectOptions(projectArray) {
        projectArray.forEach(createProjectOption)
    }


}