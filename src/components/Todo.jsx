import React from 'react'
import { useState, useEffect, useRef } from 'react'

function Todo() {
    const [loading, setLoading] =useState(true)
    const [todo, setDoto] = useState({})
    const isMounted = useRef (true)

    useEffect(() => {
  fetch('http://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((data) => {
    setTimeout(() =>{
        if(isMounted){
            setDoto(data)
            setLoading(false)
        }
    
    }, 1000)
  })

  // Run when component is unmounted
  return () => {
    isMounted.current= false
  }
    }, [isMounted])
  return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
}

export default Todo
