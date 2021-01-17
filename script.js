var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var li = document.createElement("li");
	var createDelete = document.createElement("button");
	div.classList.add("item");
	createDelete.classList.add("delete");
	div.appendChild(li);
	div.appendChild(createDelete);
	li.appendChild(document.createTextNode(input.value));
	createDelete.appendChild(document.createTextNode("X"));
	ul.appendChild(div);
	

	input.value = "";
	createDelete.onclick = deleteRow;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleAfterClick(){
	this.classList.toggle("done");
}

function toggle(){
	var listItems= document.querySelectorAll("li");
		for(i=0; i<listItems.length;i++){
		listItems[i].addEventListener("click", toggleAfterClick);
	}
}
function deleteRow(event){
	event.target.removeEventListener("click", deleteRow);
	event.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggle);

