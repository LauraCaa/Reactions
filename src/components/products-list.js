export default function ProductsList(){
    // se crea un array con todos los objetos que necesitamos
    let products = [
        {name:"papas", price: 1500, stock: 5},
        {name:"chitos", price: 2500, stock: 3},
        {name:"chocorramo", price: 2000, stock: 4},
        {name:"helado", price: 3000, stock: 6},
        {name:"gaseosa", price: 5000, stock: 8},
    ]
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
                    </tr>
                </thead>
                {/* en esta etiqueta va toda la descripcion de la cabecera de la tabla*/}
                <tbody>
                    {/* iterar listas para imprimirlas en el html */}
                    {products.map(product => (
                        // necesita una llave para ser identificado mas facil
                        <tr key={product.name}>
                        {/* contenido especifico de la tabla */}
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))}  
                </tbody>
            </table>
        </>
    )
}