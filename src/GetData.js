import { useEffect, useState } from "react";

function GetData() {

    const [user, setUser] = useState([])
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [mobile, setMobile] = useState("");
    // const [userId, setUserId]=useState(null)
    useEffect(() => {
        getList()
    }, [])

    function getList() {
        fetch('http://localhost:3000/data').then((result) => {
            result.json().then((resp) => {
                // console.warn(resp);
                setUser(resp)
                // setName(resp[0].name)
                // setEmail(resp[0].email)
                // setMobile(resp[0].mobile)
                // setUserId(resp[0].id)
            })
        })
    }

    function deleteUser(id) {
        // console.warn(id);
        fetch(`http://localhost:3000/data/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                // console.warn(resp);
                getList()
            })
        })
    }
    // console.warn(user);
    // const selectUser =(id)=>{
    //     // console.log("================",user[id])
    //     let item=user[id-1]
    //     setName(item.name)
    //     setEmail(item.email)
    //     setMobile(item.mobile)
    //     setUserId(item.id)
    // }

    // const updateUser = ()=>{
    //     let item= {name, email, mobile,userId}
    //     fetch(`http://localhost:3000/data/${userId}`, {
    //         method: 'PUT',
    //         headers:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(item)
    //     }).then((result) => {
    //         result.json().then((resp) => {
    //             // console.warn(resp);
    //             getList()
    //         })
    //     })
    // }
    return (
        <div>
            <h1>Call Get Api</h1>
            <table border="1">
                <tbody>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Mobile</td>
                    <td>Operation</td>
                </tr>
                {
                    user.map((item, i) =>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.mobile}</td>
                            <td><button onClick={() => deleteUser(item.id)}>Delete</button></td>
                            {/* <td><button onClick={() => selectUser(item.id)}>Update</button></td> */}
                        </tr>
                    )
                }
                </tbody>
            </table>
            {/* <br /><br /> */}
            {/* <div>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} /><br /><br />
                <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} /><br /><br />
                <button onClick={updateUser}>Update User</button>
            </div> */}
        </div>
    )
}

export default GetData;