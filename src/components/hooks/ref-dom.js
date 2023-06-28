import { useRef,useEffect } from "react"

export default function RefDom() {
    const myRef = useRef(null);
    useEffect( () => {
        if (myRef.current) {
            console.log(myRef.current)
            myRef.current.scrollIntoView();
        }
    }, [myRef.current])


    return(
        <>
            <h3> Ref Dom !!</h3>
            <div ref={myRef}></div>
        </>
    )
}
