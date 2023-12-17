"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",

    })
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [loading, setLoading] = useState(false)
    const onLogin = async () => {
        try {
            setLoading(true)
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success", response.data);
            toast.success("Login Success")
            router.push("/")

        } catch (error: any) {
            console.log("Login Failed", error.message);
            toast.error(error.message)

        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false)
        }
        else {
            setButtonDisabled(true)
        }
    }, [user])                                                                                                                                                                                                                                                                                                                                                                                                          
    return (
        <div className="lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 gap-4 bg-[#000010] h-[100vh]">
            <Toaster />
            <div><img src="https://images.unsplash.com/photo-1554224311-beee415c201f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2ODA3NTgyfHxlbnwwfHx8fHw%3D&w=1000&q=80" className="w-0 h-0 invisible sm:visible md:visible lg:visible lg:w-[50vw] object-cover md:w-[45vw] md:h-[100%] lg:h-[100vh]" /></div>
            <div className="p-8 px-16 mt-[5%] bg-[#000010]">
                <h1 className="text-[65px] font-bold">Login</h1><br />
                <h3 className="text-[35px]">Welcome back,</h3><br></br>
                <form className="max-w-sm">
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

                    <button type="button"  onClick={onLogin} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    <br></br><br></br>
                    <h1>New user? <Link href="/signup" className="underline">Signup</Link></h1>
                </form>
            </div>
        </div>

        // <div className="flex flex-col items-center justify-center min-h-screen py-2">
        //     <h1>{loading?"Loading":"Login"}</h1>
        //     <hr />

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
        //     onClick={onLogin}
        //     className="p-2 px-4 border border-gray-300 rounded-lg mb-4 
        //     focus:outline-none focus:border-gray-300 hover:bg-gray-300
        //      hover:text-black hover:border-black-300">{buttonDisabled?"No Login":"Login"}</button>

        //     <Link href="/signup">Visit Signup Page</Link>

        // </div>
    )
}