import Form from "@/components/workshop/toDo/form"
import Table from "@/components/workshop/toDo/table"
import {useState} from "react"
export default function Todos(){
    const[todos,setTodos]= useState([
        {
          "_id": "648cc2eac91f9f9e26e9a7b7",
          "isComplete": false,
          "name": "nisi anim est consectetur"
        },
        {
          "_id": "648cc2eae929a45575d9972f",
          "isComplete": true,
          "name": "qui cupidatat dolore duis"
        },
        {
          "_id": "648cc2ea2b8f9f2fa69707f5",
          "isComplete": true,
          "name": "magna ullamco ex sint"
        },
        {
          "_id": "648cc2ea8f9327f8115ea381",
          "isComplete": false,
          "name": "in irure eu aliquip"
        },
        {
          "_id": "648cc2eaceb046fe81d1935f",
          "isComplete": false,
          "name": "nostrud aute consectetur nisi"
        },
        {
          "_id": "648cc2ea4815653aa98113aa",
          "isComplete": true,
          "name": "dolore ut cupidatat amet"
        },
        {
          "_id": "648cc2ea3e5641026d81f563",
          "isComplete": false,
          "name": "ad id qui proident"
        },
        {
          "_id": "648cc2ea27ff4c918f79158f",
          "isComplete": true,
          "name": "duis deserunt id commodo"
        },
        {
          "_id": "648cc2eaef651dc40ca58ce4",
          "isComplete": true,
          "name": "exercitation qui sint aliqua"
        }
      ]);

    function deleteTodo(id){
      let result = todos.filter((todo)=> todo._id !== id);
      setTodos(result)
    }
    function upDateTodo(id){
      console.log('update', id);
      let newTodo = todos.filter((todo)=> todo._id === id);
      let result= todos.filter((todo)=> todo._id !== id);
      newTodo[0].isComplete = !newTodo[0].isComplete
      result.push(newTodo[0])
      setTodos(result);

    }
    return(
        <>
            <h4>To do List!!</h4>
            <Form onCreate={(todo) => setTodos([...todos, todo])}></Form>
            <Table todos={todos} onDelete={(id)=> deleteTodo(id)} onUpDate={(id) => upDateTodo(id)}></Table>
        </>

    )
}

// REQUERIMIENTO
// 1. crear un app para gestionar tareas
// 2. las tareas se pueden crear, mostrar, actualizar y eliminar
 
// PROCEDIMIENTO
// 1.Crear una pagina (todo en js)
// 2.Definir estructura de la app (analizar requerimiento para saber de cuantas cosas dependera)
//     2.1 titulo estatico
//     2.1 formulario para agregar tareas
//     2.3 tabla para agregar tareas
// 3. agregar logica
//     3.1 definir donde debe vivir el estado 
//     3.2 asignar y heredar props
//     3.3 formulario agregar logica para agregar tarea 
//     3.4 mostrar lista de tareas
//     3.5 tabla- agregar logica para actualizar una tarea
//     3.6 tabla-agregar logica para eliminar una tarea