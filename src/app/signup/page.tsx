"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage(){
    const router = useRouter();
    const [user,setUser] = useState({
        email:"",
        password:"",
        username:"",

    })
    const [buttonDisabled,setButtonDisabled] = useState(false)

    const onSignup = async () => {

    }

    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    },[user])


    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
            <hr />
            <label htmlFor="username">Username</label>
            <input 
                className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"s
                id="username"
                type="text"
                value={user.username}
                onChange={(e)=>setUser({...user,username:e.target.value})}
                placeholder="Username"
            />
             <label htmlFor="email">Email</label>
            <input 
                className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"s
                id="email"
                type="email"
                value={user.email}
                onChange={(e)=>setUser({...user,email:e.target.value})}
                placeholder="Email"
            />
             <label htmlFor="password">Password</label>
            <input 
                className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"s
                id="password"
                type="password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                placeholder="Password"
            />
            <button 
            onClick={onSignup}
            className=" p-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-300 hover:bg-gray-300 hover:text-black hover:border-black-300">
            {buttonDisabled?"No Signup":"Signup"}</button>
            <Link href="/login">Visit Login Page</Link>

        </div>
    )
}