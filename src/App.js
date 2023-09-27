import "./App.css";
import { useState } from "react";

function App() {

    // Using states we can render only part of component not required to render whole component
    // let count=0;
    const[count,setCount]=useState(0);

    function Add()
    {
        setCount(count+1);
        // console.log(setCount);
    }

    function Sub()
    {
        setCount(count-1);
        // console.log(setCount);
    }

    function Reset()
    {
        setCount(0);
    }

  return (
    <div className="App">
        <div className="box">
            <p>{count}</p>
            <button onClick={Add} className="add">Increment</button>
            <button onClick={Sub} className="sub">Decrement</button>
            <button onClick={Reset} className="reset">Reset</button>
        </div>
    </div>
  )
}
// The above is a react functional component

export default App;
