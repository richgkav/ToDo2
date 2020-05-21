const Mob = (function() {

    function AllLists() {

        this.lists = new Array();
        this.currentList = null;

        this.addList = function(list) {
            this.lists.push(list);
        };
    }

// -------------------------------------------------------------------------- //
    function List() {
        this.items = [];

        this.addItem = function(item) {
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
            selected: this.selected
        }; // needs object format
    }

// -------------------------------------------------------------------------- //
    function Item() {

        this.dateDue = (_addDays(new Date(), 28));
        this.priority = 2;
        this.completed = false;
        //this.selected = false;
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
            selected: this.selected
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