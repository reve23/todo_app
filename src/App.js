import Todo from "./component/Todo";
import NewTodo from "./component/NewTodo";
import UserInput from "./component/UserInput";
import "./App.css";
import img1 from './images/img3.png';

function App() {
  return (
    <div className="App">
      
      <figure>
        <img src={img1} alt="" />
      </figure>
      <UserInput/>
    </div>
  );
}

export default App;
