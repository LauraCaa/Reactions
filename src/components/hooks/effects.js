import { useEffect,useState } from "react";

export default function Effects(){
    const[show,setShow]= useState(false);
    const[time,setTime]= useState({counter: 0});

    useEffect(() => {
        if(!show) {
            console.log('listen a dependency useEffect listen to show changes');
            const interval = setInterval(() => {
                setTime((time) => ({counter: time.counter + 1})) 
            },1000)
            return() => {
                setTime((time) => ({counter: 0})) 
                clearInterval(interval);
            };
        }       
    },[show]);
    useEffect(() => {
        console.log('Empty dependecies - Just trigger when mount and unmount compone†s')
    } , []);

    return(
        <>
            <h4>Effects</h4>
            <input type="checkbox" onChange={()=> setShow(!show)}/>
            {time.counter}
        </>
    )
}