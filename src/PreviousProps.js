import { useState } from "react"

import PropsUser from "./PropsUser";

export default function PreviousProps() {
    const [count, setCount]=useState(0)    
    return (
        <div>
            {/* <h1>Previous Props </h1> */}
            <PropsUser count={count} />
            <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter</button>
        </div>
    )
};