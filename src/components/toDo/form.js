import {useEffect,useState} from "react"
export default function Form({onCreate}){
    const[nextID,setNextID]= useState(0);
    const[todo,setTodo]= useState({ _id: nextID, isComplete: false})
    
// 1. Use effect se lanza cada vez que renderiza la pagina
// 2. Pueden haber dependencia para que no se ejecute cada vez que se renderiza. ([])
// 3. Podemos decirle como limpiar esta función.
// 4. tiene comportamientos de asegurar en desarrollo.
    useEffect(() => {
        if(todo.name){
            console.log("llamo a crear todo")
            onCreate(todo);
            setTodo({...todo,_id: nextID, name:''})
        }
    },[nextID])

    function handleSubmit(event){
        event.preventDefault();
        if(todo.name){
        setNextID(nextID + 1);
        }
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={todo.name} onChange={(event) => setTodo({...todo, name:event.target.value})}/>
            <input type="submit" value="save"/>
            
        </form>

    )
}