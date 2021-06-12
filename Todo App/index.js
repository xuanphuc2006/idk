
let activities = JSON.parse(localStorage.getItem("activities"))
if (activities ==  null){
    activities = []
}

for (let i=0; i < activities.length; i++){
    createActionElement(activities[i].name, activities[i].id, activities[i].completed)
}





function createActionElement(action, id, completed){

    //  get ul element 
    const ulElement = document.getElementById("tasks-ul")
    
    // create li element
    const liElement = document.createElement("li")
    liElement.setAttribute("data-id", id)

    // create input element 
    const inputElement = document.createElement('input')
    inputElement.type = "checkbox"
    inputElement.name = action
    inputElement.value = action 
    inputElement.checked = completed

    // create label element 
    const labelElement = document.createElement('label')
    labelElement.htmlFor = action
    labelElement.textContent = action

    labelElement.onclick = changeActionStatus
    // create i element 
    const iElement = document.createElement('i')
    iElement.classList.add("fa", "fa-trash-o", "delete-button")

    iElement.onclick = deleteAction

    liElement.appendChild(inputElement)
    liElement.appendChild(labelElement)
    liElement.appendChild(iElement)

    ulElement.appendChild(liElement)
}

function changeActionStatus(e){
    const selectedLableElement = e.target
    const selectedLiElement = selectedLableElement.parentElement
    const actionid = selectedLiElement.getAttribute("data-id")

    for (let i=0; i < activities.length; i++){
        if ( activities[i].id == actionid){

            activities[i].completed = !activities[i].completed
        }
        
    }
    console.log(activities)
    localStorage.setItem("activities", JSON.stringify(activities))

    const selectedInputElement = selectedLiElement.firstElementChild
    selectedInputElement.checked = !selectedInputElement.checked 


   
}

function deleteAction(e){
    const selectedLableElement = e.target
    const selectedLiElement = selectedLableElement.parentElement
    const actionid = selectedLiElement.getAttribute("data-id")

    let positionId;

    for (let i=0; i < activities.length; i++){
        if ( activities[i].id == actionid){
            positionId = i
        }
    }

    activities.splice(positionId, 1)
    localStorage.setItem("activities", JSON.stringify(activities))

    const ulElement = document.getElementById("tasks-ul")
    ulElement.removeChild(selectedLiElement)
}

function clearAllActions(){

    localStorage.removeItem("activities")

    //  get ul element 
    const ulElement = document.getElementById("tasks-ul")   

    //  get ul element 
    ulElement.innerHTML = ""
}

function  handleSubmit() {
    const inputElement = document.getElementById('task_input')
    const action = inputElement.value
    const errorElement = document.getElementById('error-msg')
    // when input value is empty
    if (action == ""){
        errorElement.style.visibility = "visible" 
    }else {
        errorElement.style.visibility = "hidden" 
        createActionElement(action, activities.length, false )
        inputElement.value = ""
        const activityObject = {
            name: action,
            completed: false,
            id: activities.length
    
        }

        activities.push(activityObject)

        localStorage.setItem("activities", JSON.stringify(activities))
    }
}

const date = document.getElementById ('title-date')
date.innerHTML = new Date().toDateString()

const button = document.getElementById('add-task');
button.onclick = handleSubmit

const deleteButton = document.getElementById ("clear-list")
deleteButton.onclick = clearAllActions