import {Mob} from "./module-objects"
import {Dom} from "./module-dom"

// App should contain logic to render webpage but any rendering should be executed by module-dom

const App = (function() {

    let toDoList = undefined;       // this is the currently active to do list, use this to get reference to all the todo objects

    // Use to refresh everything on display
    function display() {
        displayLists();
        displayItems();
        Dom.renderListsFunctions(); // buttons under lists
        Dom.renderItemsFunctions(); // and items
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

// add code to go into the item editor

            //console.log(`Current list = ${toDoList.currentList.title}`);
            //console.log(`Clicked item id = ${id}`);
            const item = toDoList.currentList.getItemWithId(id);
            console.log(`Edit item ${item.title} clicked`);
        });
    }

    function addItemCompleteClickEvent(newDiv, id) {

        newDiv.addEventListener('click', function() {

            const item = toDoList.currentList.getItemWithId(id);

            if (item.completed) {
                item.completed = false;
            }
            else {
                item.completed = true;
            }

            displayItems();
        });
    }

    function addItemPriorityClickEvent(newDiv, id) {
        newDiv.addEventListener('click', function() {
            const item = toDoList.currentList.getItemWithId(id);
            item.priority += 1;
            if (item.priority === 4) item.priority = 1;
            displayItems();
        });
    }

    function addNewFolderClickEvent(newDiv) {
        newDiv.addEventListener('click', function() {
            const newList = new Mob.List();
            newList.title = "A new folder";
            newList.description = "Adding a new folder";
            toDoList.addList(newList);
            displayLists();
            displayItems();
        });
    }

    function addNewItemClickEvent(newDiv) {
        newDiv.addEventListener('click', function() {
            const newItem = new Mob.Item();
            newItem.title = "New item test";
            newItem.description = "Bla bla bla";
            toDoList.currentList.addItem(newItem);
            displayItems();
        });
    }


    return {
        display,
        setToDoList,
        addListClickEvent,
        addItemClickEvent,
        addItemCompleteClickEvent,
        addItemPriorityClickEvent,
        addNewFolderClickEvent,
        addNewItemClickEvent
    }

})();

export {App};