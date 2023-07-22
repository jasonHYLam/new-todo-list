class LocalStorage {
    constructor() {
        if (LocalStorage.instance == null) {
            LocalStorage.instance = this
        }
        return LocalStorage.instance
    }

    resetStorage() {
        window.localStorage.clear();
    }

    getLocalStorageLength() {
        console.log(window.localStorage);
        console.log(window.localStorage.length);
        return window.localStorage.length
    }

    checkIfEmpty() {
        console.log(localStorage.length == 0);
        return localStorage.length == 0;
    }

    getLocalStorage() {
        return localStorage;
    }

    getLocalStorageTodoCounter() {
        return localStorage.todoCounter;
    }

    getTodoCounterFromStorage() {
        // if (!checkIfEmpty()) {
            const storedTodoCounter = JSON.parse(window.localStorage.todoCounter);
            return storedTodoCounter;
        // }
    }
    storeTodoCounter(todoCounter) {
        window.localStorage.todoCounter = JSON.stringify(todoCounter);
    }

    getProjectDetailsFromStorage() {
            const array = JSON.parse(window.localStorage.projectArray);
            const counter = JSON.parse(window.localStorage.projectCounter);
            const match = JSON.parse(window.localStorage.matchingProject);
            return {array, counter, match,}
    }

    storeProjectDetails({projectArray, projectCounter, matchingProject}) {
        window.localStorage.projectArray = JSON.stringify(projectArray);
        window.localStorage.projectCounter = JSON.stringify(projectCounter);
        window.localStorage.matchingProject = JSON.stringify(matchingProject);
    }
}

const localStorageModule = new LocalStorage()
Object.freeze(localStorageModule);
export default localStorageModule;
// function resetStorage() {
//     localStorage.clear();
// }

// function getLocalStorageLength() {
//     console.log(localStorage);
//     console.log(localStorage.length);
//     return localStorage.length
// }

// function checkIfEmpty() {
//     console.log(localStorage.length == 0);
//     return localStorage.length == 0;
// }

// function getTodoCounterFromStorage() {
//     // if (!checkIfEmpty()) {
//         const storedTodoCounter = JSON.parse(localStorage.todoCounter);
//         return storedTodoCounter;
//     // }
// }
// function storeTodoCounter(todoCounter) {
//     localStorage.todoCounter = JSON.stringify(todoCounter);
// }

// function getProjectDetailsFromStorage() {
//         const array = JSON.parse(localStorage.projectArray);
//         const counter = JSON.parse(localStorage.projectCounter);
//         const match = JSON.parse(localStorage.matchingProject);
//         return {array, counter, match,}
// }

// function storeProjectDetails({projectArray, projectCounter, matchingProject}) {
//     localStorage.projectArray = JSON.stringify(projectArray);
//     localStorage.projectCounter = JSON.stringify(projectCounter);
//     localStorage.matchingProject = JSON.stringify(matchingProject);
// }

// export {
//     resetStorage,
//     getLocalStorageLength,
//     getTodoCounterFromStorage,
//     storeTodoCounter,
//     getProjectDetailsFromStorage,
//     storeProjectDetails,
// }