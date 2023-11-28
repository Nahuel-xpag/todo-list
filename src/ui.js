import { todoArr } from ".";
import { addNew } from "./addnew";
import plusIcon from "./262038.png"


export default function projectUi(project){
        const mainDiv = document.querySelector('.project-div');
        const defaultProjectCard = document.querySelector('#default-project');
        const defaultProjectTitle = document.createElement('h2');
        defaultProjectTitle.textContent = project.name;
        
        const defaultProjectDesc = document.createElement('ul');
        project.tasks.forEach((task, tIndex) => {
                const toDoItem = document.createElement('li');
                toDoItem.classList.add('to-do-item');
                toDoItem.dataset.name = 'task' + tIndex;
                toDoItem.innerHTML = 'Task: ' + task.title + `<p class="duedate">Due date: ${task.dueDate}</p>`;

                defaultProjectDesc.appendChild(toDoItem);
        })
        const removeButton = document.createElement('button');
        removeButton.textContent = 'delete project';
        removeButton.addEventListener('click', ()=>{
            mainDiv.removeChild(defaultProjectCard);
        });

        defaultProjectCard.appendChild(defaultProjectTitle);
        defaultProjectCard.appendChild(defaultProjectDesc);
        defaultProjectCard.appendChild(removeButton);
        
        
    }

   export function renderProject(project) {
        const mainDiv = document.querySelector('.project-div');
        const projectCard = document.createElement('div');
        projectCard.classList.add('card');
        
        const projectTitle = document.createElement('h2');
        projectTitle.textContent = project.name;

        const projectDesc = document.createElement('ul');
        project.tasks.forEach((task, tIndex) => {
                const toDoItem = document.createElement('li');
                toDoItem.classList.add('to-do-item');
                toDoItem.dataset.name = 'task' + tIndex;
                toDoItem.innerHTML = 'Task: ' + task.title + `<p class="todo-desc">${task.description}</p>
                                                                <p class="duedate">Due date: ${task.dueDate}</p>`;

                projectDesc.appendChild(toDoItem);
        });

        const addTodo = document.createElement('select');
        addTodo.setAttribute('id', 'select-task');
       
        const defaultOption = document.createElement('option');
            defaultOption.setAttribute('id', 'default-option');
            defaultOption.textContent = 'Add a task to this project';
            addTodo.appendChild(defaultOption);

         todoArr.forEach((task, tIndex) => {
            const todoOption = document.createElement('option');
            todoOption.setAttribute('id', `${tIndex}`);
            todoOption.textContent = task.title;

            addTodo.appendChild(todoOption);
        });

        const addToDoButton = document.createElement('button');
        addToDoButton.textContent = 'add task';
        addToDoButton.addEventListener('click', () => {
        const selectedIndex = addTodo.selectedIndex;
        mainDiv.removeChild(projectCard);
        project.addToDo(todoArr[addTodo.options[selectedIndex].id]);
        renderProject(project);
        })


        const removeButton = document.createElement('button');
        removeButton.textContent = 'delete project';
        removeButton.addEventListener('click', ()=>{
            mainDiv.removeChild(projectCard);
        });

        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDesc);
        projectCard.appendChild(addTodo);
        projectCard.appendChild(addToDoButton);
        projectCard.appendChild(removeButton);
        mainDiv.appendChild(projectCard);
    }

   export function renderToDo(todo){
        const mainDiv = document.querySelector('.todo-div');

        const todoCard = document.createElement('div');
        todoCard.classList.add('todo-card');

        const todoTitle = document.createElement('h2');
        todoTitle.textContent = todo.title;

        const todoDesc = document.createElement('p');
        todoDesc.textContent = `Description: ${todo.description}`;
        
        const todoDueDate = document.createElement('p')
        todoDueDate.textContent =  `Due Date: ${todo.dueDate}`;
        
        const todoPrio = document.createElement('p');
        todoPrio.textContent = `Priority: ${todo.priority}`;

        const todoStatus = document.createElement('h4');
        todoStatus.textContent = `Status: ${todo.status}`;

        const button = document.createElement('button');
        button.textContent = 'Mark/unmark complete'
        button.addEventListener('click', () => {
            todo.finished();
            mainDiv.removeChild(todoCard);
            renderToDo(todo);
        })
        

        const removeButton = document.createElement('button');
        removeButton.textContent = 'delete Task';
        removeButton.addEventListener('click', ()=>{
            mainDiv.removeChild(todoCard);
        })
        todoCard.appendChild(todoTitle);
        todoCard.appendChild(todoDesc);
        todoCard.appendChild(todoDueDate);
        todoCard.appendChild(todoPrio);
        todoCard.appendChild(todoStatus);
        todoCard.appendChild(button);
        todoCard.appendChild(removeButton);
        mainDiv.appendChild(todoCard);
    };
//render the functions to add new projects and tasks to the DOM
export function renderAddNew() {
    const add = addNew();
    const project = () => {
        const mainDiv = document.querySelector('.project-div');
        const projectCard = document.createElement('div');
        projectCard.classList.add('add-new-project-card');
        const title = document.createElement('h2');
        title.textContent = 'Create new project';
        const icon = new Image();
        icon.src = plusIcon;
        
        projectCard.addEventListener('click', () => {
            add.newProject();
        })
        projectCard.appendChild(title);
        projectCard.appendChild(icon);
        mainDiv.appendChild(projectCard);
    }

    const todo = () => {
        const add = addNew();

        const mainDiv = document.querySelector('.todo-div');

        const todoCard = document.createElement('div');
        todoCard.classList.add('add-new-todo-card');
        const title = document.createElement('h2');
        title.textContent = 'Create new task';
        const icon = new Image();
        icon.src = plusIcon;

        todoCard.addEventListener('click', () => {
            add.newToDo();
        })

        todoCard.appendChild(title);
        todoCard.appendChild(icon);
        mainDiv.appendChild(todoCard);
    }
    return {project, todo}
}

