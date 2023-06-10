import {useState} from "react"
export default function WordRemove(){
    const [word,setWord ]= useState("");
    function deleteA(){
        setWord (word.split("a").join(""));
    }
    return(
        <>
            <h1>Remove letter A</h1>
            <input
                type="text"
                name="removable"
                placeholder="write a word wihtout A"
                onChange={(event) => setWord(event.target.value)}
            ></input>
            <p> {word} </p>
            <button onClick={() => deleteA()}>Remove A</button>

        </>
    )
}

// permitir escribir una palabra
// eliminar de esa palabra la vocal A
// Mostrarle al cliente la palabra sin esa vocal

//SOLUCION
//1. agregar un imput
//2. agregar un boton
//3. crear funcion llamada en el boton