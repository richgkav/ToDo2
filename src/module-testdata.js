import {Mob} from "./module-objects"

const Test = (function(){

    const toDoList = new Mob.AllLists();

    function createData() {
        const defList = new Mob.List();         // default list
        defList.title = "Default";
        defList.description = "Create todo items in here";

        const item = new Mob.Item();
        
        item.title = "This is a todo item";
        item.description = "It can also have some further information";

        toDoList.addList(defList);
        defList.addItem(item);
        return toDoList;
    }

    function dumpData() {
        toDoList.lists.forEach(listElement => {
            console.log(`${listElement.title} - ${listElement.description} - ${listElement.dateCreated}`);
            listElement.items.forEach(itemElement => {
                console.log(` -- ${itemElement.title} - ${itemElement.description} - ${itemElement.dateCreated} - ${itemElement.dateDue}`);
            });
        });
    }

    return {
        createData,
        dumpData
    };

})();

export {Test};