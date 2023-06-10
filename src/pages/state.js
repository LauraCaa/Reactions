// Aprendo sobre los estados de react, estos se usan para poder almacenar información y utilizarla dentro del html.
// Estos estados se pueden compatir con otro componentes/modulos y también modificarlos.

// Importamos la function useState para poder crear nuestros estados.
import { useState } from "react";
//importamos componentes desde cualquier archivo para poder usarlo
import WordSync from "@/components/words/word-sync";
import WordRemove from "@/components/words/word-remove";
export default function State() {
   // The first const has the important value and the second const has a function to update the value inside the first const.
   const [word, setWord] = useState('');

   // Define a function to handle the button event.
   function reverseWord() {
     // Use the split method/function to separate the text inside an array.
     let text = word.split('');
     // Use the reverse method/function to change the array order (reverse it).
     text = text.reverse();
     // Use the join method/function to compact the array into a string.
     text = text.join('');
     // Call the method setWord to change the value for 'word'.
     setWord(text);

   // se refactoriza el cosidigo para tener menos lineas y lo hicimos poer medio de un changing
   // setWork(word.split('').reverse().join(''));
   }

   return(
      <>
         <h1>Reverse a word</h1>
         <input 
         name = "word" 
         placeholder= "write a word..."
         onChange ={(event)=> setWord(event.target.value)} >
         </input>
         <p>{word}</p>
         <button onClick={() => reverseWord()}>reverse string</button>
         <WordRemove></WordRemove>
         <WordSync></WordSync>
      </>
   )
} 