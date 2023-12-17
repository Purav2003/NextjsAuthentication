"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { log } from "console";
import { Toaster } from "react-hot-toast";
export default function SignupPage(){
    const router = useRouter();
    const [user,setUser] = useState({
        email:"",
        password:"",
        username:"",

    })
    const [buttonDisabled,setButtonDisabled] = useState(false)
    const [loading,setLoading] = useState(false)
    const onSignup = async () => {
        try {
            setLoading(true)            
            const response = await axios.post("/api/users/signup",user)
            console.log("Signup Success",response.data);
            router.push("/login")
            toast.success("User Created Successfully")
            
        } catch (error : any) {
            console.log("Signup Failed",error.message)
            toast.error(error.message)            
        }
        finally{
            setLoading(false)
        }
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
        <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-32 lg:gap-8 bg-[#000010] h-[100vh]">
                  <Toaster />

            <div className="px-8 lg:px-28 w-[100vw] py-12 bg-[#000010]">
            <h1 className="text-[65px] font-bold">Sign up</h1>
                <h3 className="text-[30px] w-full">Create your account,</h3><br></br>
                <form className="max-w-sm ">
                <div className="mb-5 ">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Username</label>
                        <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your username"
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            required />
                    </div>
                    <div className="mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
                        <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.password}
                            placeholder="Enter your password"
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                            required />
                    </div>

                    <button type="button"  onClick={onSignup} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
                    <br></br><br></br>
                    <h1>Existing user? <Link href="/login" className="underline">Login</Link></h1>
                </form>
            </div>
            <div>
                <img src="https://img.freepik.com/premium-photo/dog-beach-with-cocktail-generative-ai_74760-1441.jpg" className="w-0 h-0 invisible sm:visible md:visible lg:visible lg:w-[50vw] md:w-[45vw] object-cover md:h-[100%] lg:h-[100vh]"/>
            </div>
            </div>

        // <div className="flex flex-col items-center justify-center min-h-screen py-2">
        //     <h1>{loading?"Processing":"Signup"}</h1>
        //     <hr />
        //     <label htmlFor="username">Username</label>
        //     <input 
        //         className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        //         id="username"
        //         type="text"
        //         value={user.username}
        //         onChange={(e)=>setUser({...user,username:e.target.value})}
        //         placeholder="Username"
        //     />
        //      <label htmlFor="email">Email</label>
        //     <input 
        //         className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        //         id="email"
        //         type="email"
        //         value={user.email}
        //         onChange={(e)=>setUser({...user,email:e.target.value})}
        //         placeholder="Email"
        //     />
        //      <label htmlFor="password">Password</label>
        //     <input 
        //         className="text-black p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        //         id="password"
        //         type="password"
        //         value={user.password}
        //         onChange={(e)=>setUser({...user,password:e.target.value})}
        //         placeholder="Password"
        //     />
        //     <button 
        //     onClick={onSignup}
        //     className=" p-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-300 hover:bg-gray-300 hover:text-black hover:border-black-300">
        //     {buttonDisabled?"No Signup":"Signup"}</button>
        //     <Link href="/login">Visit Login Page</Link>

        // </div>
    )
}