export const EventProps = () =>{

    const HandleWelcomeUser = (user) =>{
        alert(`Hey ${user}`);
    }
    const handlehover = () =>{
        alert("thanks for hovering me");
    }

    return (<>
     <WelcomeUser onClick={()=>HandleWelcomeUser("Vinod")} onMouseEnter={handlehover}/>
    </>)
}


const WelcomeUser = (props) =>{
    const hanldGreeting = () =>{
        console.log(`Hey user welcome`);
        props.onClick();
    }
    return (<>
    <button onClick={props.onClick}>Click</button>
    <button onMouseEnter={props.onMouseEnter}>Hover Me</button>
    <button onClick={hanldGreeting}>Greetings</button>
    </>)
}