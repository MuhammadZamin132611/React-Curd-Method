import { useState } from "react"

export default function PreviousState() {
    const [count, setCount] = useState(1)
    function updateCounter() {
        // let rand=Math.floor(Math.random()*10)
        // setCount((pre)=>{
        // console.warn(pre);
        // if(pre-rand<5){
        //     alert ("topup")
        // }
        // if(pre<5){
        //     return "low Value"
        // }
        // return rand;
        // })
        for (let i = 0; i < 5; i++) {
            setCount((pre)=>
            {return pre+1})
        }
    }
    return (
        <div>
            <h1>Previous State {count}</h1>
            <button onClick={updateCounter}>Click Me to Update Counter</button>
        </div>
    )
};