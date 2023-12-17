"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import Navbar from "@/addons/Navbar";
import Head from "next/head";
import favicon from "../../assets/favicon.png"
export default function ProfilePage() {
  const [data, setData] = useState("nothing");


  const getUserDetails:any = async () => {
    try {
      const res = await axios.get('/api/users/me');
      setData(res.data.data);
    } catch (error:any) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []); 
  return (
    <>
        <title>Profile</title>
        <link rel="icon" type="image/x-icon" href={favicon.src} className="rounded-full" /> 

      <Navbar /><br></br><br></br><br></br>
      <div className="flex flex-col items-center min-h-screen bg-[#000012]">
        <h1 className="justify-center items-center text-center rounded text-[40px] font-bold border-white p-[60px] profile-header">
         User Profile
        </h1>
        <hr />
       <br></br>
<a href="#" className="flex flex-col items-center border border-gray-200 rounded-lg md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="w-full rounded-md md:h-auto md:w-full mx-2" src="data:image/jpeg;base64,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" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
    <div className="relative overflow-x-auto shadow-md">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    User Id
                </th>
                <td className="px-6 py-4">
                    {data._id}
                </td>
                
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Username
                </th>
                <td className="px-6 py-4">
                    {data.username}
                </td>
              
            </tr>
            <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    E-mail
                </th>
                <td className="px-6 py-4">
                    {data.email}
                </td>
              
            </tr>
        </tbody>
    </table>
</div>
      </div>
</a>
        <hr />
        <button
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Edit Profile
        </button>
      </div>      
    </>
  );
}
