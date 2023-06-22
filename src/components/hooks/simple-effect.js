import { useEffect,useState } from "react";

export default function SimpleEffect() {
    const[text,setText]= useState('');
    useEffect(() => {
        console.log('no dependencies UseEffect listens to every re-render');
        return () => {
            console.log('clean up the function for useEffect')
        }
    });
    return(
        <>
            <h4>Nacy's effect</h4>
            {text}
            <input type="text" onChange={(event)=> setText(event.target.value)}/>
        </>
    )
}


