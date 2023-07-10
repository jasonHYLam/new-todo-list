import { pubSub } from "./pubsub";

// should handle DOM related functionality. Such as creating, changing and deleting DOM elements.
export function display() {
    
    // display project array on first load
    pubSub.subscribe('loadPage', displayAllProjectOptions)

    // when new todo is created, display all todos
    pubSub.subscribe('newTodoCreated', displayProjectTodos)

    // when creating new project, display all projects
    pubSub.subscribe('projectAdded', displayAllProjectOptions);

    pubSub.subscribe('displaySelectedProject', (project) => {
        // console.log('project')
        // console.log(project)
        // console.log('project array')
        // console.log(project.todoArray)
        changeHeader(project.name);
        displayProjectTodos(project.todoArray);
    })



    const todoContainer = document.querySelector("#todoContainer");

    const createDOMProp = (elType, value, className) => {
        const todoProp = document.createElement(elType);
        todoProp.textContent = value;
        todoProp.classList.add(className);
        return todoProp;
    }

    const createTodoDOM = (todo) => {
        const todoDOM = document.createElement('div');
        // console.log(todo);
        // console.log(todo.todoNumber);
        todoDOM.setAttribute('data-index', todo.todoNumber);
        todoDOM.appendChild(createDOMProp('span', todo.title, 'title'));
        todoDOM.appendChild(createDOMProp('span', todo.description, 'description'));
        todoDOM.appendChild(createDOMProp('span', todo.dueDate, 'dueDate'));
        todoDOM.appendChild(createDOMProp('span', todo.priority, 'priority'));
        todoDOM.appendChild(createDOMProp('button', 'Change', 'change'));
        todoDOM.appendChild(createDOMProp('button', 'Delete', 'delete'));
        todoContainer.appendChild(todoDOM);
    }

    const resetTodoContainer = () => {
        todoContainer.textContent = "";
    }

    function displayProjectTodos(todoArray) {
        resetTodoContainer();
        todoArray.forEach((todo) => createTodoDOM(todo));
    }


    const projectSelect = document.querySelector("#projectSelect");
    

    // can only assign one instance of a Node, so need to create multiple instances
    const createOptionElement = (project) => {
        const option = document.createElement('option');
        option.textContent = project.name;
        return option;
    }

    const resetOptionElements = () => {
        const projectSelectInTodoForm = document.querySelector("#projectForTodo");
        projectSelectInTodoForm.textContent = "";
        projectSelect.textContent = "";

    }

    const assignProjectOption = (project) => {
        // may need to separate project select and todo form project select...
        const projectSelectInTodoForm = document.querySelector("#projectForTodo");
        projectSelectInTodoForm.appendChild(createOptionElement(project));
        projectSelect.appendChild(createOptionElement(project));
    }


    function displayAllProjectOptions(projectArray) {
        resetOptionElements();
        projectArray.forEach((project) => assignProjectOption(project))
    }

    function getSelectedProject() {
        return projectSelect.value

    }

    // when clicking on project selects
    projectSelect.addEventListener("change", ()=> {
        // send this code to project.js
        // IM NOT SURE THIS WORKS, getProject IS USED BY FORMHANDLER AS WELL
        pubSub.publish("getProjectFromProjectSelect", getSelectedProject())
    })
    

    const header = document.querySelector("#header");
    const changeHeader = (projectName) => {
        header.textContent = "";
        header.textContent = projectName;
    }

    // delete todo DOM
    todoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains('delete')) {
            // console.log(e.target.parentNode.getAttribute('data-index'));
            // publish the data index of the todo DOM, to project
            pubSub.publish('getTodoToModify', e.target.parentNode.getAttribute('data-index'));//continue working on this
        }
    })

}