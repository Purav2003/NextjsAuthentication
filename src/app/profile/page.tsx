"use client";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useState, useEffect } from "react";
import Navbar from "@/addons/Navbar";
import Head from "next/head";

export default function ProfilePage() {
  const [data, setData] = useState("nothing");


  const getUserDetails = async () => {
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
    <Head>
      <title>Profile</title>
    </Head>
      <Navbar /><br></br><br></br><br></br>
      <div className="flex flex-col items-center min-h-screen bg-[#000012]">
        <h1 className="justify-center items-center text-center rounded text-[40px] font-bold border-white p-[60px] profile-header">
         User Profile
        </h1>
        <hr />
       <br></br>
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://english.tupaki.com/images/authorplaceholder.jpg?type=1&v=2&width=500&height=300" alt="" />
    <div className="flex flex-col justify-between p-4 leading-normal">
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
