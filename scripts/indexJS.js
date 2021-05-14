var nodeList = document.getElementsByTagName("li");

class Task {
    constructor(title, tags, desciption) {
      this.title = title; //string
      this.tags = tags; //array
      this.desciption = desciption; //string
    }
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

var list = document.querySelector("ul");

list.addEventListener("click", function(ev) {
    if(ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

function newElement() {
    var li = document.createElement("li");
    li.setAttribute("id", "task") //used to be input value
    var inputTags = document.getElementById("newTags").value; //need to be parsed
    var inputDescription = document.getElementById("newDescription");
    var t = document.createTextNode(inputValue); 

    li.appendChild(t);

    if (inputValue === "") {
        alert("Input required");
    } else {
        document.getElementById("taskList").appendChild(li);
    }

    document.getElementById("newTask").value = "";

    var span = document.createElement ("SPAN");
    var text = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(text);
    li.appendChild(span);

    for(var i = 0; i < close.length; i++) {
        close[i].oncllick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}