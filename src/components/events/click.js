import {useState} from "react"
export default function Click(){
    const[click,setClick] = useState(0);
    return(
        <>
            <h1>onClick</h1>
            <p>it was {click} times</p>
            <button onClick={() => setClick (click +1)}>click me</button>
        </>
    )
}