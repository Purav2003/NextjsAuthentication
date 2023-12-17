import Image from 'next/image'
import Navbar from '@/addons/Navbar';
export default function Home() {
  return (
    <div className='homePage'>
      <Navbar />

      <main className={`swing flex min-h-screen flex-col items-center justify-between p-24  `}>
      <h1 className='bg-gradient-to-r from-blue-500 via-blue-700 via-yellow-300 to-purple-600 bg-clip-text text-transparent rounded text-[100px] mt-[40px] font-bold border border-white p-[70px] border-4'>
  HOME PAGE<br />
  <p className='text-xl text-center'>Coming Soon</p>
</h1>
      </main>
    </div>
  );
}
