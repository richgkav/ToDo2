import {Mob} from "./module-objects"
import {Dom} from "./module-dom"

// App should contain logic to render webpage but any rendering should be executed by module-dom

const App = (function() {

    let toDoList = undefined;       // this is the currently active to do list, use this to get reference to all the todo objects

    function setupElementsForMain() {
        Dom.renderMenuBarDivs();
        Dom.renderMainDivs();
        Dom.renderFunctionBarDivs();
    }
    
    // Use to refresh everything on display
    function display() {
        Dom.clearContent();
        Dom.renderMenuBarDivs();
        Dom.renderMainDivs();
        Dom.renderFunctionBarDivs();
        displayLists();
        displayItems();
        Dom.renderListsFunctions(); // The list function buttons
        Dom.renderItemsFunctions(); // The item function buttons
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
                    Dom.renderItem(element);
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

    function addEditItemClickEvent(newDiv, id) {
        newDiv.addEventListener('click', function() {

            const item = toDoList.currentList.getItemWithId(id);
            Dom.renderItemEditor(item);

        });
    }

    // toggles whether the item has been completed
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

    // cycles through the 3 priority levels
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
            newList.title = "A new list";
            newList.description = "Adding a new list";
            toDoList.addList(newList);
            displayLists();
            displayItems();
        });
    }

    function deleteFolderClickEvent(newDiv) {

        newDiv.addEventListener('click', function() {

            if (window.confirm(`Delete the list named \"${toDoList.currentList.title}\"?`)){
                // find array index of the currently selected list
                const searchId = toDoList.currentList.id;
                const index = toDoList.lists.findIndex(list => list.id === searchId);
                toDoList.currentList.items = [];
                toDoList.lists.splice(index, 1);

                if (toDoList.lists.length > 0) {
                    // set list to first after deleting one
                    toDoList.currentList = toDoList.lists[0];
                    toDoList.currentList.selected = true;
                }
                else {
                    // There are no lists so create a new default one
                    const newList = new Mob.List();
                    newList.title = "Default";
                    newList.selected = true;
                    toDoList.currentList = newList;
                    toDoList.addList(newList);
                }

                displayLists();
                displayItems();
            }
            else {

            }

        });
    }

    function addNewItemClickEvent(newDiv) {
        newDiv.addEventListener('click', function() {
            const newItem = new Mob.Item();
            newItem.title = "New item test";
            newItem.description = "Bla bla bla";
            if (toDoList.currentList) toDoList.currentList.addItem(newItem);
            Dom.renderItemEditor(newItem);
        });
    }

    function editItemSubmitEvent(newDiv, item) {
        newDiv.addEventListener('click', function() {
            const itemTitle = document.getElementById('item-title');
            const itemDescription = document.getElementById('item-description');

            if (itemTitle) item.title = itemTitle.value;
            if (itemDescription) item.description = itemDescription.value;

            display();
        });
    }

    return {
        display,
        setToDoList,
        addListClickEvent,
        addEditItemClickEvent,
        addItemCompleteClickEvent,
        addItemPriorityClickEvent,
        addNewFolderClickEvent,
        deleteFolderClickEvent,
        addNewItemClickEvent,
        setupElementsForMain,
        editItemSubmitEvent
    }

})();

export {App};