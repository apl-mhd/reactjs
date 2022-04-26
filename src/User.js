import React, {useEffect, useState} from "react";


function User(){

    const [user, setUser] = useState([]);

    useEffect(() =>{
        ReadUser()
    }, [])

    const ReadUser = ()=>{
        //fetch("https://jsonplaceholder.typicode.com/users")
        fetch("http://127.0.0.1:8000/api/auth/users/")
        .then(res => res.json())
        .then(result =>{
            setUser(result)
            console.log(result)
            
        })  
    }

    return (
        <h1>helllo</h1>
    )
}

export default User;