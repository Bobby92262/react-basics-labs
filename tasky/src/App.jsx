import './App.css';
import Task from './components/Task';
import React, {useState} from 'react';


function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      {title: "Dishes", description: "Empty dishwasher", deadline: "Today"},
      {title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow"},
      {title: "Tidy up", deadline:"Today"}
    ]
  });
  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => ( //map() function on tasks array in the taskState object
        <Task //Arrow function into the map method, param 'task' represents "task" array element
          title={task.title} //For every task in taskState.tasks array create a <Task /> component
          description={task.description} //PAss proprs for the current task (title,description,deadline)
          deadline={task.deadline}
        />
      ))}
    </div>
)}

export default App;

