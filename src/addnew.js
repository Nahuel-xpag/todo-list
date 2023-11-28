import { Project, ToDo } from ".";
import { renderProject, renderToDo } from "./ui";

export function addNew() {


    const newProject = () => {
        //make new card with inputs
        const mainDiv = document.querySelector('.project-div')

        const submit = () => {
            mainDiv.removeChild(project);
            const createdProject = new Project(projectTitle.value);
            renderProject(createdProject);
        }

        const project = document.createElement('div');
        project.classList.add('project-input-div');
        project.classList.add('card')

        const projectTitle = document.createElement('input');
        projectTitle.setAttribute('id', 'new-project-title');
        projectTitle.setAttribute('type', 'text');

        const button = document.createElement('button');
        button.textContent = 'Create new project'
        button.addEventListener('click', () => {
            submit()
        })
        


        project.appendChild(projectTitle);
        project.appendChild(button);

        mainDiv.appendChild(project);
    };

    const newToDo = () => {
        const mainDiv = document.querySelector('.todo-div')

        const submit = () => {
            mainDiv.removeChild(todo);
            const createdToDo = new ToDo(todoTitle.value, todoDesc.value, todoDueDate.value,
                todoPrio.value);
            renderToDo(createdToDo);
        }

        const todo = document.createElement('div');
        todo.classList.add('todo-input-div');
        todo.classList.add('todo-card');

        const todoTitle = document.createElement('input');
        todoTitle.setAttribute('id', 'new-todo-title');
        todoTitle.setAttribute('type', 'text');

        const todoDesc = document.createElement('input');
        todoTitle.setAttribute('id', 'new-todo-desc');
        todoTitle.setAttribute('type', 'text');
        
        const todoDueDate = document.createElement('input');
        todoDueDate.setAttribute('type', 'tel');
        
        const todoPrio = document.createElement('input');
        todoPrio.setAttribute('type', 'tel');

        const button = document.createElement('button');
        button.textContent = 'Create new todo'
        button.addEventListener('click', () => {
            submit()
        })

        todo.appendChild(todoTitle);
        todo.appendChild(todoDesc);
        todo.appendChild(todoDueDate);
        todo.appendChild(todoPrio);
        todo.appendChild(button);

        mainDiv.appendChild(todo);
    }
    return {newProject, newToDo};
}