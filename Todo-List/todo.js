function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = taskText;
  span.onclick = () => li.classList.toggle('completed');

  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'task-buttons';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.onclick = () => {
    const newText = prompt('Edit task:', span.textContent);
    if (newText !== null) span.textContent = newText;
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => li.remove();

  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonsDiv);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}