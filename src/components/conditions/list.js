import {useState} from "react"
import Avatar from "./avatar"
export default function List(){
    const[characters,setCharacters] = useState(['Mickey','pluto','Goofy','Donald','Pedro'])
    const colors ={
        color:'green'
    }
    return(
        <>
            <h1> Rendering text</h1>
            <ul>
                {characters.map((character, index) => (
                    <li key={index} style={{color: index === 3 ? 'green':'black'}}>
                        {index}-{character} 
                        {index === 0 && ' OK'}
                        {index === 1 && <Avatar/>}
                    </li>
                ))}
            </ul>

        </> 
    )
}