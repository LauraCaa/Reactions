import {useState} from "react"
export default function Select(){
    const[selected,setSelected]= useState('')

    return(
        <>
            <h1>onSelect</h1>
            <p>imput select: {selected}</p>
            <input type="text" onSelect={() => setSelected('selected')}></input>    
        </>
    )
}