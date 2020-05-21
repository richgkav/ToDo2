import {App} from "./module-app";

const Dom = (function() {

    // Dom functions called by module-application

    // render one List into #lists-div

    function renderList(details) {
        const listsDiv = document.getElementById('lists-container');
        const newDiv = document.createElement('div');
        newDiv.classList.add('list-element');
        newDiv.innerHTML = details.title;
        if (details.selected) {
            newDiv.style.backgroundColor = "darkred";
        }

        App.addListClickEvent(newDiv, details.id);

        listsDiv.appendChild(newDiv);
    }

    function clearList() {
        const listsDiv = document.getElementById('lists-container');
        clearChildElements(listsDiv); 
    }

    // render one Item into #items-div

    function renderItem(details) {

        const itemsDiv = document.getElementById('items-container');

        // Item needs a div to contain the list displayed information
        const newDivItem = document.createElement('div');
        newDivItem.classList.add('item-element');
        itemsDiv.appendChild(newDivItem);

        if (details.completed) {
            newDivItem.style.backgroundColor = "darkred";
        }

        // Item display sections
        const newDivTitle = document.createElement('div');
        newDivTitle.innerHTML = details.title;
        newDivItem.appendChild(newDivTitle);
        App.addItemClickEvent(newDivTitle, details.id);

        const newDivPriority = document.createElement('div');
        newDivPriority.innerHTML = details.priority;
        newDivItem.appendChild(newDivPriority);
        App.addItemPriorityClickEvent(newDivPriority, details.id);

        const newDivCompleted = document.createElement('div');
        newDivCompleted.innerHTML = details.completed;
        newDivItem.appendChild(newDivCompleted);
        App.addItemCompleteClickEvent(newDivCompleted, details.id);

    }

    function clearItems() {
        const itemsDiv = document.getElementById('items-container');
        clearChildElements(itemsDiv); 
    }

    function renderListsFunctions() {
        const listsFunctions = document.getElementById('lists-functions');
        const newDivAddList = document.createElement('div');
        newDivAddList.innerHTML = "Add Folder";
        listsFunctions.appendChild(newDivAddList);
        App.addNewFolderClickEvent(newDivAddList);
    }

    function renderItemsFunctions() {
        const itemsFunctions = document.getElementById('items-functions');
        const newDivAddItem = document.createElement('div');
        newDivAddItem.innerHTML = "Add Item";
        itemsFunctions.appendChild(newDivAddItem);
        App.addNewItemClickEvent(newDivAddItem);
    }

    return {
        renderList,
        clearList,
        renderItem,
        clearItems,
        renderListsFunctions,
        renderItemsFunctions
    }

// -------------------------------------------------------------------------- //
    function clearChildElements(node) {
        // clears all child elements under the specified id
        while (node.firstChild) {
            node.removeChild(node.lastChild);
        }
    }
// -------------------------------------------------------------------------- //

})();

export {Dom};