import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TodoList from './components/English/TodoList';
import TodoListFrench from './components/French/TodoListFrench';
import TodoListSpanish from './components/Spanish/TodoListSpanish';
import Navbar from './components/Navbar';




//page initialisation, compilation with TodoList 
function App() {
  return (
    <Router>
    <div className="todo-app">
    <Navbar />

    <Routes>

      <Route path="https://kathleen-vierstraete.github.io/react-todolist/" element={<TodoList />} />
      <Route path="https://kathleen-vierstraete.github.io/react-todolist/fr" element={<TodoListFrench />} />
      <Route path="https://kathleen-vierstraete.github.io/react-todolist/es" element={<TodoListSpanish />} />



      </Routes>

    </div>
    </Router>

  );
}

export default App;
