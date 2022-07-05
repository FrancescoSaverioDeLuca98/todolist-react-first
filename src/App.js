import React, {useState, useRef} from 'react'; 
import TodoList from './TodoList';
import uuidv4 from 'uudi/v4'



function App() {
  const [todos, setTodos] = useState([{id : '1', name: 'dioporoc', complete : true }]);

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name === '')return; 
    console.log(name);
    setTodos(prevTodo => {
      return [...prevTodo, {id: uuidv4(), name: name, complete: false}]
    }) 
    todoNameRef = null; 

  }

  const todoNameRef = useRef();

  return (
    <>
    <TodoList todos={todos} />
    <input type="text" ref={todoNameRef} />
    <button onClick={handleAddTodo}>add todo</button>
    <button>delete todo</button></>

  );
}

export default App;
