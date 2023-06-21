export default function Table({todos,onDelete,onUpDate}){
    return(
        <table>
            <tbody>
                {todos.map((todo)=> (
                <tr key={todo._id} style={{color: todo.isComplete ? "grey" : "red"}}>
                    <td><input type="checkbox" checked={todo.isComplete} onChange={()=>onUpDate(todo._id) }/></td>
                    <td>{todo.name}</td>
                    <td><button onClick={() => onDelete(todo._id)}>delete</button></td>
                </tr>
                ))}
            </tbody>
        </table>
       
    )
}