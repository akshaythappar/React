

const Profile = () =>{
return <>
<ProfileCard name="Bob" age={25} greeting={<div><strong>Hello bob, keep the great work up</strong></div>}>
<p>Hobbies : gaming,cooking</p>
<button>Contact</button>
</ProfileCard></>
}


export default Profile;




function ProfileCard(props){
    return <>
    <h2>Name : {props.name}</h2>
    <p>Age : {props.age}</p>
    <p>{props.greeting}</p>
    <div>{props.children}</div>
    </>
}