
function completeTask(buttonId, taskId) {
    const recent = numberFromString("recent-task");
    const total_task = numberFromString("tasks");

    const presentTask = recent - 1;
    const updatedTotalTask = total_task - 1; 

    document.getElementById("tasks").innerText = updatedTotalTask;
    document.getElementById("recent-task").innerText = presentTask;


    const button = document.getElementById(buttonId);
    button.disabled = true;
    button.style.backgroundColor = "gray";
    button.style.cursor = "default";


    alert("Board Completed Successfully");

 
    const title = document.getElementById(taskId);
    const activityLog = document.getElementById("log");

    const div = document.createElement("div");
    div.innerHTML = `
        <div class="bg-[#F4F7FF] rounded-lg p-4">
            <p>You've completed the task ${title.innerText} at ${new Date().toLocaleTimeString()}</p>
        </div>
    `;

    activityLog.appendChild(div);


    if (presentTask === 0) {
        alert("Congrats! You've completed all current tasks!");
    }
}


document.getElementById("complete-btn-1").addEventListener("click", function () {
    completeTask("complete-btn-1", "task-1");
});
document.getElementById("complete-btn-2").addEventListener("click", function () {
    completeTask("complete-btn-2", "task-2");
});
document.getElementById("complete-btn-3").addEventListener("click", function () {
    completeTask("complete-btn-3", "task-3");
});
document.getElementById("complete-btn-4").addEventListener("click", function () {
    completeTask("complete-btn-4", "task-4");
});
document.getElementById("complete-btn-5").addEventListener("click", function () {
    completeTask("complete-btn-5", "task-5");
});
document.getElementById("complete-btn-6").addEventListener("click", function () {
    completeTask("complete-btn-6", "task-6");
});


function numberFromString(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value, 10);
    return isNaN(convertedValue) ? 0 : convertedValue;
}
