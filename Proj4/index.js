
const inputField = document.querySelector("#inputField");
const addToDo = document.querySelector("#addTodo");
const toDoContainer = document.querySelector("#toDoContainer");

addToDo.addEventListener("click", () => {
    var paragraph = document.createElement("p")
    paragraph.classList.add("paragraph-styling")
    paragraph.innerText = inputField.value
    toDoContainer.appendChild(paragraph);
    inputField.value = " "
    paragraph.addEventListener("click", () => {
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener("dblclick", () => {
        toDoContainer.removeChild(paragraph);
    })
})