import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return ( <
        >
        <
        button onClick = { incrementCount } > CLICK < /button>  <
        p > Count: { count } < /p>  <
        />
    );
}

export default App;