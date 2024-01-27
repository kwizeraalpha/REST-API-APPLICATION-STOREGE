
import React, { useState, useCallback } from 'react'

function UseCollbackExample() {
    const [tasks, setTasks] = useState([])

    const addTask = useCallback( () => {
        setTasks((prevState) => [...prevState, 'Some Task'])
    }, [setTasks])
  return (
    <div>
      <Button addTask={addTask}/>
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
    console.log('Button rendered');
    return <div>
        <button className='btn btn-primary' onClick={addTask}> AddTask</button>
    </div>
}
)
export default UseCollbackExample
