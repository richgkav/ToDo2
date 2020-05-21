import {Mob} from "./module-objects"

const Test = (function(){

    const allLists = new Mob.AllLists();

    function createData() {
        const defaultList = new Mob.List();         // default list
        defaultList.title = "Default";
        defaultList.description = "Create todo items in here";
        defaultList.selected = true;
        allLists.currentList = defaultList;
        allLists.addList(defaultList);

        const item1 = new Mob.Item();
        item1.title = "This is a todo item";
        item1.description = "It can also have some further information";
        defaultList.addItem(item1);

        const item2 = new Mob.Item();
        item2.title = "Cut the grass";
        item2.description = "";
        defaultList.addItem(item2);

        const anotherList = new Mob.List();
        anotherList.title = "Another list";
        anotherList.description = "A second list for testing purposes";
        allLists.addList(anotherList);

        const item3 = new Mob.Item();
        item3.title = "A task for today";
        item3.description = "Here is something to do in the other list";
        anotherList.addItem(item3);

        return allLists;
    }

    function dumpData() {
        allLists.lists.forEach(listElement => {
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