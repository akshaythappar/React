export const EventProps = () =>{

    const HandleWelcomeUser = (user) =>{
        alert(`Hey ${user}`);
    }
    const handlehover = () =>{
        alert("thanks for hovering me");
    }

    return (<>
    {/* in the parent component don't need to write it as onClick we can write as we wish */}
     {/* <WelcomeUser onClick={()=>HandleWelcomeUser("Vinod")} onMouseEnter={handlehover}/> */}
     
     
     <WelcomeUser onButtonClick={()=>HandleWelcomeUser("Vinod")} onMouseEnter={handlehover}/>
    </>)
}


const WelcomeUser = (props) =>{
    const {onButtonClick,onMouseEnter} = props;
    const hanldGreeting = () =>{
        console.log(`Hey user welcome`);
        onButtonClick();
    }
    return (<>
    <button onClick={onButtonClick}>Click</button>
    <button onMouseEnter={onMouseEnter}>Hover Me</button>
    <button onClick={hanldGreeting}>Greetings</button>
    </>)
}