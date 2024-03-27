import React from "react"

export default function StateWithObjects() {
    const [data, setData]=React.useState({name:'zamin', age:27})
    return (
        <div>
           <h1>State With Objects</h1>
           <input type="text" placeholder="enter name" value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
           <input type="text" placeholder="enter age" value={data.age} onChange={(e)=>setData({...data,age:e.target.value})}/>
           {/* <input type="text" placeholder="enter name" value={data.name} onChange={(e)=>setData({age:data.age,name:e.target.value})}/> */}
           {/* <input type="text" placeholder="enter age" value={data.age} onChange={(e)=>setData({name:data.name,age:e.target.value})}/> */}
           <h1>{data.name}</h1>
           <h1>{data.age}</h1>
        </div>
    )
};