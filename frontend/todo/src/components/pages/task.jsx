import React,{ useEffect, useState } from 'react'
import Create from './create'
import axios from 'axios'
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import {BsCheckLg, BsCircleFill, BsFillCheckCircleFill} from 'react-icons/bs';
import '../pagestyle/taskstyle.css';

function task() {
    
    const [todos, settodos ] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:3001/get')
        .then(result => settodos(result.data))
        .catch(err => console.log(err))
    })
    
    const deletee = (id) => {
        axios.delete('http://localhost:3001/delete/' +id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
    const comp = (id) => {
        axios.put('http://localhost:3001/update/' +id)
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <Create/>
            {
                todos.length === 0 ?
                <div className='rec'>
                    <h2>No Task</h2>
                </div>
                :
                todos.map(todo => (
                    <div className='todo-list-item'>
                        <div className='checkbox' onClick={() => comp(todo._id)}>
                            {todo.done ?
                                <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                            : <BsCircleFill className='icon'/>    
                            }
                            <h3 className='task'>{todo.task}</h3>
                        </div>
                        <div className='comp_del'>
                            <AiOutlineDelete className="icon" onClick={() => deletee(todo._id)}/>
                            
                        </div>
                        
                        
                    </div>
                ))
            }
        </div>
    )
}
export default task