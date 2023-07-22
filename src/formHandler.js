import { pubSub } from "./pubsub";

//handles form related functionality. such as when forms are submitted.
export function formHandler() {

    const resetForm = (form) => {
        form.reset()
    }

    const todoForm = document.querySelector("#todoForm")
    const submitTodo = document.querySelector("#todoSubmit");

    const getTodoArgs = () => {
    const todoTitle = document.querySelector("#todoTitle").value;
    const todoDescription = document.querySelector("#todoDescription").value;
    const todoDueDate = document.querySelector("#dueDate").value;
    const todoPriority = `${document.querySelector("#todoPriority").value} priority`;//change from value to textContent
    const todoArgs = [todoTitle, todoDescription, todoDueDate, todoPriority]
    return todoArgs;
    }

    const getSelectedProjectOption = () => {
        const project = document.querySelector("#projectForTodo");
        console.log(project.value);
        return project.value;
    }

    submitTodo.addEventListener("click", (e) => {
        e.preventDefault();
        pubSub.publish('getProjectFromTodoForm', getSelectedProjectOption())//send to project.js
        pubSub.publish('todoFormSubmitted', getTodoArgs()); //send to todo.js
        resetForm(todoForm);
    })

    const projectForm = document.querySelector("#projectForm")

    const submitProject = document.querySelector('#projectSubmit')
    submitProject.addEventListener("click", (e) => {
        e.preventDefault();
        // pubSub for creating a new project
        pubSub.publish('projectFormSubmitted', document.querySelector('#projectForm input').value)
        resetForm(projectForm);
    })
}