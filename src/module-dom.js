const Dom = (function() {

    // Dom functions called by module-application

    // render one List into #lists-div

    function renderList(details) {
        const listsDiv = document.getElementById('lists-container');
        clearChildElements(listsDiv);
        const newDiv = document.createElement('div');
        newDiv.classList.add('list-element');
        newDiv.innerHTML = details.title;
        listsDiv.appendChild(newDiv);
    }

    // render one Item into #items-div

    function renderItem(details) {
        const itemsDiv = document.getElementById('items-container');
        clearChildElements(itemsDiv);
        const newDiv = document.createElement('div');
        newDiv.classList.add('item-element');
        newDiv.innerHTML = details.title;
        itemsDiv.appendChild(newDiv);
    }

    return {
        renderList,
        renderItem
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