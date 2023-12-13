"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage(){
    const router = useRouter();
    const [user,setUser] = useState({
        email:"",
        password:"",

    })
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [loading,setLoading] = useState(false)
    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login",user);
            console.log("Login Success",response.data);
            toast.success("Login Success")
            router.push("/profile")
            
        } catch (error:any) {
            console.log("Login Failed",error.message);
            toast.error(error.message)
            
        }finally{
            setLoading(false)
        }
    }
    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false)
        }
        else{
            setButtonDisabled(true)
        }
    },[user])
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading?"Loading":"Login"}</h1>
            <hr />
          
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
            onClick={onLogin}
            className="p-2 px-4 border border-gray-300 rounded-lg mb-4 
            focus:outline-none focus:border-gray-300 hover:bg-gray-300
             hover:text-black hover:border-black-300">{buttonDisabled?"No Login":"Login"}</button>

            <Link href="/signup">Visit Signup Page</Link>

        </div>
    )
}