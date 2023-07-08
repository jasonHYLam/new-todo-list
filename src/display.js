import { pubSub } from "./pubsub";

export function display() {

    const projectSelect = document.querySelector("#projectSelect");
    
    const createOption = (project) => {
        const option = document.createElement('option');
        option.textContent= project.name;
        console.log(`project name: ${project.name}`)
        projectSelect.appendChild(option);

    }
    const createAllOptions = (projectArray) => {
        projectArray.textContent = '';
        projectArray.forEach(createOption)
    }

    createAllOptions();

    // when creating new project, display all projects
    pubSub.subscribe('projectAdded', createAllOptions);
}