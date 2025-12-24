import React, { use, useEffect } from "react";
import "./Profile.css";
import axios from "axios";
// import profileImg from "./img/self.jpg";
// import profileImg from "C:\Users\Pratik\empmanagementsystem\public\img\self.jpg";
// ✅ IMPORT IMAGE

export default function Profile() {

    useEffect(()=>{
        handelChange();
    })

    let handelChange = ()=>{
        let user = JSON.parse(localStorage.getItem("userInfo"))
        console.log(user);
        
        axios.get(`http://localhost:8080/findById/${user.uid}`)
        .then((res)=>{
            console.log(res.data);
            
        }).catch((err)=>{

        })
        
    }



    return (
        <div
            className="profile"
            style={{ backgroundImage: "url(/img/self.jpg)" }}
            onClick={handelChange}
        ></div>

    );
}
