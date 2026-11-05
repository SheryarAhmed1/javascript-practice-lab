const taskInput = document.querySelector('#taskInput');
const addbtn = document.querySelector('#addbtn');
const div = document.querySelector('#last');
const ul = document.querySelector('#taskList');

addbtn.addEventListener('click', function () {

    const container = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const li = document.createElement('li');

    li.textContent = taskInput.value;
    container.className = 'list-none flex justify-between items-center p-3 bg-white rounded-lg border border-gray-200';
    li.prepend(checkbox);
    checkbox.className = 'mx-2'
    container.prepend(li);
    ul.prepend(container);
    taskInput.value = '';

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            li.classList.add('line-through');
        } else {
            li.classList.remove('line-through');
        }
    });

    //Buttons Container
    const btnContainer = document.createElement('button');
    btnContainer.className = 'flex gap-2';
    //Edit Button
    const edit = document.createElement('button');
    edit.textContent = 'Edit';
    edit.className = 'bg-blue-500 py-1 px-3 rounded-lg font-bold text-white cursor-pointer hover:bg-blue-600 transition-colors';

    //Delete Button
    const dbtn = document.createElement('button');
    dbtn.textContent = 'Delete';
    dbtn.className = 'bg-red-500 py-1 px-3 rounded-lg font-bold text-white cursor-pointer hover:bg-red-600 transition-colors';

    btnContainer.prepend(edit);
    btnContainer.append(dbtn);
    container.appendChild(btnContainer);

    edit.addEventListener('click', function () {
        taskInput.value = li.textContent;
        container.remove();
        addbtn.textContent = 'Update Task';
    });

    dbtn.addEventListener('click', function () {
        container.remove();
    });
});