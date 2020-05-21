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

    function addItemClickEvent(newDiv, id) {
        newDiv.addEventListener('click', function() {
            console.log(`Current list = ${toDoList.currentList.title}`);
            console.log(`Clicked item id = ${id}`);
            const item = toDoList.currentList.getItemWithId(id);
            console.log(`Item ${item.title} selected`);
        });
    }

    return {
        display,
        setToDoList,
        addListClickEvent,
        addItemClickEvent
    }

})();

export {App};