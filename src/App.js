import Todo from "./component/Todo";
import "./App.css";
import img1 from './images/img3.png';

function App() {
  return (
    <div className="App">
      
      <figure>
        <img src={img1} alt="" />
      </figure>
      <Todo />
    </div>
  );
}

export default App;
