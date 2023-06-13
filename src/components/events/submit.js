import {useState} from "react"

export default function Submit(){
    const[user,setUser] = useState({});
    function handleSubmit(event){
        event.preventDefault();
        console.log(user)
    }
    return(
        <>
            <h1>Onsubmit</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="user name" onChange={(event)=> setUser({...user, name: event.target.value})}></input>
                <input type="password" placeholder="password"onChange={(event)=> setUser({...user, password: event.target.value})}></input>
                <input type="file" onChange={()=> setUser({...user, file: event.target.value})}></input>
                <input type="submit"></input>
            </form>
        </>
    )
}