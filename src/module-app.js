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

    // cycles through the 3 priority levels
    function addEditPriorityClickEvent(newDiv, item) {
        newDiv.addEventListener('click', function() {
            //const tItem = toDoList.currentList.getItemWithId(item.id);
            item.priority += 1;
            if (item.priority === 4) item.priority = 1;
            Dom.renderItemEditor(item);
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

    function loadData() {

        console.log(toDoList);
        
        if (storageAvailable('localStorage')) {
            const itemCounter = JSON.parse(localStorage.getItem('toDoItem_counter'));
            //console.log(`item counter = ${itemCounter}`);
            const listCounter = JSON.parse(localStorage.getItem('toDoList_counter'));
            //console.log(`list counter = ${listCounter}`);

            // only load keys from storage that start with 'toDoList'
            for (let i = 0; i != localStorage.length; i++) {

                const key = localStorage.key(i);
                if (key.startsWith('todolist')) {

                    const dataList = JSON.parse(localStorage.getItem(key));
                    const newList = new Mob.List();

                    newList.setValues(
                        dataList.id,
                        dataList.currentItem,
                        dataList.title,
                        dataList.description,
                        dataList.dateCreated,
                        dataList.selected
                    );

                    dataList.items.forEach(dataItem => {
                        const newItem = new Mob.Item();
                        newItem.setValues(
                            dataItem.id,
                            dataItem.title,
                            dataItem.description,
                            dataItem.dateCreated,
                            dataItem.dateDue,
                            dataItem.priority,
                            dataItem.selected,
                            dataItem.completed
                        );

                        newList.items.push(newItem);

                    });
                }
            }
            console.log(toDoList);
        }
        else {
            console.log('localStorage is not available');
        }
    }

    // list.id & item.id are unique keys
    // also need to save item counter and list counter so that the keys arent
    // generated twice

    function saveData() {

        if (storageAvailable('localStorage')) {

            localStorage.setItem('toDoList_counter', JSON.stringify(toDoList.listCounter));
            localStorage.setItem('toDoItem_counter', JSON.stringify(Mob.Counter.currentValue()));

            toDoList.lists.forEach(list => {
                localStorage.setItem(list.id, JSON.stringify(list));
            });

        }
        else {
            console.log('localStorage is not available');
        }
    }

    function storageAvailable(type) {
        var storage;
        try {
            storage = window[type];
            var x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
                // acknowledge QuotaExceededError only if there's something already stored
                (storage && storage.length !== 0);
        }
    }

    return {
        display,
        setToDoList,
        addListClickEvent,
        addEditItemClickEvent,
        addItemCompleteClickEvent,
        addItemPriorityClickEvent,
        addEditPriorityClickEvent,
        addNewFolderClickEvent,
        deleteFolderClickEvent,
        addNewItemClickEvent,
        setupElementsForMain,
        editItemSubmitEvent,
        saveData,
        loadData
    }

})();

export {App};