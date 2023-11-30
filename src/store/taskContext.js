import { createContext } from "react";

const TaskContext=createContext({
    tasks: [],
    addTask: ()=>{},
    removeTask: ()=>{}
})

export default TaskContext;