//Data sent = Child component(TodoInput) to Parent Component(App)
//useRef = print specific part of component
 
import React, { useState, useRef } from 'react'
import TodoInput from './component/TodoInput'
import './assets/css/App.css'
import TodoList from './component/TodoList'
import ReactToPrint from 'react-to-print'

function App() {
  const [listTodo,setListTodo]=useState([]);
  const componentRef = useRef()

  let addList = (inputText)=>{
    // if(inputText!="")
    setListTodo([...listTodo,inputText]) /*Spread operator(listTodo) = copy previous data with original one and then print */
  }

  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo]
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <div className = "main-container">
      <div className="center-container">
      <TodoInput addList ={addList} />
      <h1 className="app-heading">TODO</h1>
      <hr/>
      <div ref={componentRef} id="todo-list">
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deleteItem ={deleteListItem}/> /*key = for unique value */
        )
      })}
      </div>
      <ReactToPrint
      trigger={()=> <button className="add--btn">Save as PDF</button>}
      content={()=> componentRef.current} //content to print
      pageStyle="print" />
      </div>
    </div>
  );
}

export default App;