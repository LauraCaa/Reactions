import { useState } from "react"
import axios from 'axios'
import Link from "next/link";

const AUTH_TOKEN = 'Bearer ec296bcd21c576df8c537724c44da5c5d07860f492b436301a16128e825a1516'
axios.defaults.headers.common['Authorization']= AUTH_TOKEN

export default function New (){
    const [user, setUser] = useState({});

    function handleSubmit(event) {
        event.preventDefault();
        axios.post('https://gorest.co.in/public/v2/users', user)
        .then ((response) => {
            console.log('respondio bien la creacion', response);
            window.location.href = '/workshop/apis'
        })
        .catch((error) => {
            console.error(error);
        });
    };

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" required onChange={(event)=> setUser({...user, name: event.target.value})}/>
                <label htmlFor="gender">Gender</label>
                <input type="text" id="gender" required onChange={(event)=> setUser({...user, gender: event.target.value})}/>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" required onChange={(event)=> setUser({...user, email: event.target.value})}/>
                <label>Status</label>
                <input type="radio"  name="status" id= "active" value= "active" onChange={(event)=> setUser({...user, status: event.target.value})}/>
                <label htmlFor="active">Active</label>
                <input type="radio" name="status" id= "inactive" value= "inactive" onChange={(event)=> setUser({...user, status: event.target.value})}/>
                <label htmlFor="inactive">Inactive</label>
                <input type ="submit" value="create"/>
                <Link href='/workshop/apis'>Cancel</Link>
            </form>
        </>
    )
}