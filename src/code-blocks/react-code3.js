var toDoList = document.querySelector("#todo-list")
var list = document.createElement("ul")

toDoItems.forEach((item) => {
    var title = document.createElement("a")
    title.href = "/task/" + item.id
    title.innerText = item.title

    var added = document.createElement("div")
    added.innerHTML = item.added

    var deadline = document.createElement("div")
    deadline.innerHTML = item.deadline

    var listItem = document.createElement("li")
    listItem.appendChild(title)
    listItem.appendChild(added)
    listItem.appendChild(deadline)

    list.appendChild(listItem)
})

toDoList.appendChild(list)