import { useState, useEffect } from "react";
import axios from 'axios';
import Link from "next/link";

const AUTH_TOKEN = 'Bearer ec296bcd21c576df8c537724c44da5c5d07860f492b436301a16128e825a1516'
axios.defaults.headers.common['Authorization']= AUTH_TOKEN

export default function Table() {
    const[users,setUsers]= useState([]);
    const[refresh, setRefresh]= useState(true);
    
    useEffect(() =>{
        if(refresh){
            axios.get('https://gorest.co.in/public/v2/users')
            .then((response) => {
                console.log('respondio bien', response.data)
                setRefresh(false);
                setUsers(response.data);
            }) 
            .catch((error) => {
                console.error(error);
            })
        }
    }, [refresh])

    function handleDelete(id) {
        if (window.confirm("Are you sure you want to proceed?")) {
            axios.delete('https://gorest.co.in/public/v2/users/' + id)
            .then(() => {
                setRefresh(true)
            }) 
            .catch((error) => {
                console.error(error);
            })
        }
    }

    return(
        <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map ((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.gender}</td>
                        <td>{user.status}</td>
                        <td>
                            <Link href= {'/workshop/apis/edit/' + user.id}>UpDate</Link>
                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
    )
}