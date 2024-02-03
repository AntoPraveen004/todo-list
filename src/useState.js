import React from 'react'
import {useState} from 'react'
const Count = ()=>{
    const [count,setCount]=useState(0)
    function Increment(){

        setCount((count)=>{
           return count+1
        });

    }
    function Decrement(){
        setCount((count)=>{
            if(count<=0){
                return count=0
            }
            else
            return count -1
        })
    }
    return (
        <main>
            <div> 
            <button>subscribe</button>
            <button onClick={Increment}>+</button>
            <span>{count}</span>
            <button onClick={Decrement}>-</button>
        </div>
        </main>
    )
}
export default Count