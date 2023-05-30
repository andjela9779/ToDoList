const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");

      function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.className = "taskItem";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toggleTaskCompletion);

        const taskLabel = document.createElement("label");
        taskLabel.textContent = taskText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", deleteTask);

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);

        taskInput.value = "";
      }

      function toggleTaskCompletion(event) {
        const taskLabel = event.target.nextSibling;
        if (event.target.checked) {
          taskLabel.parentElement.classList.add("completed");
        } else {
          taskLabel.parentElement.classList.remove("completed");
        }
      }

      function deleteTask(event) {
        const taskItem = event.target.parentNode;
        taskList.removeChild(taskItem);
      }

      const addButton = document.getElementById("addButton");
      addButton.addEventListener("click", addTask);