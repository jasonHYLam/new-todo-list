import { pubSub } from "./pubsub";

export function formHandler() {
    const todoForm = document.querySelector("#todoForm")
    console.log(todoForm)
    const projectForm = document.querySelector("#projectForm")
    console.log(projectForm)

    const submitProject = document.querySelector('#projectSubmit')
    submitProject.addEventListener("click", () => {
        // pubSub('createProject', console.log(document.querySelector('#projectForm input').value))
        console.log(document.querySelector('#projectForm input').value)
    })
}