import { pubSub } from "./pubsub";

export function display() {
    
    // display project array on first load
    pubSub.subscribe('loadPage', displayAllProjectOptions)

    // when new todo is created, display all todos
    pubSub.subscribe('newTodoCreated', displayProjectTodos)

    // when creating new project, display all projects
    pubSub.subscribe('projectAdded', displayAllProjectOptions);

    const todoContainer = document.querySelector("#todoContainer");

    const createDOMProp = (elType, value) => {
        const todoDOM = document.createElement('div');
        const todoProp = document.createElement(elType);
        todoProp.textContent = value;
        todoDOM.appendChild(todoProp);
        todoContainer.appendChild(todoDOM);
    }

    const createTodoDOM = (todo) => {
        createDOMProp('span', todo.title);
        createDOMProp('span', todo.description);
        createDOMProp('span', todo.dueDate);
        createDOMProp('span', todo.priority);
        createDOMProp('button', 'Change');
        createDOMProp('button', 'Delete');
    }

    function displayProjectTodos(todoArray) {
        todoArray.forEach((todo) => createTodoDOM(todo));
    }


    const projectSelect = document.querySelector("#projectSelect");
    
    const createProjectOption = (project) => {
        const option = document.createElement('option');
        option.textContent= project.name;
        projectSelect.appendChild(option);
    }

    function displayAllProjectOptions(projectArray) {
        projectArray.forEach(createProjectOption)
    }

}