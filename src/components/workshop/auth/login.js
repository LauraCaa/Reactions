import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Login() {
    const credentials = {
        email: "admin@admin.com",
        password: "1029384756"
    };
    const[user, setUser]= useState({});
    const[attempt,setAttempt] = useState(5);

    useEffect(()=> {
        if(attempt <= 0){
            alert('maximo de intentos alcanzados intente de nuevo en 30seg')
            const timer = setTimeout(() => {
                setAttempt(5)
            }, 1000 * 10)
            return() => {
                clearTimeout(timer)
            };    
        }
    },[attempt])

    function handleSubmit(event){
        event.preventDefault()
        if(attempt <= 0) return;
        setAttempt( attempt - 1)
        if( user.email === credentials.email){
            if(user.password === credentials.password) {
            alert('inicio de sesion exitoso')
            } else{
                alert('clave incorrecta')
            }
        } else{
            alert('correo incorrecto')
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder ="user@email.com" onChange={(event) => setUser({...user, email: event.target.value})} required/>
            <label htmlFor="password">Contraseña</label>
            <input id="password" type="password" onChange ={(event) => setUser({...user, password: event.target.value})} required/>
            <input type="submit" value ="Send"/>
        </form>
    )
}