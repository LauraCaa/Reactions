import {useState} from "react"
export default function WordSync(){
    const [word,setWord] = useState("");
    return(
        <>
            <h1>Word syncing</h1>
            <input
                type="text"
                name="same"
                value={word}
                placeholder="copy word"
                onChange={(event) => setWord(event.target.value)}
            />
            <input
                type="text"
                name="same2"
                value={word}
                placeholder="copy word"
                onChange={(event) => setWord(event.target.value)}
            />
            <button onClick={() => setWord("")}>Delete word</button>
        </>
    )
}

//permitir escribir valores en dos campos
// sincronizaar los valores de los dos campos
// agregar un boton que elimine el contenico de ambos campos