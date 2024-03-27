import React, { useEffect, useRef } from "react"

export default function PropsUser(props) {
    const lastVal=useRef();
    useEffect(()=>{
        lastVal.current=props.count
    })
    const previousProps=lastVal.current
    return (
        <div>
            <h1>Current Val {props.count}</h1>
            <h2>Previous Val {previousProps}</h2>
            <h1>Difference Val {props.count - previousProps}</h1>
        </div>
    )
};