import Card from "@/components/props/card"
import Bio from "@/components/props/bio"
import Form from "@/components/props/form";
import VIP from "@/components/props/vip";
import {useState} from "react"
export default function Props(){
    const[credential, setCredential]= useState({});
    return(
        <>
            <h1>Props in react!</h1>
            <Form
                credential={credential}
                onUpload={(param) => setCredential(param) }>
            </Form>
            <Card 
                image={credential.image}
                size={credential.size}
                name={credential.name} 
                country={credential.country}>
            </Card>
            <Bio
                image={credential.image}
                size={credential.size}
                name={credential.name} 
                country={credential.country}
                description={credential.description}>
            </Bio>
            <VIP title="VIP">
            <Card 
                image={credential.image}
                size={credential.size}
                name={credential.name} 
                country={credential.country}>
            </Card>
            </VIP>
        </>
    )
}