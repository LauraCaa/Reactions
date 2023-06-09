import { useState } from 'react'
export default function ProductAmount({price, updatePrice}) {
  const [amount, setAmount] = useState(0)
  function changeAmount(type){
    if (type === '+'){
      setAmount(amount + 1);
      updatePrice(price * (amount + 1)); 
    } else if (amount > 0) {
      setAmount(amount - 1);
      updatePrice(price * (amount - 1 ));
    };
  }
    return (
      <>
        <button onClick={() => changeAmount('+')}>+</button>
        <h1>{amount}</h1>
        <button onClick={() => changeAmount('-')}>-</button>
      </>
      );
  }
  