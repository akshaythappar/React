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
    const {onClick,onMouseEnter} = props;
    const hanldGreeting = () =>{
        console.log(`Hey user welcome`);
        onClick();
    }
    return (<>
    <button onClick={onClick}>Click</button>
    <button onMouseEnter={onMouseEnter}>Hover Me</button>
    <button onClick={hanldGreeting}>Greetings</button>
    </>)
}