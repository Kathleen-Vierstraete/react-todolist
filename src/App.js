import './App.css';
import TodoList from './components/TodoList';
import LangageSelector from './components/LanguageSelector';

//page initialisation, compilation with TodoList 
function App() {
  return (
    <div className="todo-app">
      <LangageSelector />
      <TodoList />
    </div>
  );
}

export default App;