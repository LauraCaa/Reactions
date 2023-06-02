"use client";
import { useState } from 'react'
import styles from '../app/page.module.css'

export default function ShoppingCar() {
    const [calculator, setCalculator] = useState(0)
    function add(){
      setCalculator (calculator + 1)
      console.log(calculator)
    }
    function subtract(){
      if (calculator > 0) {
        setCalculator (calculator - 1)
      }
    }
    return (
      <div className= {styles.main}>
        <button onClick={() => add()}>+</button>
        <h1>{calculator}</h1>
        <button onClick={() => subtract()}>-</button>
      </div>
    )
  }