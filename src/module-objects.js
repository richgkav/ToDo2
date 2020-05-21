const Mob = (function() {

    function AllLists() {

        this.lists = new Array();
        this.currentList = null;
        this.listCounter = 0;           // each list has unique number

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
            console.log(`Unselect ${this.currentList.title}`);
            this.currentList.selected = false;
            this.currentList = newList;
            console.log(`Select ${this.currentList.title}`);
            this.currentList.selected = true;
        }
    }

// -------------------------------------------------------------------------- //
    function List() {
        this.items = [];
        this.id = undefined;            // generated from AllLists.listCounter
        this.itemCounter = 0;           // each item has unique number

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
            priority: this.priority,
            completed: this.completed,
            selected: this.selected,
            id: this.id
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