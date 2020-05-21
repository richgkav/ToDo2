import {Mob} from "./module-objects"
import {Dom} from "./module-dom"

// App should contain logic to render webpage but any rendering is
// completed by module-dom

const App = (function() {

    let toDoList = undefined;

    function displayLists() {

        if (toDoList !== undefined) {
            toDoList.lists.forEach(element => {
                Dom.renderList(element.renderProperties());
            });
        }
    }

    // display all items in the currently selected list

    function displayItems() {

        if (toDoList !== undefined) {

            const list = toDoList.currentList;

            if (list !== null) {

                list.items.forEach(element => {
                    // dom render item
                    Dom.renderItem(element.renderProperties());
                });
            }
        }
    }

    function setToDoList(newTdList) {
        toDoList = newTdList;
    }

    return {
        displayLists,
        displayItems,
        setToDoList
    }

})();

export {App};