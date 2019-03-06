let todolist = [
  {
    id: 1 ,
    name: `task 1` ,
    complete: false
  },

  {
    id: 2 ,
    name: `task 2` ,
    complete: true
  },

  {
    id: 3 ,
    name: `task 3` ,
    complete: false
  },

  {
    id: 4 ,
    name: `task 4` ,
    complete: true
  },

  {
    id: 5 ,
    name: `task 5` ,
    complete: false
  },

  {
    id: 6 ,
    name: `task 6` ,
    complete: false
  },


]

for (var i = 0; i < todolist.length; i++) {

  let currentTask = document.getElementById(`task${todolist[i].id}`);

  currentTask.innerHTML = todolist[i].name;

  if (todolist[i].complete) {
    currentTask.classList.add("taskCompleted")
  } else {
    currentTask.classList.remove("taskCompleted")
  }
}
