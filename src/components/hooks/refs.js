import { useRef } from "react"
export default function Refs(){

    const myRef = useRef (0);

    console.log(myRef);

    function ClickCount() {
        myRef.current = myRef.current + 1; 
        console.log(myRef.current);

    }
    return(
        <>
            <h4>Refs</h4>
            <button onClick={ClickCount}>Click me</button>
            <p>{myRef.current}</p>
        </>
    )
}