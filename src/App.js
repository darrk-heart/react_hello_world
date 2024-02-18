import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import KeyasIndex from "./components/KeyasIndex";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";

function App() {
  return (
    <div className="App">
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true}/> */}
      {/* <KeyasIndex /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick /> */}
      {/* <EventBind/> */}
      {
        // <Greet name="Ofosu" heroName="SuperBoy" />
        // <Counter />
        // <Message/>
        /* <Greet name="Kwadjo">This is children props</Greet>
      <Greet name="Lawer">
        <button>action</button>
      </Greet>}
      
     
      {<Welcome name="Kwesi" />
      <Welcome name="Doe" /> */
      }
      {/* {<Welcome name="James" heroName="Body Man" />} */}
    </div>
  );
}

export default App;
