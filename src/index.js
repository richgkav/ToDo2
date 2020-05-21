import "./styles.css";
import {App} from "./module-app"
import {Test} from "./module-testdata"

window.onload = main;

function main() {

    const toDoList = Test.createData();

    // force the current list for testing purposes
    toDoList.currentList = toDoList.lists[0];

    // display the current data
    App.setToDoList(toDoList);
    App.displayLists();
    App.displayItems();
}
