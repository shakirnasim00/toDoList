const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === ''){  //If input box is empty when add is clicked, alert.
        alert("You must add a task!")
    } else{ 
        let li = document.createElement("li"); //Else will create a new li element and set the value to be the value of input. Appends to UL.
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //Resets input box to blank
    saveData(); //Saves content to browser
}

function handleEnterKey(event) { // Allows for Enter key to be used to add an item as well.
    if (event.key === 'Enter') {
        event.preventDefault();

        if(inputBox.value === ''){ 
            alert("You must add a task!")
        } else{ 
            let li = document.createElement("li"); 
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);

            inputBox.value = ""; //Resets input box to blank
            saveData(); //Saves content to browser
        }
    }
   
}

document.addEventListener('keydown', handleEnterKey);


listContainer.addEventListener("click", function(e){  //Applys event listener on list container for click on either list item to Check or X to remove.
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);





function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); //Saves the innerHTML Content of the ListContainer variable to local storage
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); // Calls data from local storage upon load.
}

showTask(); 