import {Mob} from "./module-objects"
import {Dom} from "./module-dom"

// App should contain logic to render webpage but any rendering should be executed by module-dom

const App = (function() {

    let toDoList = undefined;       // this is the currently active to do list, use this to get reference to all the todo objects

    // Use to refresh everything on display
    function display() {
        displayLists();
        displayItems();
    }

    function displayLists() {

        if (toDoList !== undefined) {
            Dom.clearList();
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
                Dom.clearItems();

                list.items.forEach(element => {
                    // dom render item
                    Dom.renderItem(element.renderPropertiesList());
                });
            }
        }
    }

    function setToDoList(newTdList) {
        if (newTdList) {
            toDoList = newTdList;
        }
        else {
            console.log('AllLists object not set.');
        }
    }

    function addListClickEvent(newDiv, id) {
        newDiv.addEventListener('click', function() {
            const list = toDoList.getListWithId(id);
            toDoList.setCurrentList(list);
            displayLists();
            displayItems();
        });
    }

    return {
        display,
        //displayLists,
        //displayItems,
        setToDoList,
        addListClickEvent
    }

})();

export {App};