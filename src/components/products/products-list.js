import Product from "./product"
export default function ProductsList(){
    return(
        <>
            {/* se contiene toda la info de la tabla en un contenedor llamado table */}
            <table>
                {/* en esta etiqueta entra toda la informacion que encabeza las columnas */}
                <thead>
                    {/* los tr son los contenedores de info */}
                    <tr>
                        {/* los th son las cabeceras de las tablas */}
                        <th>producto</th>
                        <th>precio</th>
                        <th>cantidad</th>
                    </tr>
                </thead>
                {/* en esta etiqueta va toda la descripcion de la cabecera de la tabla*/}
                <tbody>
                    <Product></Product>
                </tbody>
            </table>
        </>
    )
}