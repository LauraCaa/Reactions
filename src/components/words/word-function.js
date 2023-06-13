import { useState } from "react";
export default function WordFunction(){
    const[word,setWord]= useState("paris")
    function resetWord(){
        setWord('');}
    return(
        <>
            <h1>Word Function</h1>
            <p>{word}</p>
            <button onClick={() => setWord('')}>reset word</button>
            <button onClick={resetWord}>reset word</button>
        </>
    )
}