import './App.css';
import CounterContainer from './components/CounterContainer';
import TodoContainer from './components/TodoContainer';
// import './components/redux_exercise'

function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <hr />
      <TodoContainer/>
    </div>
  );
}

export default App;
