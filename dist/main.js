!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){var i=n(1),r=n(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};i(r,o);t.exports=r.locals||{}},function(t,e,n){"use strict";var i,r=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),d=[];function s(t){for(var e=-1,n=0;n<d.length;n++)if(d[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},i=[],r=0;r<t.length;r++){var o=t[r],c=e.base?o[0]+e.base:o[0],a=n[c]||0,l="".concat(c," ").concat(a);n[c]=a+1;var u=s(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(d[u].references++,d[u].updater(p)):d.push({identifier:l,updater:v(p,e),references:1}),i.push(l)}return i}function a(t){var e=document.createElement("style"),i=t.attributes||{};if(void 0===i.nonce){var r=n.nc;r&&(i.nonce=r)}if(Object.keys(i).forEach((function(t){e.setAttribute(t,i[t])})),"function"==typeof t.insert)t.insert(e);else{var d=o(t.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(e)}return e}var l,u=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,i){var r=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(t.styleSheet)t.styleSheet.cssText=u(e,r);else{var o=document.createTextNode(r),d=t.childNodes;d[e]&&t.removeChild(d[e]),d.length?t.insertBefore(o,d[e]):t.appendChild(o)}}function m(t,e,n){var i=n.css,r=n.media,o=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var f=null,h=0;function v(t,e){var n,i,r;if(e.singleton){var o=h++;n=f||(f=a(e)),i=p.bind(null,n,o,!1),r=p.bind(null,n,o,!0)}else n=a(e),i=m.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var i=0;i<n.length;i++){var r=s(n[i]);d[r].references--}for(var o=c(t,e),a=0;a<n.length;a++){var l=s(n[a]);0===d[l].references&&(d[l].updater(),d.splice(l,1))}n=o}}}},function(t,e,n){(e=n(3)(!1)).push([t.i,"* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', Arial, sans-serif;\r\n}\r\n\r\n#top-bar {\r\n    width: 100%;\r\n    height: 60px;\r\n    line-height: 60px;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n#main-div, #menu-bar, #function-div{\r\n    min-width: 500px;\r\n    max-width: 900px;\r\n    height: auto;\r\n    display: grid;\r\n    grid-template-columns: 1fr 4fr;\r\n    margin: 0 auto;\r\n}\r\n\r\n#main-div {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n#items-menu {\r\n    display: grid;\r\n    grid-template-columns: 4fr 1fr 1fr;\r\n}\r\n\r\n#menu-bar h2 {\r\n    padding: 5px;\r\n}\r\n\r\n#list-container, #items-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#lists-container, #items-container{\r\n    height: auto;\r\n}\r\n\r\n.list-element {\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.list-element:hover {\r\n    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.item-element {\r\n    display: grid;\r\n    grid-template-columns: 4fr 1fr 1fr;\r\n}\r\n\r\n.item-element>div {\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    margin: 5px 5px 0 5px;\r\n}\r\n\r\n.item-element>div:hover {\r\n    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n#lists-functions, #items-functions, #item-editor {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: start;\r\n}\r\n\r\n#lists-functions>div, #items-functions>div, .buttons {\r\n    width: fit-content;\r\n    padding: 5px;\r\n    border-style: solid;\r\n    border-width: 1px;  \r\n    margin-left: 5px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#lists-functions>div:hover {\r\n    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n#items-functions>div:hover {\r\n    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.buttons:hover{\r\n    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n.buttons {\r\n    width: 80px;\r\n}\r\n\r\n#item-editor {\r\n    flex-direction: column;\r\n    width: 500px;\r\n    margin: 0 auto;\r\n}\r\n\r\n#item-editor>label {\r\n    font-size: larger;\r\n}\r\n\r\n#item-editor>input {\r\n    margin: 5px 0 5px 0;\r\n    font-size: large;\r\n    padding: 3px;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#item-editor>input:hover {\r\n    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75); \r\n}\r\n\r\n#item-editor>.buttons {\r\n    margin: 5px 0 5px 0;\r\n    text-align: center;\r\n}\r\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(d=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=i.sources.map((function(t){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([r]).join("\n")}var d,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,i){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var d=this[o][0];null!=d&&(r[d]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);i&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},function(t,e,n){"use strict";n.r(e);n(0);const i=function(){function t(){this.items=[],this.id=void 0,this.itemCounter=0,this.currentItem=void 0,this.addItem=function(t){t.id=this.itemCounter++,this.items.push(t)}}function e(){var t,e,n;this.dateDue=(t=new Date,e=28,(n=new Date(t)).setDate(n.getDate()+e),n),this.priority=2,this.completed=!1,this.id=void 0}return t.prototype.title="",t.prototype.description="",t.prototype.dateCreated=new Date,t.prototype.selected=!1,t.prototype.renderProperties=function(){return{title:this.title,selected:this.selected,id:this.id}},t.prototype.getItemWithId=function(t){for(let e=0;e!=this.items.length;e++)if(this.items[e].id===t)return this.items[e];return!1},e.prototype=Object.create(t.prototype),e.prototype.constructor=e,{AllLists:function(){this.lists=new Array,this.currentList=null,this.listCounter=0,this.addList=function(t){t.id=this.listCounter++,this.lists.push(t)},this.getListWithId=function(t){for(let e=0;e!=this.lists.length;e++)if(this.lists[e].id===t)return this.lists[e];return!1},this.setCurrentList=function(t){this.currentList.selected=!1,this.currentList=t,this.currentList.selected=!0}},List:t,Item:e}}(),r=function(){function t(t,e){const n=document.createElement("div");return t&&(n.id=t),e&&(n.innerHTML=e),n}function e(t){return document.getElementById(t)}function n(t){const e=document.createElement("H2");return t&&(e.innerHTML=t),e}function i(){const t=document.getElementById("content");return d(t),t}function r(t,e,n){const i=document.createElement("label");i.setAttribute("for",e),i.innerHTML=t;const r=document.createElement("input");return r.setAttribute("type","text"),r.setAttribute("name",e),r.id=e,n&&(r.value=n),{label:i,input:r}}return{renderList:function(t){const e=document.getElementById("lists-container"),n=document.createElement("div");n.classList.add("list-element"),n.innerHTML=t.title,t.selected&&(n.style.backgroundColor="#f7e3e3"),o.addListClickEvent(n,t.id),e.appendChild(n)},clearList:function(){d(document.getElementById("lists-container"))},renderItem:function(t){const e=document.getElementById("items-container"),n=document.createElement("div");n.classList.add("item-element"),e.appendChild(n),t.completed&&(n.style.backgroundColor="#f7e3e3");const i=document.createElement("div");i.innerHTML=t.title,n.appendChild(i),o.addEditItemClickEvent(i,t.id);const r=document.createElement("div");r.innerHTML=t.priority,n.appendChild(r),o.addItemPriorityClickEvent(r,t.id);const d=document.createElement("div");d.innerHTML=t.completed,n.appendChild(d),o.addItemCompleteClickEvent(d,t.id)},clearItems:function(){d(document.getElementById("items-container"))},clearContent:i,renderListsFunctions:function(){const n=e("lists-functions"),i=t(null,"Add List");n.appendChild(i),o.addNewFolderClickEvent(i);const r=t(null,"Delete List");n.appendChild(r),o.deleteFolderClickEvent(r)},renderItemsFunctions:function(){const e=document.getElementById("items-functions"),n=t(null,"Add Item");e.appendChild(n),o.addNewItemClickEvent(n)},renderMenuBarDivs:function(){const i=e("content"),r=t("menu-bar"),o=t("lists-menu"),d=t("items-menu"),s=n("Menu"),c=n("Items"),a=n("Priority"),l=n("Completed");i.appendChild(r),r.appendChild(o),o.appendChild(s),r.appendChild(d),d.appendChild(c),d.appendChild(a),d.appendChild(l)},renderFunctionBarDivs:function(){const n=e("content"),i=t("function-div"),r=t("lists-functions"),o=t("items-functions");n.appendChild(i),i.appendChild(r),i.appendChild(o)},renderMainDivs:function(){const n=e("content"),i=t("main-div"),r=t("lists-container"),o=t("items-container");n.appendChild(i),i.appendChild(r),i.appendChild(o)},renderItemEditor:function(e){const n=i(),d=t("item-editor"),s=r("Title","item-title",e.title),c=r("Description","item-description",e.description),a=document.createElement("label");a.setAttribute("for","due-date"),a.innerHTML="Due Date";const l=document.createElement("input");l.setAttribute("type","date"),l.setAttribute("name","due-date");let u=e.dateDue.toLocaleDateString("en-UK",{year:"numeric",month:"2-digit",day:"2-digit"});u=u.split("/"),u=[u[2],u[0],u[1]],l.value=u.join("-");const p=document.createElement("label");p.innerHTML="Priority";const m=document.createElement("div");m.classList.add("buttons"),m.innerHTML=e.priority,o.addEditPriorityClickEvent(m,e);const f=document.createElement("label");u=e.dateCreated.toLocaleDateString("en-UK"),u=u.split("/"),u=[u[1],u[0],u[2]],f.innerHTML="Date created "+u.join("/");const h=t();h.classList.add("buttons"),h.innerHTML="Submit",o.editItemSubmitEvent(h,e),n.appendChild(d),d.appendChild(s.label),d.appendChild(s.input),d.appendChild(c.label),d.appendChild(c.input),d.appendChild(a),d.appendChild(l),d.appendChild(p),d.appendChild(m),d.appendChild(f),d.appendChild(h)}};function d(t){for(;t.firstChild;)t.removeChild(t.lastChild)}}(),o=function(){let t=void 0;function e(){r.clearContent(),r.renderMenuBarDivs(),r.renderMainDivs(),r.renderFunctionBarDivs(),n(),o(),r.renderListsFunctions(),r.renderItemsFunctions()}function n(){void 0!==t&&(r.clearList(),t.lists.forEach(t=>{r.renderList(t.renderProperties())}))}function o(){if(void 0!==t){const e=t.currentList;null!==e&&(r.clearItems(),e.items.forEach(t=>{r.renderItem(t)}))}}return{display:e,setToDoList:function(e){e?t=e:console.log("AllLists object not set.")},addListClickEvent:function(e,i){e.addEventListener("click",(function(){const e=t.getListWithId(i);t.setCurrentList(e),n(),o()}))},addEditItemClickEvent:function(e,n){e.addEventListener("click",(function(){const e=t.currentList.getItemWithId(n);r.renderItemEditor(e)}))},addItemCompleteClickEvent:function(e,n){e.addEventListener("click",(function(){const e=t.currentList.getItemWithId(n);e.completed?e.completed=!1:e.completed=!0,o()}))},addItemPriorityClickEvent:function(e,n){e.addEventListener("click",(function(){const e=t.currentList.getItemWithId(n);e.priority+=1,4===e.priority&&(e.priority=1),o()}))},addEditPriorityClickEvent:function(t,e){t.addEventListener("click",(function(){e.priority+=1,4===e.priority&&(e.priority=1),r.renderItemEditor(e)}))},addNewFolderClickEvent:function(e){e.addEventListener("click",(function(){const e=new i.List;e.title="A new list",e.description="Adding a new list",t.addList(e),n(),o()}))},deleteFolderClickEvent:function(e){e.addEventListener("click",(function(){if(window.confirm(`Delete the list named "${t.currentList.title}"?`)){const e=t.currentList.id,r=t.lists.findIndex(t=>t.id===e);if(t.currentList.items=[],t.lists.splice(r,1),t.lists.length>0)t.currentList=t.lists[0],t.currentList.selected=!0;else{const e=new i.List;e.title="Default",e.selected=!0,t.currentList=e,t.addList(e)}n(),o()}}))},addNewItemClickEvent:function(e){e.addEventListener("click",(function(){const e=new i.Item;e.title="New item test",e.description="Bla bla bla",t.currentList&&t.currentList.addItem(e),r.renderItemEditor(e)}))},setupElementsForMain:function(){r.renderMenuBarDivs(),r.renderMainDivs(),r.renderFunctionBarDivs()},editItemSubmitEvent:function(t,n){t.addEventListener("click",(function(){const t=document.getElementById("item-title"),i=document.getElementById("item-description");t&&(n.title=t.value),i&&(n.description=i.value),e()}))}}}(),d=function(){const t=new i.AllLists;return{createData:function(){const e=new i.List;e.title="Default",e.description="Create todo items in here",e.selected=!0,t.currentList=e,t.addList(e);const n=new i.Item;n.title="This is a todo item",n.description="It can also have some further information",e.addItem(n);const r=new i.Item;r.title="Cut the grass",r.description="",e.addItem(r);const o=new i.List;o.title="Another list",o.description="A second list for testing purposes",t.addList(o);const d=new i.Item;return d.title="A task for today",d.description="Here is something to do in the other list",o.addItem(d),t},dumpData:function(){t.lists.forEach(t=>{console.log(`${t.title} - ${t.id} - ${t.description} - ${t.dateCreated}`),t.items.forEach(t=>{console.log(` -- ${t.title} - ${t.id} - ${t.description} - ${t.dateCreated} - ${t.dateDue}`)})})}}}();window.onload=function(){const t=d.createData();o.setToDoList(t),o.setupElementsForMain(),o.display()}}]);