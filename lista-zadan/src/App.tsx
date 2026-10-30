import { useState } from 'react'
import './App.css'

interface TaskTypes{
  isDone: boolean;
  task: string;
}

function Tasks({isDone, task}:TaskTypes){
  const [checked, setChecked] = useState(isDone);

  return(
      <div>
        <label>
          <input type="checkbox" checked={checked} onChange={() => setChecked(!checked) }/>
          {task}
        </label>
      </div>
  )
}

function App() {
  const [tasks, setTasks] = useState([
    { isDone: true, task: 'mleko' },
    { isDone: false, task: 'platki' }
  ]);

  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if(inputValue.trim() === ''){
      return;
    }
    setTasks([...tasks , {isDone: false, task: inputValue}])
  }

  const uncompletedCount = tasks.filter(task => !task.isDone).length;

  return (
    <div>
      <input
        type="text"
        placeholder="Wpisz zadanie"
        onChange={(event) => {
            const value = event.target.value;
            setInputValue(value);
          }}
      />
      <input type="submit" value="+" onClick={addTask} />

      {tasks.map((task) => (
        <div>
          <Tasks 
            isDone={task.isDone}
            task={task.task}
          />
        </div>
        ))}

      <div>
        <p>Liczba niewykonanych zadań: {uncompletedCount}</p>
      </div>
    </div>
  )
}

export default App
