$(document).ready(function() {
    const form = $('#formulario-tarefas');
    const input = $('#tarefa-input');
    const taskList = $('#lista-tarefas');

    form.on('submit', function(event) {
        event.preventDefault();
        const taskText = input.val().trim();
        if (taskText !== '') {
            const taskItem = createTaskItem(taskText);
            taskList.append(taskItem);
            input.val('');
        }
    });

    function createTaskItem(taskText) {
        const taskItem = $('<li></li>');
        const checkbox = $('<input type="checkbox">');
        checkbox.on('change', function() {
            const taskTextElement = $(this).siblings('span');
            if (this.checked) {
                taskTextElement.addClass('task-done');
            } else {
                taskTextElement.removeClass('task-done');
            }
        });
        const taskTextElement = $('<span></span>').text(taskText);
        taskItem.append(checkbox);
        taskItem.append(taskTextElement);
        return taskItem;
    }
});