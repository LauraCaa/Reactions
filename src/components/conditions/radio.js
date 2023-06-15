import { useState } from "react"
export default function Radio(){
    const[users,setUsers]= useState([
        {name:'Camila', city:'Cali', image:'https://thispersondoesnotexist.com/'},
        {name:'Felipe', city:'Tokyo', image:'https://thispersondoesnotexist.com/'},
        {name:'Sofia', city:'Barcelona', image:'https://thispersondoesnotexist.com/'},
        {name:'Tatiana', city:'Lima', image:'https://thispersondoesnotexist.com/'},
        {name:'Johan', city:'Milan', image:'https://thispersondoesnotexist.com/'},
    ]);
    const[user,setUser]= useState();
    
    return(
        <>
            <h1>User conditional </h1>
            {user ? (
                <>
                    <p>{user.name}</p>
                    <p>{user.city}</p>
                    <img src={user.image} width="50px"/>
                </>
            ) : (
                <span>User no selected...</span>
            )}
            <ul>
                {users.map((user, index) => (
                <li key={index}>
                    <input type="radio" value={user} name="user" id={'user-' + index} onChange={()=> setUser(user)}/>
                    <label htmlFor={'user-' + index}>{user.name}</label>
                </li>
            ))}
            </ul>
        </>
    )
}