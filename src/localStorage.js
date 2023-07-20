
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

    function getLocalStorageLength() {
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

    function getProjectDetailsFromStorage({projectArray, projectCounter, matchingProject}) {
        if (!checkIfEmpty()) {
            projectArray = JSON.parse(localStorage.projectArray);
            projectCounter = JSON.parse(localStorage.projectCounter);
            matchingProject = JSON.parse(localStorage.matchingProject);

        }
    }

    function storeProjectDetails({projectArray, projectCounter, matchingProject}) {
        localStorage.projectArray = JSON.stringify(projectArray);
        localStorage.projectCounter = JSON.stringify(projectCounter);
        localStorage.matchingProject = JSON.stringify(matchingProject);
    }
// }

export {
    getLocalStorageLength,
    getTodoCounterFromStorage,
    storeTodoCounter,
    getProjectDetailsFromStorage,
    storeProjectDetails,
}