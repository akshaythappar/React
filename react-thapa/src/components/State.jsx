import "./EV.css"


export const State = () =>{
    var value= 0;
    const handleButtonClick = () =>{
        value++;
        console.log(value);
    }
    return (<>
    <h1>{value}</h1>
    <button onClick={handleButtonClick}>Click me</button>
    </>)

}