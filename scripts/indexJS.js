//global variables
var nodeList = document.getElementsByClassName("task"); //HTML <li> task elements
var taskArray = [] //JS Task objects
var calendar = []; //dates used by calendar panel

//Task object
class Task {
    constructor(title, tags, desciption) {
      this.title = title; //string
      this.tags = tags; //array
      this.desciption = desciption; //string
    }
  }

//Adds the month of March to calendar
for (var i = 1; i < 32; i++) {
    calendar.push(new Date(2021, 03, i))
}

for (var i = 0; i < nodeList.length; i++) {
    var span = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    
    span.className = "close";
    span.appendChild(text);

    nodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close"); //holds CSS class

//loop listening for click on x
for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.getElementById("taskList");

//event listening for click on <li> task element
list.addEventListener("click", function(ev) {
    if(ev.target.className === "task") {
        ev.target.classList.toggle("checked");
    }
}, false);

function newElement() {

    var li = document.createElement("li"); //creates new <li> element
    li.setAttribute("class", "task") //sets new element to class task
    
    //retrives data from input boxes 
    var inputTitle = document.getElementById("newTitle").value;
    var inputTags = document.getElementById("newTags").value; 
    var inputDescription = document.getElementById("newDescription").value;

    var t = document.createTextNode(inputTitle); //formats text for HTML
    li.appendChild(t); //adds formatted text to new <li> element

    if (inputTitle === "") {
        alert("Input required");
    } else {
        document.getElementById("taskList").appendChild(li);
    }

    //resets input  boxes to empty values
    document.getElementById("newTitle").value = "";
    document.getElementById("newTags").value = "";
    document.getElementById("newDescription").value = "";

    //formats new <li> element with x symbol
    var span = document.createElement ("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(text);
    li.appendChild(span);

    var newTask = new Task(inputTitle,  inputTags, inputDescription); //creates new Task object
    taskArray.push(newTask); //adds new task to array

    //when user clicks x on a task
    for(var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//seperates tags into seperate array entities
function tagParse(inputTags) {
    inputTags = inputTags.replace(" ", "");
    inputTags = inputTags.split(",");
    return inputTags;
}