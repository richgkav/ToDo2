import "./styles.css";
import {App} from "./module-app"
import {Test} from "./module-testdata"

window.onload = main;

function main() {

    // allLists is set to an instance of AllLists
    const allLists = Test.createData();
    //Test.dumpData();

    // set the current list for testing purposes

    //allLists.currentList = allLists.lists[0];

    // Set the App object to use toDoList. This allows for the toDoList to be set
    // to something else easily (loading and saving?)

    App.setToDoList(allLists);

    App.display();
 
}
