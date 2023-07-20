import { project } from "./project";
import { pubSub } from "./pubsub";

export function localStorageModule() {

    pubSub.subscribe('getProjectDetailsFromStorage', getProjectDetailsFromStorage);
    pubSub.subscribe('getTodoCounterFromStorage', getTodoCounterFromStorage);

    pubSub.subscribe('storeTodoCounter', storeTodoCounter);
    pubSub.subscribe('storeProjectDetails', storeProjectDetails);

    pubSub.subscribe('getLocalStorageLength', getLocalStorageLength)

    pubSub.subscribe('consoleLogStorage', getLocalStorage);

    function getLocalStorage() {
        console.log(localStorage);
    }
    function getLocalStorageLength(temp) {
        temp = localStorage.length;
    }

    function checkIfEmpty() {
        console.log(localStorage.length == 0);
        return localStorage.length == 0;
    }

    function getTodoCounterFromStorage(todoCounter) {
        if (!checkIfEmpty()) {
            todoCounter = JSON.parse(localStorage.todoCounter);
        }
    }
    function storeTodoCounter(todoCounter) {
        localStorage.todoCounter = JSON.stringify(todoCounter);
    }

    function getProjectDetailsFromStorage({projectArray, projectCounter, matchingProject}) {
        if (!checkIfEmpty()) {
            projectArray = JSON.parse(localStorage.projectArray);
            projectCounter = JSON.parse(localStorage.projectCounter);
            matchingProject = JSON.parse(localStorage.matchingProject);

        }
    }

    function storeProjectDetails({projectArray, projectCounter, matchingProject}) {
        localStorage.projectArray = projectArray;
        localStorage.projectCounter = projectCounter;
        localStorage.matchingProject = matchingProject;
    }
}