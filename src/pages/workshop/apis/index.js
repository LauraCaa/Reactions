import Table from "@/components/workshop/apis/table"
import Link from "next/link"

export default function Index(){
    return(
        <>
            <h3>Users Api</h3>
            <Link href="/workshop/apis/new">create user</Link>
            <Table></Table>
        </>
    )
}
// Objetivos.
// 1. conectar un api para gestionar usuarios
// 2. crear una pagina para cada proceso de gestion (CRUD)
// 3. autenticarse con la api para poder interactuar

// Solucion
// 1. crear una coleccion es postman para validar la conexion al api
// 2.crear una pagina par cada paso del CRUD
// 3. agregar libreria para realizar llamadas a la Api
// 4. implementar los diferentes endPoints que tiene la API en las vistas creadas
// 