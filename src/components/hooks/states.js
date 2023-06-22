import { useState } from "react";
export default function states(){
    const[name,setName]= useState('Anonymous.');
    return(
        <>
            <h4>State Hook</h4>
            <p>{name}</p>
            <input type="text" onChange={(event)=> setName(event.target.value)}/>
        </>
    )
}