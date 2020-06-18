import * as Mob from "./module-objects"
import * as Dom from "./module-dom"

// App should contain logic to render webpage but any rendering should be executed by module-dom


let toDoList = undefined;       // this is the currently active to do list, use this to get reference to all the todo objects

export function setupDisplayElements() {
    Dom.renderMenuBarDivs();
    Dom.renderMainDivs();
    Dom.renderFunctionBarDivs();
}

// Use to refresh everything on display
export function display() {
    Dom.clearContent();
    Dom.renderMenuBarDivs();
    Dom.renderMainDivs();
    Dom.renderFunctionBarDivs();
    displayLists();
    displayItems();
    Dom.renderListsFunctions(); // The list function buttons
    Dom.renderItemsFunctions(); // The item function buttons
}

export function displayLists() {

    if (toDoList !== undefined) {
        Dom.clearList();
        toDoList.lists.forEach(element => {
            Dom.renderList(element.renderProperties());
        });
    }
}

export function displayItems() {

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

// just used with test data
export function setToDoList(newTdList) {
    if (newTdList) {
        toDoList = newTdList;
    }
    else {
        console.log('AllLists object not set.');
    }
}

export function addListClickEvent(newDiv, id) {

    newDiv.addEventListener('click', function() {

        const list = toDoList.getListWithId(id);
        toDoList.setCurrentList(list);
        displayLists();
        displayItems();

    });
}

export function addEditItemClickEvent(newDiv, id) {
    newDiv.addEventListener('click', function() {
        const item = toDoList.currentList.getItemWithId(id);
        Dom.renderItemEditor(item);

    });
}

// toggles whether the item has been completed
export function addItemCompleteClickEvent(newDiv, id) {

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
export function addItemPriorityClickEvent(newDiv, id) {
    newDiv.addEventListener('click', function() {
        const item = toDoList.currentList.getItemWithId(id);
        item.priority += 1;
        if (item.priority === 4) item.priority = 1;
        newDiv.innerHTML = item.priority;
    });
}

// cycles through the 3 priority levels
export function addEditPriorityClickEvent(newDiv, item) {
    newDiv.addEventListener('click', function() {
        //const tItem = toDoList.currentList.getItemWithId(item.id);
        item.priority += 1;
        if (item.priority === 4) item.priority = 1;
        newDiv.innerHTML = item.priority;
    });
}

export function addDueDateChangedEvent(newDiv, item) {
    newDiv.addEventListener('blur', function() {
        item.dateDue = new Date(newDiv.value);
    });
}


export function addNewListClickEvent(newDiv) {
    newDiv.addEventListener('click', function() {
        const newList = new Mob.List();
        newList.title = "A new list";
        newList.description = "Adding a new list";
        toDoList.addList(newList);
        displayLists();
        displayItems();
    });
}

export function deleteListClickEvent(newDiv) {

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

export function addDeleteItemClickEvent(newDiv, item) {
    newDiv.addEventListener('click', function() {
        if (window.confirm(`Delete the item titled \"${item.title}\"?`)){
            const searchId = item.id;
            const index = toDoList.currentList.items.findIndex(item => item.id === searchId);
            toDoList.currentList.items.splice(index, 1);
            if (toDoList.currentList.items.length > 0) {
                toDoList.currentList.currentItem = toDoList.currentList.items[0];
                toDoList.currentList.currentItem.selected = true;
            }
        }
        display();
    });
}

export function addNewItemClickEvent(newDiv) {
    newDiv.addEventListener('click', function() {
        const newItem = new Mob.Item();
        newItem.title = "New item test";
        newItem.description = "Bla bla bla";
        if (toDoList.currentList) toDoList.currentList.addItem(newItem);
        Dom.renderItemEditor(newItem);
    });
}

export function editItemSubmitEvent(newDiv, item) {
    newDiv.addEventListener('click', function() {
        const itemTitle = document.getElementById('item-title');
        const itemDescription = document.getElementById('item-description');

        if (itemTitle) item.title = itemTitle.value;
        if (itemDescription) item.description = itemDescription.value;

        display();
    });
}

export function addSaveClicked(newDiv) {
    newDiv.addEventListener('click', function(){
        console.log(toDoList.toString());
        saveData();
    });
}

export function loadData() {

    // its not setting the loaded id

    const allToDoLists = new Mob.AllLists();

    if (storageAvailable('localStorage')) {

    //    localStorage.setItem('tdLCounter', JSON.stringify(toDoList.listCounter));
    //    localStorage.setItem('tdICounter', JSON.stringify(Mob.Counter.currentValue()));
    //    localStorage.setItem('tdLCurrent', JSON.stringify(toDoList.currentList.id));

        const itemCounter = JSON.parse(localStorage.getItem('tdICounter'));
        const listCounter = JSON.parse(localStorage.getItem('tdLCounter')); 
        
        if (itemCounter === null && listCounter === null) {
            // create blank list
            //allToDoLists = new Mob.AllLists();
            console.log('No data found in localStorage.');
            const defaultList = new Mob.List();         // default list
            defaultList.title = "Default";
            defaultList.description = "Create todo items in here";
            defaultList.selected = true;
            allToDoLists.currentList = defaultList;
            allToDoLists.addList(defaultList);
            console.log('Created default data.');
        }
        else {
            // load data
            allToDoLists.listCounter = listCounter;
            Mob.Counter.setCounterValue(itemCounter);

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

                    //console.log(`App.loadData() - newList.id = ${newList.id}`);

                    dataList.items.forEach(dataItem => {

                        const nDateCreated = new Date(dataItem.dateCreated);
                        const nDateDue = new Date(dataItem.dateDue);
                        const newItem = new Mob.Item();

                        newItem.setValues(
                            dataItem.id,
                            dataItem.title,
                            dataItem.description,
                            nDateCreated,
                            nDateDue,
                            dataItem.priority,
                            false,
                            dataItem.completed
                        );

                        //console.log(`App.loadData() - newItem.id = ${newItem.id}`);

                        newList.addItem(newItem);

                    });

                    allToDoLists.lists.push(newList);
                }
            }
            const dListId = JSON.parse(localStorage.getItem('tdLCurrent'));
            const sList = allToDoLists.getListWithId(dListId);
            allToDoLists.currentList = sList;
            allToDoLists.currentList.selected = true;
            console.log('Lists loaded from localStorage');
        }

    }
    else {
        console.log('localStorage is not available');
    }

    return allToDoLists;
}

// list.id & item.id are unique keys
// also need to save item counter and list counter so that the keys arent
// generated twice

export function saveData() {

    if (storageAvailable('localStorage')) {

        wipeLocalStorage();

        localStorage.setItem('tdLCounter', JSON.stringify(toDoList.listCounter));
        localStorage.setItem('tdICounter', JSON.stringify(Mob.Counter.currentValue()));
        localStorage.setItem('tdLCurrent', JSON.stringify(toDoList.currentList.id));

        toDoList.lists.forEach(list => {
            localStorage.setItem(list.id, JSON.stringify(list));
        });
    }
    else {
        console.log('localStorage is not available');
    }
}

export function wipeLocalStorage() {

    if (localStorage.length > 0) {

        for (let i = 0; i != localStorage.length; i++) {

            const key = localStorage.key(i);

            if (key !== null) {
                if (key.toLowerCase().startsWith('todolist')) {
                    console.log(`Removed ${key}`);
                    localStorage.removeItem(key);
                }
            }
        }
    }
}

export function storageAvailable(type) {
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
