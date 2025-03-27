import {useEffect, useRef, useState} from 'react'
import './App.css'

function App() {
    useEffect(() => {
        console.log("load start!")
    })
    const inputRef = useRef<HTMLInputElement>(null);
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => {
                    setCount((count) => count + 1)
                    console.log(inputRef.current)
                }}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                <input ref={inputRef}/>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
