import React, { useReducer } from "react";
import "../../global/global.css";
import "./countSystem.css";
import Button from './CustomButton';

/**
 * Takes the current value of state.count as argument.
 * Finds the prior prime number based on the current count.
 * As no prime number is less than 2, it outputs 0 until count is
 * larger than 1.
 * @param {int} x 
 */
const isPrime = x =>{
  for(var i = 2; i < x; i++){
    if (x % i === 0) return false;
  }
  return x > 1;
}


/**
 * Finds the next fibonacci number.
 * Takes state.fibIndex as argument, which tracks the index-value
 * of the prior call to this function. I.e it keeps track of the next
 * Fibonacci number, even if the user increments / decrements with other
 * functions in-between.
 */
var fib = [];
fib[0] = 0;
fib[1] = 1;
const nextFibonacciNumber = (i) => {
  fib[i] = fib[i-2] + fib[i-1];
  return fib[i];
}

/**
 * Changes the state.count value based on the action.type given.
 * Unequal: Finds the next unequal number.
 * Prime: Finds the prior prime number.
 * Fibonacci: Finds the next Fibonacci number.
 */
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "unequal":
      return {...state, count : state.count % 2 == 0 ? state.count + 1 : state.count + 2}
    case "prime":
      let count = state.count;
      while(count > 2){
        count--;
        if(isPrime(count)){
          break;
        }
      }
      return {...state, count: count}
    case "fibonacci":
      const fibIndex = state.fibIndex;
      const nextFibNumber =  nextFibonacciNumber(fibIndex);
      return {
        count: nextFibNumber, 
        fibIndex: state.fibIndex + 1
      }
    default:
      throw new Error("No valid selection was used");
  }
};

export default function CountSystem() {
  const [state, dispatch] = useReducer(reducer, { count: 0, fibIndex: 2 });
  return (
    <>
        <div id="count-wrapper">
          <h1>Count</h1>
          <h2>{state.count}</h2>
        </div>
        <Button 
                text="Increment" 
                func={() => dispatch({ type: "increment" })}
                style={{ position: 'absolute', marginTop: '-325px', left: 'calc(50% - 50px)'}}
        />
        <Button 
                text="Decrement" 
                func={() => dispatch({ type: "decrement" })}
                style={{ position: 'absolute', marginTop: '275px', left: 'calc(50% - 50px)', marginLeft: '-125px'}}
        />
          <Button 
                text="Next unequal" 
                func={() => dispatch({ type: "unequal" })}
                style={{ position: 'absolute', marginTop: '-130px', left: 'calc(50% - 50px)', marginLeft: '-165px'}}
        />
        <Button 
                text="Previous prime" 
                func={() => dispatch({ type: "prime" })}
                style={{ position: 'absolute', marginTop: '275px', left: 'calc(50% - 50px)', marginLeft: '125px'}}
        />
        <Button 
                text="Next Fibonacci" 
                func={() => dispatch({ type: "fibonacci" })}
                style={{ position: 'absolute', marginTop: '-130px', left: 'calc(50% - 50px)', marginLeft: '165px'}}
        />
    </>
  );
}
