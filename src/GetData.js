import { useEffect, useState } from "react";

function GetData() {

    const [user, setUser] = useState([])
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("")
    useEffect(() => {
        getList()
    }, [])

    function getList() {
        fetch('http://localhost:3000/data').then((result) => {
            result.json().then((resp) => {
                // console.warn(resp);
                setUser(resp)
                setName(resp[0].name)
                setEmail(resp[0].email)
                setMobile(resp[0].mobile)
            })
        })
    }

    function deleteUser(id) {
        console.warn(id);
        // fetch(`http://localhost:3000/data/${id}`, {
        //     method: 'DELETE'
        // }).then((result) => {
        //     result.json().then((resp) => {
        //         // console.warn(resp);
        //         getList()
        //     })
        // })
    }
    function selectUser(id){
        console.log("================",user[id])
        // setName(user[id-1].name)
        // setEmail(user[id-1].email)
        // setMobile(user[id-1].mobile)
    }
    return (
        <div>
            <h1>Call Get Api</h1>
            <table border="1">
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
                            <td><button onClick={() => selectUser(item.id)}>Update</button></td>
                        </tr>
                    )
                }
            </table><br /><br />
            <div>
                <input type="text" value={name} name="" id="" /><br /><br />
                <input type="text" value={email} name="" id="" /><br /><br />
                <input type="text" value={mobile} name="" id="" /><br /><br />
                <button>Update User</button>
            </div>
        </div>
    )
}

export default GetData;