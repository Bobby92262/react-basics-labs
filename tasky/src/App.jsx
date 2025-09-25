import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';




function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority:"Low", done: false},
      { id: 2, title: "Laundry", description: "Fold clothes and put away", priority:"Medium", deadline: "Tomorrow", done: false},
      { id: 3, title: "Tidy up", deadline:"Today", priority:"High", done: false}
    ]
  });

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: ""
  });

  const priorityColors = {
    High : 'red',
    Medium : 'orange',
    Low : 'yellow',
  };

  const doneHandler = (taskIndex) => { 
    const tasks = [...taskState.tasks]; //spread operator used to copy
    tasks[taskIndex].done = !tasks[taskIndex].done; //sets it to opposit of its state
    setTaskState({tasks}); //set state to updated tasks array
    //console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks})
  }

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      case "priority":
        form.priority = event.target.value;
        break;
      default:
        form = formState;
    }
    setFormState(form);
    
  }
  console.log(formState);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();
    
    tasks.push(form);
    setTaskState({tasks});
  }



  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task, index) => ( //map() function on tasks array in the taskState object
        <Task //Arrow function into the map method, param 'task' represents "task" array element
          title={task.title} //For every task in taskState.tasks array create a <Task /> component
          description={task.description} //Pass props for the current task (title,description,deadline)
          deadline={task.deadline}
          priority={task.priority}
          priorityColors={priorityColors}
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)} //index denotes the position of the task in the taskState.tasks array -> Indentify which task clicked
          deleteTask = {() => deleteHandler(index)}

          
        />
      ))}
        <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />
    </div>
  );
}

export default App;

