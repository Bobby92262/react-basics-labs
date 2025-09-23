import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today", priority:"Low", done: false},
      { id: 2, title: "Laundry", description: "Fold clothes and put away", priority:"Medium", deadline: "Tomorrow", done: false},
      { id: 3, title: "Tidy up", deadline:"Today", priority:"High", done: false}
    ]
  });

  const doneHandler = (taskIndex) => { 
    const tasks = [...taskState.tasks]; //spread operator used to copy
    tasks[taskIndex].done = !tasks[taskIndex].done; //sets it to opposit of its state
    setTaskState({tasks}); //set state to updated tasks array
    //console.log(`${taskIndex} ${tasks[taskIndex].done}`);
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
          key={task.id}
          done={task.done}
          markDone={() => doneHandler(index)} //index denotes the position of the task in the taskState.tasks array -> Indentify which task clicked
        />
      ))}
    </div>
)}

export default App;

