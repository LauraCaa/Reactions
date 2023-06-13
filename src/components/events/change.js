import {useState} from "react"
export default function Change(){
    const[change,setChange] = useState('');
    return(
        <>
            <h1>Onchange</h1>
            <p>selected color: {change}</p>
            <select value={change} onChange={(event) => setChange(event.target.value)}>
                <option disabled value="">Select color</option>
                <option value='red'>Red</option>
                <option value='blue'>Blue</option>
                <option value='pink'>Pink</option>
                <option value='white'>White</option>
                <option value='grey'>Gray</option>
            </select>
        </>
    )
}