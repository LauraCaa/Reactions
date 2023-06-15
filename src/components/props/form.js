import {useState} from "react"
export default function Form({credential, onUpload}){
    const[user,setUser]= useState(credential)
    function handleSubmit(event){
        event.preventDefault();
        onUpload(user);
    }
    return(
       <form onSubmit={handleSubmit}>
            <label htmlFor="name">name</label>
            <input type="text" name="name" id="name" onChange={(event)=> setUser({...user, name: event.target.value})}/>
            <label htmlFor="country">country</label>
            <input type="text" name="country" id="country" onChange={(event)=> setUser({...user, country: event.target.value})}/>
            <label htmlFor="image">image</label>
            <input type="text" name="image" id="image" onChange={(event)=> setUser({...user, image: event.target.value})}/>
            <label htmlFor="size">size</label>
            <input type="text" name="size" id="size" onChange={(event)=> setUser({...user, size: event.target.value})}/>
            <label htmlFor="description">description</label>
            <textarea name="description" id="description" onChange={(event)=> setUser({...user, description: event.target.value})}/>
            <input type="submit"value ="upload"/>
       </form>
    )
}