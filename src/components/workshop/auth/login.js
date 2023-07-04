import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "@/assets/styles/main.css"

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
            <div className="container bg-white d-flex align-items-center justify-content-center vh-100">
                <form className="p-5" onSubmit={handleSubmit}>
                    <h3 className="text-center"> Inicio de sesion</h3>
                    <fieldset className="row p-3 position-relative">
                        <label htmlFor="email">
                            <svg className="bi bi-person position-absolute bottom-25" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                            </svg>
                        Email or userName</label>
                        <input className="form-control ps-5"  id="email" type="text" placeholder ="user@email.com" onChange={(event) => setUser({...user, email: event.target.value})} required/> 
                    </fieldset>
                    <fieldset className="row p-3 position-relative">
                        <label htmlFor="password">
                            <svg className="bi bi-person position-absolute bottom-25" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                            </svg>
                            Password</label>
                        <input  className="form-control ps-5"  id="password" type="password" onChange ={(event) => setUser({...user, password: event.target.value})} required/>
                    </fieldset>
                    <div className="row p-3">
                        <input className="btn btn-primary" type="submit" value ="Send"/>
                    </div>
                </form>
            </div>
    )
}