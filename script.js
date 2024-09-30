function addTask() {
    let taskInput = document.getElementById("task-input");
    let taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      let taskList = document.getElementById("task-list");
      let listItem = document.createElement("li");
  
      listItem.innerHTML = `${taskText} <span onclick="removeTask(this)">X</span>`;
      taskList.appendChild(listItem);
      taskInput.value = "";
    }
  }
  
  function removeTask(task) {
    let listItem = task.parentElement;
    listItem.remove();
  }
  