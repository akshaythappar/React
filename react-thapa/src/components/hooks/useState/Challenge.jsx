import { useState } from "react"

export const Challenge = () =>{
    const [count,setCount] = useState(0);
    const [input,setInput]=useState("");
    const handleInputChange = (event)=>{
        setInput(Number(event.target.value));
    }
        return <>
    <h1>Use state challenge</h1>
    <div>
        Count:{count}
    </div>
    <div>
        Step : <input type="number" value={input} onChange={handleInputChange}/>
    </div>
    <div>
        <button onClick={()=>setCount(count+input)}>Increament</button>
        <button onClick={()=>setCount(count-input)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>

    </>
}
