import { useState } from "react";
import LightSwitch from "./components/LightSwitch";
import Counter from "./components/Counter";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";

const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);
    
  const toggleLight = () => {
      setIsLightOn(prevState => !prevState)
  }

  return(
    <>
      <LightSwitch switchOn={isLightOn} toggleLight={toggleLight} />
      <Counter />
      <ColorPicker />
      <TodoList />
    </>
  );
}

export default App;
