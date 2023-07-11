import { pubSub } from "./pubsub";
import { todo } from "./todo";

// should handle DOM related functionality. Such as creating, changing and deleting DOM elements.
export function display() {

    // display project array on first load
    pubSub.subscribe('loadInitialOptions', displayAllProjectOptions);
    pubSub.subscribe('loadInitialProject', (project) => {
        changeHeader(project.name);
        displayProjectTodos(project.todoArray); 
        setProjectSelectOption(project);
    })

    // when new todo is created, display all todos
    pubSub.subscribe('newTodoCreated', displayProjectTodos)

    // when creating new project, display all projects
    pubSub.subscribe('projectAdded', displayAllProjectOptions);

    pubSub.subscribe('displaySelectedProject', (project) => {
        changeHeader(project.name);
        displayProjectTodos(project.todoArray); 
        setProjectSelectOption(project);
    })


    const todoContainer = document.querySelector("#todoContainer");

    const createDOMProp = (elType, value, className) => {
        const todoProp = document.createElement(elType);
        todoProp.textContent = value;
        todoProp.classList.add(className);
        // hide description class by default
        if (className == 'description') {
            todoProp.classList.add('hidden');
        }
        return todoProp;
    }


    const createTodoDOM = (todo) => {
        const todoDOM = document.createElement('div');
        todoDOM.classList.add('todoDOM');
        todoDOM.setAttribute('data-index', todo.todoNumber);

        todoDOM.appendChild(createMainTodoContent(todo));
        todoDOM.appendChild(createFormInTodo());
        todoContainer.appendChild(todoDOM);
    }

    const createMainTodoContent = (todo) => {        

        const todoMainContent = document.createElement('div');
        todoMainContent.classList.add('todoMainContent');
        setPriorityClass(todo, todoMainContent);
        const todoTop = createDOMProp('div',"","todoTop")

        const todoTopLeft = createDOMProp('div', "", "todoTopLeft");
        todoTop.appendChild(todoTopLeft)
        todoTopLeft.appendChild(createDOMProp('span', todo.title, 'title'));

        const todoTopRight = createDOMProp('div', "", "todoTopRight");
        todoTop.appendChild(todoTopRight)
        todoTopRight.appendChild(createDOMProp('span', todo.dueDate, 'dueDate'));
        todoTopRight.appendChild(createDOMProp('button', 'Change', 'change'));
        todoTopRight.appendChild(createDOMProp('button', 'Delete', 'delete'));
    

        const expanded = createDOMProp('div',"","expanded")
        expanded.classList.add('hidden');
        expanded.appendChild(createDOMProp('span', todo.priority, 'priority'));
        expanded.appendChild(createDOMProp('span', todo.description, 'description'));

        todoMainContent.appendChild(todoTop);
        todoMainContent.appendChild(expanded);
        // todoContainer.appendChild(todoDOM);

        return todoMainContent;
    }

    const setPriorityClass = (todo, todoDOM) => {
        switch(todo.priority) {
            case 'low':
                todoDOM.classList.add('low-priority');
                break;
            case 'medium':
                todoDOM.classList.add('medium-priority');
                break;
            case 'high':
                todoDOM.classList.add('high-priority');
                break;
        }
    }

    const createFormInTodo = () => {
        const form = createDOMProp('form', "", 'formInTodo');
        form.classList.add('hidden');

        const title = createDOMProp('input', "", "formTitle");
        title.setAttribute('placeholder', 'New title:')
        const description = createDOMProp('input', "", "formDescription");
        description.setAttribute('placeholder', 'New description:')
        // const date = createDOMProp('input', "", "formDate"); //new date input doesn't work
        // date.setAttribute('type', 'date');
        const priority = createDOMProp('select', "", "formPriority");
        const submit = createDOMProp('button', "Make changes", "formSubmit");
        const cancel = createDOMProp('button', "Cancel", "formCancel");

        const lowPriority = createDOMProp('option', 'Not urgent', 'low')
        priority.appendChild(lowPriority)

        const mediumPriority = createDOMProp('option', 'Not too urgent', 'medium')
        priority.appendChild(mediumPriority)

        const highPriority = createDOMProp('option', 'Urgent', 'high')
        priority.appendChild(highPriority);

        form.appendChild(title);
        form.appendChild(description);
        // form.appendChild(date);
        form.appendChild(priority);
        form.appendChild(submit);
        form.appendChild(cancel);

        return form;
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
        option.value = project.name;
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

    // when creating a project, make the projectSelect value be matching Project... 
    function setProjectSelectOption(project) {
        const projectSelectInTodoForm = document.querySelector("#projectForTodo");
        for (let i = 0; i < projectSelect.length; i++) {
            if (projectSelect[i].textContent == project.name) {
                projectSelect.value = projectSelect[i].value;
                projectSelectInTodoForm.value = projectSelect[i].value;

            }
        }
    }

    function getSelectedProject() {
        return projectSelect.value

    }

    // when clicking on project selects
    projectSelect.addEventListener("change", ()=> {
        // send this code to project.js
        pubSub.publish("getProjectFromProjectSelect", getSelectedProject())
    })
    

    const header = document.querySelector("#project-header");
    const changeHeader = (projectName) => {
        header.textContent = "";
        header.textContent = projectName;
    }

    // delete todo DOM
    todoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains('delete')) {
            // publish the data index of the todo DOM, to project
            pubSub.publish('deleteTodo', e.target.closest('.todoDOM').getAttribute('data-index'));
        }
    })

    // click change todo button
    todoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains('change')) {
            const todoDOM = (e.target.closest('.todoDOM'));
            toggleMainTodoContent(todoDOM);
            toggleFormInTodo(todoDOM);
        }
    })

    // click on form submit
    todoContainer.addEventListener("click", (e) => {
        e.preventDefault();
        if (e.target.classList.contains('formSubmit')) {
            const todoDOM = (e.target.closest('.todoDOM'));
            pubSub.publish('submitChangedTodo', [todoDOM.getAttribute('data-index'), getFormInput(todoDOM)]);
        }
    })

    function getFormInput(form) {
        const newTitle = form.querySelector(".formTitle").value;
        const newDescription = form.querySelector(".formDescription").value;
        const newPriority = form.querySelector(".formPriority").value;
        return {newTitle, newDescription, newPriority}
    }

    // click on cancel button in form in todo
    todoContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('formCancel')) {
            const todoDOM = (e.target.closest('.todoDOM'));
            toggleMainTodoContent(todoDOM);
            toggleFormInTodo(todoDOM);
            const form = todoDOM.querySelector('.formInTodo');
            resetForm(form);
        }
    })

    function resetForm(form) {
        form.reset();
    }

    function toggleMainTodoContent(el) {
        const main = el.querySelector('.todoMainContent');
        toggleHidden(main);
    }

    function toggleFormInTodo(el) {
        const form = el.querySelector('.formInTodo');
        toggleHidden(form);
    }

    // TODO 
    // when clicking on todo, expand it and hide other expanded todos.
    todoContainer.addEventListener("click", (e) => {

        if (e.target.tagName == 'BUTTON') return;
        const todoDOM = (e.target.closest(".todoDOM"));
        if (todoDOM) {
            toggleExpandTodoAndCloseOthers(todoDOM)
        }
    })

    function toggleExpandTodoAndCloseOthers(el) {
        removeCurrentClicked();
        setCurrentClicked(el);
        hideAllTodoExpansions();
        toggleExpandTodo(el);
    }

    function removeCurrentClicked() {
        const currentClicked = document.querySelector('.current-clicked')
        if (currentClicked) {
            currentClicked.classList.remove('current-clicked');
        }
    }

    function setCurrentClicked(todoDOM) {
        todoDOM.classList.add('current-clicked');
    }

    function hideAllTodoExpansions() {
        const allExpanded = document.querySelectorAll(".expanded")
        for (let todo of allExpanded) {
            if (todo.closest(".todoDOM").classList.contains('current-clicked')) continue;
            if (!todo.classList.contains("hidden")) {
                todo.classList.add("hidden");
            }
        }
    }
    function toggleExpandTodo(el) {
        const bottom = el.querySelector(".expanded");
        toggleHidden(bottom);
    }

    function toggleHidden(el) {
        el.classList.contains('hidden') ? el.classList.remove('hidden'): el.classList.add('hidden');
    }
}