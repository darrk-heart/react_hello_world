import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";

function App() {
  return (
    <div className="App">
      {/* <FunctionClick/> */}
      {/* <ClassClick /> */}
      <EventBind/>
      {
        // <Greet name="Ofosu" heroName="SuperBoy" />
        // <Counter />
        // <Message/>
        /* <Greet name="Kwadjo">This is children props</Greet>
      <Greet name="Lawer">
        <button>action</button>
      </Greet>
      
     
      <Welcome name="Kwesi" />
      <Welcome name="Doe" /> */
      }
      {/* {<Welcome name="James" heroName="Body Man" />} */}
    </div>
  );
}

export default App;
