import React,{useState,useEffect} from 'react'
import axios from 'axios'
function useTodo({url   }) {
  const[todos,setTodos] =useState([])
  const [loading,setloading] = useState(true)
  async function dataFetch(){
    axios.get(url)
    .then(res => {
      setTodos(res.data.todos);
      setloading(false)
    })
  }
  useEffect(() => {
      async function data(){
          await dataFetch();
        }   
       const value= setInterval(() => {
            data();
            
        }, 5000);

    return()=>{
        clearInterval(value)
    }
  }, [n])

  return {todos,loading}
}

export default useTodo
