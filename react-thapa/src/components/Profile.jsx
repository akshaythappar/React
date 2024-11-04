

const Profile = () =>{
return <>
<ProfileCard name="Bob" age={25} greeting={<div><strong>Hello bob, keep the great work up</strong></div>}>
<p>Hobbies : gaming,cooking</p>
<button>Contact</button>
</ProfileCard></>
}


export default Profile;




function ProfileCard(props){
    const {name,age,greeting,children}=props;
    return <>
    <h2>Name : {name}</h2>
    <p>Age : {age}</p>
    <p>{greeting}</p>
    <div>{children}</div>
    </>
}