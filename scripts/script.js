const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', function() {
    const texto = taskInput.value;
    if (texto === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox" />
        <span>${texto}</span>
        <button class="delete-btn">Eliminar</button>
    `;

    taskList.appendChild(li);

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', function() {
        const span = li.querySelector('span');
        span.classList.toggle('completed');
    });

    taskInput.value = '';
});