import './App.css'
import LottieIcon from "./components/LottieIcon.jsx";
import {useState} from "react";

function App() {
    const [isActive, setActive] = useState(false);

    return (
        <>
            <h1>Animation</h1>
            <button onClick={() => {
                setActive(!isActive)
            }} style={{display: "flex", alignItems: "center",}}>
                <LottieIcon isActive={isActive}/>
                <p style={{marginLeft: 10}}>Some content</p>
            </button>
        </>
    )
}

export default App
