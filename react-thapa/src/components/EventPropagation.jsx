import "./EV.css"

export const EventPropgation = () =>{

    const handleGrandParent = () =>{
        console.log("Grandparent clicked");
        
    }
    const handleParentClick = () =>{
        console.log("Parent clicked")
    }
    const handleChildClick  = (event) =>{
        event.stopPropagation();  // to stop the event form bublling such that when i will click on child compoentn to prevent it form calling it parent and grandparent 
        console.log(event);
        console.log("child clicked");
    }
    return (<>
    <section className="main-div">\
        <div className="g-parent" onClick={handleGrandParent}>
            <div className="p-div" onClick={handleParentClick}>
                <div className="c-div" onClick={handleChildClick}>
                    child div 
                </div>
            </div>
        </div>
       
    </section>
    </>);
}