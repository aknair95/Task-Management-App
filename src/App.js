import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./components/taskList/taskList";
import AddTask from "./components/addTask/addTask";

function App() {
  return (
    <div>
     <BrowserRouter>
          <div>
            <Routes>
              <Route path="/" element={<TaskList/>}/>
              <Route path="/addTask" element={<AddTask/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
