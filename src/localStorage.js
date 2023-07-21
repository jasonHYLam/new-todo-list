
// export function localStorageModule() {

    // pubSub.subscribe('resetStorage', () => {
    //     localStorage.clear();
    // })
    // pubSub.subscribe('getProjectDetailsFromStorage', getProjectDetailsFromStorage);
    // pubSub.subscribe('getTodoCounterFromStorage', getTodoCounterFromStorage);

    // pubSub.subscribe('storeTodoCounter', storeTodoCounter);
    // pubSub.subscribe('storeProjectDetails', storeProjectDetails);

    // pubSub.subscribe('getLocalStorageLength', getLocalStorageLength)

    // // pubSub.subscribe('consoleLogStorage', getLocalStorage);

    function resetStorage() {
        localStorage.clear();
    }

    function getLocalStorageLength() {
        console.log(localStorage);
        return localStorage.length
    }

    function checkIfEmpty() {
        console.log(localStorage.length == 0);
        return localStorage.length == 0;
    }

    function getTodoCounterFromStorage() {
        if (!checkIfEmpty()) {
            return JSON.parse(localStorage.todoCounter);
        }
    }
    function storeTodoCounter(todoCounter) {
        localStorage.todoCounter = JSON.stringify(todoCounter);
    }

    function getProjectDetailsFromStorage() {
            const array = JSON.parse(localStorage.projectArray);
            const counter = JSON.parse(localStorage.projectCounter);
            const match = JSON.parse(localStorage.matchingProject);
            return {array, counter, match,}
    }

    function storeProjectDetails({projectArray, projectCounter, matchingProject}) {
        localStorage.projectArray = JSON.stringify(projectArray);
        localStorage.projectCounter = JSON.stringify(projectCounter);
        localStorage.matchingProject = JSON.stringify(matchingProject);
    }
// }

export {
    resetStorage,
    getLocalStorageLength,
    getTodoCounterFromStorage,
    storeTodoCounter,
    getProjectDetailsFromStorage,
    storeProjectDetails,
}