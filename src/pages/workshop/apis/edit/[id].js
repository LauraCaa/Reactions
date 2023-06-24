import { useEffect, useState } from "react"
import axios from 'axios'
import Link from "next/link";
import { useRouter } from "next/router";

const AUTH_TOKEN = 'Bearer ec296bcd21c576df8c537724c44da5c5d07860f492b436301a16128e825a1516'
axios.defaults.headers.common['Authorization']= AUTH_TOKEN

export default function Edit(){
    const [user, setUser] = useState({
        name: '',
        gender: '',
        email: '',
        status: ''
    });

    const { id } = useRouter().query;
    useEffect(() => {
        axios.get('https://gorest.co.in/public/v2/users/' + id)
        .then ((response) => {
            setUser(response.data)
        })
        .catch((error) => {
            console.error(error);
        });
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        axios.put('https://gorest.co.in/public/v2/users/' + id, user)
        .then (() => {
            window.location.href = '/workshop/apis';
        })
        .catch((error) => {
            console.error(error);
        });
    }
    return(
         <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required value={user.name} onChange={(event)=> setUser({...user, name: event.target.value})} />
                <label htmlFor="gender">Gender</label>
                <input type="text" id="gender" required value={user.gender} onChange={(event)=> setUser({...user, gender: event.target.value})} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" required value={user.email} onChange={(event)=> setUser({...user, email: event.target.value})} />
                <label>Status</label>
                <input  checked={user.status == 'active' ? true : false} type="radio" name="status" id= "active" value= "active" onChange={(event)=> setUser({...user, status: event.target.value})}/>
                <label htmlFor="active">Active</label>
                <input checked={user.status == 'inactive' ? true : false} type="radio" name="status" id= "inactive" value= "inactive" onChange={(event)=> setUser({...user, status: event.target.value})}/>
                <label htmlFor="inactive">Inactive</label>
                <input type ="submit" value="Update" />
                <Link href='/workshop/apis'>Cancel</Link>
            </form>
    )
}