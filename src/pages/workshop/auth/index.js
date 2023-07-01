
import Login from "@/components/workshop/auth/login"

export default function Index() {
    return(
        <>
            <h3>Inicio de sesion</h3>
            <Login></Login>
        </>
    )
}
 
// requerimientos 
// 1.crear una pagina para inicio de session
// 2.solo el e-mail admin@admin.com con la clave 1029384756 podra iniciar sesion 
// 3.la pagina debe tener el campo para escribir el correo y la clave, adicionalmente el boton para enviar la info
// 4.mostrar incio de sesion exitosa o fallida por medio de un aviso


// solucion
// 1. crear parte visual de la pagina de inicio de seion 
// 1.1 Generar el primer componente con el formulario de inicio de sesion
// 2. escribir en un objeto la informacion del usuario
// 3. Declarar el estado user para almacenar datos ingresados en formularios
// 4. crear una funcion para hacer submit del formularion

