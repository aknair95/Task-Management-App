import { useState } from "react";
import TaskContext from "./taskContext";
import axios from "axios";

const TaskContextProvider=(props) =>{
    const [tasks,setTasks]=useState();

    const addTaskHandler=async(newTask) =>{
        const updatedTasks=[...tasks,newTask];
        setTasks(updatedTasks);
        try{ 
            await axios.patch("https://task-management-app-b6026-default-rtdb.firebaseio.com/.json",{
                 updatedTasks
              }); 
          } catch(error){
            alert("!! Network error !!")
          }
    }

    const removeTaskHandler=(Id) =>{
        tasks.filter((item) =>{
            return item.id!==Id;
        });
    }

    const taskContextValue={
        tasks: tasks,
        addTask: addTaskHandler,
        removeTask: removeTaskHandler
    }

    return(
        <TaskContext.Provider value={taskContextValue}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider;