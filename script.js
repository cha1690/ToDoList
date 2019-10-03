var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength(){
	return input.value.length;
}

function createListItem(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = " ";

li.addEventListener("click", function(){
	var finished = this.classList.toggle("done");
	var removeButton = document.createElement("button");
	removeButton.classList.add("deleteButton");
if (finished) {
			removeButton.appendChild(document.createTextNode("Delete!"));
			removeButton.classList = "deleteButton";
			li.appendChild(removeButton);

			removeButton.addEventListener("click", function() {
				this.parentElement.remove();
			});
		} else {
			this.getElementsByClassName("deleteButton")[0].remove();
		}
	})
	// revert input value back to nothing
	input.value = "";

}

button.addEventListener("click", function(){
	if(inputLength() > 0){
	createListItem();
	}
})

input.addEventListener("keypress", function(event){
	if(inputLength() > 0 && event.keyCode === 13){
	createListItem();
	}
})

