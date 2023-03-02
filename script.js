
let mainForm = document.getElementById("main-form")



let formValue = document.getElementById("content-input")

let submitBtn = document.getElementById("submit-btn")

let taskList = document.getElementById("task-list")

let noTasks = document.getElementById("no-tasks-for-now")

let invalidInput = document.getElementById("invalid-form-value")


taskList.style.display = "none"

invalidInput.style.display = "none"



noTasks.style.display = "block"
noTasks.innerHTML = "No tasks for now..."


let newTask




submitBtn.addEventListener("click", () => {

    event.preventDefault()


    noTasks.style.display = "none"


    if (formValue.value == "") {
        invalidInput.style.display = "block"
    } else {

        invalidInput.style.display = "none"

        let taskName = formValue.value    
        newTask = document.createElement("div")
        
        
        newTask.innerHTML = `
            <div class="each-task-container">
                <div>${taskName}</div>
                <div><button type="submit" id="remove-task-btn" onclick="removeTask()">Delete</button></div>
            </div>
        `

        formValue.value = ""




        taskList.style.display = "block"    

        taskList.appendChild(newTask)






    }
})



function removeTask() {
    newTask.remove()
}