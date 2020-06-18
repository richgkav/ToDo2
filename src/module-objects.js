export function AllLists() {

    this.lists = new Array();
    this.currentList = new List();
    this.listCounter = 0;           // each list has unique number but might not be the array index

    this.addList = function(list) {
        list.id = "todolist_" + this.listCounter++;
        this.setCurrentList(list);///
        this.lists.push(list);
    };

    this.getListWithId = function(id) {
        for (let i = 0; i != this.lists.length; i++) {
            if (this.lists[i].id === id) {
                return this.lists[i];
            }
        }
        return false;
    }

    this.setCurrentList = function (newList) {
        this.currentList.selected = false;
        this.currentList = newList;
        this.currentList.selected = true;
    }
}

// -------------------------------------------------------------------------- //
// id is used to refer to the correct List or Item object after a click event

export function List() {
    this.items = [];
    this.id = undefined;            // generated from AllLists.listCounter
    this.currentItem = undefined;
    this.dateCreated = new Date();

    this.addItem = function(item) {
        item.id = "todoitem_" + Counter.getCount();
        item.parentId = this.id;    // used in save & load matching
        this.items.push(item);
    };
}

List.prototype.title = "";
List.prototype.description = "";        // currently unused in List
List.prototype.selected = false;

List.prototype.renderProperties = function() {
    return {
        title: this.title,
        selected: this.selected,
        id: this.id
    }; // needs object format
}

List.prototype.getItemWithId = function(id) {
    for (let i = 0; i != this.items.length; i++) {
        if (this.items[i].id === id) {
            return this.items[i];
        }
    }
    return false;
}

List.prototype.setValues = function(id, currentItem, title, description, dateCreated, selected) {
    this.id = id;
    this.currentItem = currentItem;
    this.title = title;
    this.description = description;
    this.dateCreated = new Date(dateCreated);     // not in prototype as not gettings saved
    this.selected = selected;
}

// -------------------------------------------------------------------------- //
export function Item() {
    this.dateCreated = new Date();
    this.dateDue = (_addDays(new Date(), 28));
    this.priority = 2;
    this.completed = false;
    this.id = undefined;
    //this.parentId = undefined;
}

// Set Item prototype to List prototype ("inherit" properties)
Item.prototype = Object.create(List.prototype);
// fix constructor back to Item as above instruction sets it to List
Item.prototype.constructor = Item;

Item.prototype.setValues = function(id, title, description, dateCreated, dateDue, priority, selected, completed){
    this.id = id;
    this.title = title;
    this.description = description;
    this.selected = selected;
    this.priority = priority;
    this.completed = completed;
    this.dateCreated = dateCreated;
    this.dateDue = (_addDays(new Date(dateDue), 28));
}

// -------------------------------------------------------------------------- //
function _addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

export const Counter = (function() {
    let count = 0;

    const getCount = function() {
        return count++;
    };

    // used when saving data
    const currentValue = function() {
        return count;
    }

    // used when loading data
    const setCounterValue = function(value) {
        count = value;
    }

    return {
        getCount,
        currentValue,
        setCounterValue
    }
})();
