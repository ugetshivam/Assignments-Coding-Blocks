import React, {useState} from "react";
import './Task.css'

const Task = () => {
    
    const [tasks, setTasks] = useState([]);
    const [inp, setInp] = useState('');

    const changeHandler = (e) => {
        // console.log(e.currentTarget.value);
        setInp(e.currentTarget.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if(inp !== ""){
        setTasks([...tasks, inp]);
        }
        setInp("");
    }
    const handleDeleteClick = (idx)=>{
        const removeTasks = tasks.filter((task, index)=>{
            return index !== idx;
        });
        setTasks(removeTasks);
    };

    const handleEditClick = (todo,idx) => {
       const promptValue = prompt("Update task", todo);
    //    console.log(promptValue);
       if(promptValue !== null){
        const lst = tasks.map((task, index)=>{
            return (idx !== index?task:promptValue);
        });
        setTasks(lst);
    }
    }
    const handleDownClick = (idx) => {
        if(idx + 1 !== tasks.length){
            const copyTasks = tasks.map((task)=>{
                return task;
            })
            const val = copyTasks[idx];
            copyTasks[idx] = copyTasks[idx+1];
            copyTasks[idx+1] = val;
            setTasks(copyTasks);
        }
        else{
            console.log("Stop......Get Some Help...Please....You blithering Idiot");
        }
    }
    const handleUpClick = (idx) => {
        if(idx - 1 !== -1){
            const copyTasks = tasks.map((task)=>{
                return task;
            })
            const val = copyTasks[idx];
            copyTasks[idx] = copyTasks[idx-1];
            copyTasks[idx-1] = val;
            setTasks(copyTasks);
        }
        else{
            console.log("Stop......Get Some Help...Please....You blithering Idiot");
        }
        
    }
    const taskList = tasks.map((todo,idx)=>{
       return <li key={idx}>
        {todo}
        <button id="edit" onClick={() => handleEditClick(todo,idx)}>Edit</button>
        <button id="del" onClick={() => handleDeleteClick(idx)}>Delete</button>
        <button id="up" onClick={() => handleUpClick(idx)}>Move Up</button>
        <button id="down" onClick={() => handleDownClick(idx)}>Move Down</button>
      </li>
    })
    // console.log(tasks);
    return(
        <div>
            <input 
            type="text" 
            value={inp}
            onChange={changeHandler}
            placeholder="TYPE A TASK"/>
            <button id="tskbtn" onClick={submitHandler}>ADD</button>
            <ul>
            {taskList}
            </ul>
        </div>
    );
}

export default Task;