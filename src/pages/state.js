// Aprendo sobre los estados de react, estos se usan para poder almacenar información y utilizarla dentro del html.
// Estos estados se pueden compatir con otro componentes/modulos y también modificarlos.

// Importamos la function useState para poder crear nuestros estados.
import { useState } from "react"
export default function State(){
   const [city, setCity] = useState('Cali')
   function reverse(){
      let reverse_word = city.split('');
      reverse_word = reverse_word.reverse();
      reverse_word = reverse_word.join('');
   }

   return(
      <>
         <p>{city}</p>
         <button onClick={() => reverse()}>reverse string</button>
      </>
   )
} 