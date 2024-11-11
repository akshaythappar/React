import { useState } from "react"

export const LiftStateUp = () =>{
    const [inputValue,setInputValue]=useState("");
    return (<>
    <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
    <DisplayComponent inputValue={inputValue}/>
    </>
    )
}

function InputComponent({inputValue,setInputValue}){
    // const [inputValue,setInputValue]=useState("");
    return(
        <>
        <input type="text" placeholder="enter your name" value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
        </>
    )
}

function DisplayComponent({inputValue}){
    return <p>The value of input is : {inputValue} </p>
}