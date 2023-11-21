import { compareAsc, format } from "date-fns";

class Project {
    constructor(name){
        this.name = name
    }
    tasks = []
    addToDo(todo) {
        this.tasks.push(todo);
    }
    removeToDo(todo){
        this.tasks.map((o, i) => {
            if (o.title === todo.title) {
                this.tasks.splice(i, 1);
            }
        })
        
    }
    print() {
        console.log(this.name);
        this.tasks.sort((a, b) => {
            return a.priority - b.priority
        })
        this.tasks.map((o) => {
            console.log(o.title);
            console.log(o.status);
        })
    }
};

const defaultProject = new Project('default project');
class ToDo {
    status = 'in progress';
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = format( new Date(dueDate), 'dd-MM-yyyy');
        this.priority = priority;
        defaultProject.addToDo(this);
    }
    addToProject(project){
        project.addToDo(this)
    }
    print() {
        if (this.status !== 'completed') {
        console.log('Title: ' + this.title);
        console.log('Description: ' + this.description);
        console.log('Due date: ' + this.dueDate);
        console.log('Priority: ' + this.priority);
        }
        else console.log('task completed!')
        
    }
    finished() {
        this.status = 'completed';
    }
    changePriority(prio) {
        this.priority = prio;
    }
};


const walkTheDog = new ToDo('Walk the dog',
 'take the dog for a walk in the park', '2023, 10, 17', 2);



const walkTheCat = new ToDo('walk the cat', 'take the cat for a walk in the park',
'2023, 10, 18', 1);

const walkTheTurtle = new ToDo('Walk the turtle',
 'take the turtle for a walk in the park', '2023, 10, 17', 3);

const testProject = new Project('Walk pets');
testProject.addToDo(walkTheDog);
testProject.addToDo(walkTheCat);
testProject.addToDo(walkTheTurtle);
testProject.print();
testProject.removeToDo(walkTheTurtle);
testProject.print();
