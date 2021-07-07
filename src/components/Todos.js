import React, { useState } from 'react';
import { auth } from './firebase';
import "./Todos.css"
import Header from "./Header";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import firebase from "firebase";
import { db } from './firebase';
import TodoList from './TodoList';


const signOut = () => auth.signOut();


function Todos(props) {
    const [todoInput, setTodoInput] = useState("");

    function addTodo(e) {
        e.preventDefault();
        if(todoInput!== "")
        db.collection(`users/${props.uid}/todoCollection`).add({
            inProgress: true,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: todoInput,
        });

        setTodoInput("");
    }

    return (
        <div className="todo">
            <Header image={props.img} />
            <div className="todo-component">
                <p className="name"> Hello,<span>{props.name}</span></p>
                
            </div>

            <div className="input">
                <form className="form" action="">
                    <TextField className="TextField" id="standard-basic" label="Write a todo"
                        value={todoInput}
                        onChange={(e) => setTodoInput(e.target.value)}
                    />
                    <Button onClick={addTodo} type="submit" variant="contained" style={{backgroundColor: "lightgreen"}}> +Add</Button>
                </form>
            </div>

            <TodoList />
            
        </div>
    )
}

export default Todos;
