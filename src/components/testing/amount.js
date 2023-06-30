import { useState } from "react";

export default function Amount() {
    const [amount,setAmount] = useState(0);

    function changeAmount(type){
        if (type === '+'){
          setAmount(amount + 1);
        } else {
            setAmount(amount - 1);
        }
    }
    return (
        <>
            <button onClick={() => changeAmount('+')}>+</button>
            <p aria-label='amount'>{amount}</p>
            <button onClick={() => changeAmount('-')}>-</button>
            
        </>
    )
}