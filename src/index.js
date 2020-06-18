import "./styles.css";
import * as App from "./module-app"
//import {Test} from "./module-testdata"

window.onload = main;

function main() {

    //App.setToDoList(Test.createData());
    //App.saveData();

    App.setupDisplayElements();
    App.setToDoList(App.loadData());
    App.display();
 
}
