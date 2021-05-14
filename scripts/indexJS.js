var nodeList = document.getElementsByClassName("task");
var calendar = [];

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

var close = document.getElementsByClassName("close");

for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

var list = document.getElementById("taskList");

list.addEventListener("click", function(ev) {
    if(ev.target.className === "task") {
        ev.target.classList.toggle("checked");
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    li.setAttribute("class", "task") //used to be input value
    var inputTitle = document.getElementById("newTitle").value;
    var inputTags = document.getElementById("newTags").value; 
    var inputDescription = document.getElementById("newDescription").value;
    var t = document.createTextNode(inputTitle); 

    li.appendChild(t);

    if (inputTitle === "") {
        alert("Input required");
    } else {
        document.getElementById("taskList").appendChild(li);
    }

    document.getElementById("newTitle").value = "";

    var span = document.createElement ("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(text);
    li.appendChild(span);

    for(var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function tagParse(inputTags) {
    inputTags = inputTags.replace(" ", "");
    inputTags = inputTags.split(",");
    return inputTags;
}