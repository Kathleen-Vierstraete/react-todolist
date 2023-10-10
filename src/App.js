import './App.css';
import TodoList from './components/TodoList';

//page initialisation, compilation with TodoList 
function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
