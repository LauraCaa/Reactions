import axios from 'axios'
import { useEffect, useState } from 'react';
export default function Apis(){
    const[answer,setAnswer]= useState({})
    useEffect(() => {
        axios.get('https://yesno.wtf/api')
        .then(function (response) {
            setAnswer(response.data)
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
    },[])
    
    return(
        <>
            <h3>APIS </h3>
            <p>{answer.answer}</p>
            <img src={answer.image}/>
        </>
    )
}