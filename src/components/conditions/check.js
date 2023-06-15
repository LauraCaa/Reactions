import { useState } from "react"
export default function Check(){
    const[show,setShow]=useState()
    return(
        <>
            <h1>Conditional rendenring</h1>

            {show ? (
                <p>Hi, this is Conditional message</p>
            ):(
                <></>
            )}
            <input type="checkbox" value={show} onChange={()=> setShow(!show)}/>
            <label htmlFor="check">Show menssage</label>
        </>
    )
}