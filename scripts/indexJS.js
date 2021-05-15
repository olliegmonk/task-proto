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

var calendarList = document.getElementById("calendar");
//Adds the month of March to calendar
for (var i = 1; i < 32; i++) {
    calendar.push(new Date(2021, 02, i))
    var nextDay = document.createElement("LI");
    nextDay.setAttribute("class", "day");
    var nextDayText = document.createTextNode(calendar[calendar.length-1].getDate() + " Example Task")
    nextDay.appendChild(nextDayText);
    calendarList.appendChild(nextDay);
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
        //ev.target.classList.toggle("checked"); default checked functionality
        updateTaskPanel(ev.target.id);
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
    li.setAttribute("id", inputTitle);

    var newTask = new Task(inputTitle,  tagParse(inputTags), inputDescription); //creates new Task object
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

function updateTaskPanel(selectedTask) {

    //finds selected task in taskArray
    let task = taskArray.find(task => task.title === selectedTask);

    if (task === null) {
        return
    }

    console.log(taskArray[0]);
    console.log(selectedTask);
    //console.log(task);
    var taskPanel = document.getElementById("taskPanel");
    var taskHeader = document.createElement("DIV");
    var taskTitle = document.createElement("h2");
    var taskTags = document.createElement("p");
    var taskDescription = document.createElement("p");

    taskHeader.setAttribute("class", "headerBar");
    taskTitle.appendChild(document.createTextNode(task.title));
    taskTags.appendChild(document.createTextNode(task.tags));
    taskDescription.appendChild(document.createTextNode(task.description));
    
    taskHeader.appendChild(taskTitle);
    taskHeader.appendChild(taskTags);
    
    console.log(taskPanel);
    taskPanel.innerHTML = "";
    taskPanel.appendChild(taskHeader);
    taskPanel.appendChild(taskDescription);

}