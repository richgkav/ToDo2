const Mob = (function() {

    function AllLists() {

        this.lists = new Array();
        this.currentList = null;
        this.listCounter = 0;           // each list has unique number but might not be the array index

        this.addList = function(list) {
            list.id = this.listCounter++;
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
            //console.log(`Unselect ${this.currentList.title}`);
            this.currentList.selected = false;
            this.currentList = newList;
            //console.log(`Selected ${this.currentList.title}`);
            this.currentList.selected = true;
        }
    }

// -------------------------------------------------------------------------- //
// id is used to refer to the correct List or Item object after a click event

    function List() {
        this.items = [];
        this.id = undefined;            // generated from AllLists.listCounter
        this.itemCounter = 0;           // each item has unique number
        this.currentItem = undefined;

        this.addItem = function(item) {
            item.id = this.itemCounter++;
            this.items.push(item);
        };
    }

    List.prototype.title = "";
    List.prototype.description = "";
    List.prototype.dateCreated = new Date();
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

// -------------------------------------------------------------------------- //
    function Item() {

        this.dateDue = (_addDays(new Date(), 28));
        this.priority = 2;
        this.completed = false;
        this.id = undefined;
    }

    // Set Item prototype to List prototype ("inherit" properties)
    Item.prototype = Object.create(List.prototype);
    // fix constructor back to Item as above instruction sets it to List
    Item.prototype.constructor = Item;

    Item.prototype.renderPropertiesList = function () {
        return {
            title: this.title,
            description: this.description,
            priority: this.priority,
            completed: this.completed,
            id: this.id,
            dateCreated: this.dateCreated,
            dateDue: this.dateDue
        }
    }

// -------------------------------------------------------------------------- //
    function _addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

// -------------------------------------------------------------------------- //
    return {
        AllLists,
        List,
        Item,
    }

})();

export {Mob};