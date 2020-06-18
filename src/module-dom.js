import * as App from "./module-app";


export function renderMenuBarDivs() {
    // Renders the div elements for the main display
    const contentDiv = getDiv('content');
    const menuBarDiv = newDiv('menu-bar');
    const listsMenuDiv = newDiv('lists-menu');
    const itemsMenuDiv = newDiv('items-menu');
    const menuH2 = newH2('Menu');
    const itemsH2 = newH2('Items');
    const priorityH2 = newH2('Priority');
    const completedH2 = newH2('Completed');
    contentDiv.appendChild(menuBarDiv);
    menuBarDiv.appendChild(listsMenuDiv);
    listsMenuDiv.appendChild(menuH2);
    menuBarDiv.appendChild(itemsMenuDiv);
    itemsMenuDiv.appendChild(itemsH2);
    itemsMenuDiv.appendChild(priorityH2);
    itemsMenuDiv.appendChild(completedH2);
}

export function renderMainDivs() {
    const contentDiv = getDiv('content');
    const mainDiv = newDiv('main-div');
    const listsContainerDiv = newDiv('lists-container');
    const itemsContainerDiv = newDiv('items-container');
    contentDiv.appendChild(mainDiv);
    mainDiv.appendChild(listsContainerDiv);
    mainDiv.appendChild(itemsContainerDiv);
}

export function renderFunctionBarDivs() {
    const contentDiv = getDiv('content');
    const functionDiv = newDiv('function-div');
    const listsFuncDiv = newDiv('lists-functions');
    const itemsFuncDiv = newDiv('items-functions');
    contentDiv.appendChild(functionDiv);
    functionDiv.appendChild(listsFuncDiv);
    functionDiv.appendChild(itemsFuncDiv);
}

export function newDiv(idName, innerHTML) {
    const newDiv = document.createElement('div');
    if (idName) newDiv.id = idName;
    if (innerHTML) newDiv.innerHTML = innerHTML;
    return newDiv;
}

export function getDiv(idName) {
    return document.getElementById(idName);
}

export function newH2(text) {
    const newH2 = document.createElement('H2');
    if (text) newH2.innerHTML = text;
    return newH2;
}


//  render one List into #lists-div
export function renderList(details) {
    const listsDiv = document.getElementById('lists-container');
    const newDiv = document.createElement('div');
    newDiv.classList.add('list-element');
    newDiv.innerHTML = details.title;
    if (details.selected) {
        newDiv.style.backgroundColor = "#f7e3e3";
    }

    App.addListClickEvent(newDiv, details.id);

    listsDiv.appendChild(newDiv);
}

export function clearList() {
    const listsDiv = document.getElementById('lists-container');
    clearChildElements(listsDiv); 
}

// render one Item into #items-div

export function renderItem(item) {

    const itemsDiv = document.getElementById('items-container');

    // Item needs a div to contain the list displayed information
    const newDivItem = document.createElement('div');
    newDivItem.classList.add('item-element');
    itemsDiv.appendChild(newDivItem);

    // Item display sections
    const newDivTitle = document.createElement('div');
    newDivTitle.innerHTML = item.title;
    newDivItem.appendChild(newDivTitle);
    App.addEditItemClickEvent(newDivTitle, item.id);

    const newDivPriority = document.createElement('div');
    newDivPriority.innerHTML = item.priority;
    newDivItem.appendChild(newDivPriority);
    App.addItemPriorityClickEvent(newDivPriority, item.id);

    const newDivCompleted = document.createElement('div');
    newDivCompleted.innerHTML = item.completed;
    newDivItem.appendChild(newDivCompleted);
    App.addItemCompleteClickEvent(newDivCompleted, item.id);

    if (item.completed) {
        newDivTitle.style.backgroundColor = "#d9d9d9";
        newDivPriority.style.backgroundColor = "#d9d9d9";
        newDivCompleted.style.backgroundColor = "#d9d9d9";
    }

}

export function clearItems() {
    const itemsDiv = document.getElementById('items-container');
    clearChildElements(itemsDiv); 
}

export function clearContent() {
    const contentDiv = document.getElementById('content');
    clearChildElements(contentDiv);
    return contentDiv;
}

export function renderListsFunctions() {
    const listsFunctions = getDiv('lists-functions');

    const newDivAddList = newDiv(null, 'Add List');
    listsFunctions.appendChild(newDivAddList);
    App.addNewListClickEvent(newDivAddList);

    const newDivDelList = newDiv(null, 'Delete List');
    listsFunctions.appendChild(newDivDelList);
    App.deleteListClickEvent(newDivDelList);
}

export function renderItemsFunctions() {
    const itemsFunctions = document.getElementById('items-functions');

    const newDivAddItem = newDiv(null, 'Add Item');
    itemsFunctions.appendChild(newDivAddItem);
    App.addNewItemClickEvent(newDivAddItem);

    const newDivSave = newDiv(null, 'Save All');
    itemsFunctions.appendChild(newDivSave);
    App.addSaveClicked(newDivSave);
}

export function renderItemEditor(item) {

    const contentDiv = clearContent();
    const formDiv = newDiv('item-editor');

    const title = renderLabelInput('Title', 'item-title', item.title);
    const description = renderLabelInput('Description', 'item-description', item.description);
    
    // -------------------------
    const dueLabel = document.createElement('label');
    dueLabel.setAttribute('for', 'due-date');
    dueLabel.innerHTML = 'Due Date';
    const dueInput = document.createElement('input');
    dueInput.setAttribute('type', 'date');
    dueInput.setAttribute('name', 'due-date');
    let date = item.dateDue.toLocaleDateString('en-UK', { year: 'numeric', month: '2-digit', day: '2-digit' });
    date = date.split('/');
    date = [date[2], date[0], date[1]];
    dueInput.value = date.join('-');
    App.addDueDateChangedEvent(dueInput, item);
    // ---------------------------

    const priLabel = document.createElement('label');
    priLabel.innerHTML = "Priority"
    const newDivPriority = document.createElement('div');
    newDivPriority.classList.add('buttons');
    newDivPriority.id = 'item-priority';
    newDivPriority.innerHTML = item.priority;
    App.addEditPriorityClickEvent(newDivPriority, item);

    const createdLabel = document.createElement('label');

    //console.log(typeof item.dateCreated);

    date = item.dateCreated.toLocaleDateString('en-UK');
    date = date.split('/');
    date = [date[1], date[0], date[2]];
    createdLabel.innerHTML = `Date created ${date.join('/')}`;
    
    const buttonSubmit = newDiv();
    buttonSubmit.classList.add('buttons');
    buttonSubmit.innerHTML = 'Submit';
    App.editItemSubmitEvent(buttonSubmit, item);
    
    const buttonDelete = newDiv();
    buttonDelete.classList.add('buttons');
    buttonDelete.innerHTML = 'Delete';
    App.addDeleteItemClickEvent(buttonDelete, item);  

    contentDiv.appendChild(formDiv);
    formDiv.appendChild(createdLabel);
    formDiv.appendChild(title.label);
    formDiv.appendChild(title.input);
    formDiv.appendChild(description.label);
    formDiv.appendChild(description.input);
    formDiv.appendChild(dueLabel);
    formDiv.appendChild(dueInput);
    formDiv.appendChild(priLabel);
    formDiv.appendChild(newDivPriority);
    formDiv.appendChild(buttonDelete);
    formDiv.appendChild(buttonSubmit);
    
}

export function renderLabelInput(text, field, value) {
    const label = document.createElement('label');
    label.setAttribute('for', field);
    label.innerHTML = text;
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', field);
    input.id = field;
    if (value) input.value = value;

    return {
        label,
        input
    }
}

// -------------------------------------------------------------------------- //
export function clearChildElements(node) {
    // clears all child elements under the specified id
    while (node.firstChild) {
        node.removeChild(node.lastChild);
    }
}
// -------------------------------------------------------------------------- //
