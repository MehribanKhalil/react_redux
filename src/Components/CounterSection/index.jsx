import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { artir, azalt } from "../../Redux/Features/counterSlice";
const CounterSection = () => {
    const count=useSelector((state)=>state.sayac.deyer)
    const dispatch=useDispatch()

    const handleInc=()=>{
        dispatch(artir())
    }
    const handleDec=()=>{
        dispatch(azalt())
    }
  return (
    <div>
      <div>
        <button onClick={handleInc}>Increment</button>
        <span>{count}</span>
        <button onClick={handleDec}>Decrement</button>
      </div>
    </div>
  );
};

export default CounterSection;
