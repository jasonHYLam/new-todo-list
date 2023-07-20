import { pubSub } from "./pubsub";

export function localStorage() {
    pubSub.subscribe('loadPage', checkIfEmpty);

    function checkIfEmpty() {
        return localStorage.length == 0
    }

    function getTodoCounter() {

    }
    function setTodoCounter() {
    }

    function getProject() {

    }
    function setProject() {

    }

}