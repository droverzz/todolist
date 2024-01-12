/*Ratthaphoom Patthanayonchai 640510678 */
const inputName = document.getElementById("input-name");
const inputtext = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const div = document.getElementById("alert");
function addTask(){
    if(inputName.value === '' || inputtext.value === ''){
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = "@";
        li.innerHTML += inputName.value;
        li.innerHTML += ":         ";
        li.innerHTML += inputtext.value;
        listContainer.appendChild(li);
        div.removeAttribute("hidden")
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputtext.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);