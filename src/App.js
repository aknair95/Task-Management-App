import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./components/taskList/taskList";
import AddTask from "./components/addTask/addTask";
import TaskContextProvider from "./store/taskContextProvider";
import NavigationBar from "./components/navbar/navbar";

function App() {
  return (
    <TaskContextProvider>
     <BrowserRouter>
          <div>
            <NavigationBar/>
            <Routes>
              <Route path="/" element={<TaskList/>}/>
              <Route path="/addTask" element={<AddTask/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </TaskContextProvider>
  );
}

export default App;