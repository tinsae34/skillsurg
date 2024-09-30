import { useEffect, useState } from 'react';
import '../pagestyle/taskstyle.css'
import axios from 'axios'

function App() {
  const [todos, settodos] =useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/get')
    .then(result => settodos(result.data))
    .catch(err => console.log(err))
  }, [])

  const [task, settask] = useState()
  const handleadd = () =>{
      axios.post('http://localhost:3001/add', {task: task})
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }

  
  return (
    <div className='App'>
    <h1 className='tit'>My Todos</h1>
    <div className='todo-wrapper'>
        <div className='todo-input'>
            <div className='todo-input-item'>
                <div className='form'>
                <input type='text' name='id' placeholder='enter task' onChange={(e) => settask(e.target.value)}/>

                </div>
            </div>
            <div className='todo-input-item'>
                <button type='button' onClick={handleadd} className='primaryBtn'>add</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default App
