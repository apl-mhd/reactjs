import { useState } from "react"
import React from "react"
export default function Lifting(){
    const [todos, setTodos] =  useState(["item 1", "item 2", "item 3"])

    return(
        <>
            <TodoCount todos={todos}/>
            <TodoList todos={todos} />
            <AddTodo setTodos={setTodos}/>
        </>
    )
}

function del(e){

    e.preventDefault()
    console.log(e.target.value.key)
}


function TodoCount(props){
    return <div>Total Todos: {props.todos.length} </div>
}


function TodoList(props){
    return(
        <ul>
            {props.todos.map((todo, index) =>{
                
                return(
                <li onClick={del} key={index}>{todo}</li>
                )
                })}
        </ul>
    )
}

function AddTodo(props){
    function handleSubmit(e){
        e.preventDefault();
        const todo = e.target.elements.todo.value
        console.log(todo)
        props.setTodos(prevTodos => [...prevTodos, todo])
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" id="todo"/>
            <input type="submit" value="Submit"/>
        </form>
    )
}