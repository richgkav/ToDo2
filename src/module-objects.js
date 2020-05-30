const Mob = (function() {

    class AllLists {

        constructor () {
            this.lists = [];
            this.currentList = new List();
            this.listCounter = 0;
        }

        addList(list) {
            list.id = "todolist_" + this.listCounter++;
            this.setCurrentList(list);
            this.lists.push(list);
        }

        getListWithId(id) {
            for (let i = 0; i != this.lists.length; i++) {
                if (this.lists[i].id === id) {
                    return this.lists[i];
                }
            }
            return false;
        }

        setCurrentList(newList) {
            this.currentList.selected = false;
            this.currentList = newList;
            this.currentList.selected = true;
        }
    }

// -------------------------------------------------------------------------- //
// id is used to refer to the correct List or Item object after a click event

    class List {

        constructor () {
            this.items = [];
            this.id = undefined;          // generated from AllLists.listCounter
            this.currentItem = undefined;
            this.dateCreated = new Date();
            this.title = "";
            this.description = "";        // currently unused in List
            this.selected = false;
        }

        addItem(item) {
            item.id = "todoitem_" + Counter.getCount();
            item.parentId = this.id;    // used in save & load matching
            this.items.push(item);
        }

        renderProperties() {
            return {
                title: this.title,
                selected: this.selected,
                id: this.id
            };
        }

        getItemWithId(id) {
            for (let i = 0; i != this.items.length; i++) {
                if (this.items[i].id === id) {
                    return this.items[i];
                }
            }
            return false;
        }

        setValues(id, currentItem, title, description, dateCreated, selected) {
            this.id = id;
            this.currentItem = currentItem;
            this.title = title;
            this.description = description;
            this.dateCreated = new Date(dateCreated);     // not in prototype as not gettings saved
            this.selected = selected;
        }
    }

// -------------------------------------------------------------------------- //

    class Item {
        constructor() {
            this.description = "";
            this.dateCreated = new Date();
            this.dateDue = (_addDays(new Date(), 28));
            this.priority = 2;
            this.completed = false;
            this.id = undefined;   
            this.selected = false;
            this.description = "";
        }

        setValues(id, title, description, dateCreated, dateDue, priority, selected, completed){
            this.id = id;
            this.title = title;
            this.description = description;
            this.selected = selected;
            this.priority = priority;
            this.completed = completed;
            this.dateCreated = dateCreated;
            this.dateDue = (_addDays(new Date(dateDue), 28));
        }
    }

// -------------------------------------------------------------------------- //
    
    const _addDays = function _addDaysToDateObject(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    const Counter = (function() {
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

// -------------------------------------------------------------------------- //
    return {
        AllLists,
        List,
        Item,
        Counter
    }

})();

export {Mob};