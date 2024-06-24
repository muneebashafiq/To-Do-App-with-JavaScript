var inputBox=document.getElementById("input-box")
var addBtn=document.getElementsByClassName("addBtn")
var listContainer= document.querySelector(".list-container")

function addTask(){
    if(inputBox.value==''){
        alert("Please Write Something :)")
    }

    else{
        let task=document.createElement("div")
        task.classList.add("task")

        let list=document.createElement("li")
        task.classList.add("list")
        list.innerHTML=inputBox.value

        let check=document.createElement("button")
        check.classList.add("check")
        check.classList.add("fa-solid")
        check.classList.add("fa-check")

        let remove=document.createElement("button")
        remove.classList.add("remove")
        remove.classList.add("fa-solid")
        remove.classList.add("fa-trash")

        listContainer.appendChild(task)
        task.appendChild(list)
        task.appendChild(check)
        task.appendChild(remove)

    }
    saveData()
    inputBox.value=''
}

listContainer.addEventListener('click', checkRemove)

function checkRemove(event)
{
    item=event.target

    if(item.classList[0]=="check")
    {
            item.parentElement.classList.toggle("checked")
            saveData()
    }
    else if(item.classList[0]=="remove")
    {
        item.parentElement.remove()
        saveData()
    }
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function loadData(){
    listContainer.innerHTML=localStorage.getItem("data")
}

loadData()