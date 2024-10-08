import { useState } from 'react'
import BG from './assets/BG.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-t from-customGrayStroke via-customEnd to-blue-900  h-screen '>
      <div className='flex justify-center pt-28'>
      <button className='bg-yellow-500 px-28 py-3 rounded-3xl text-white font-bold hover:bg-amber-600'>Connect Wallet</button>
      </div>
      <div className='flex justify-center my-10'>
      <img src={BG} className='h-[200px] w-[200px] ' alt="" />
      </div>
      <div className='flex justify-center '>
      <input type="text" className='px-24 bg-violet-200 py-2 rounded-lg ' />
      </div>
      <div>
      <div className='flex justify-center my-4 pt-4'>
      <button className='bg-yellow-500  px-36 py-3 rounded-3xl text-white font-bold hover:bg-amber-600'>Mint</button>
      </div>
      </div>
      <div className='flex justify-center '>
      <p className='text-white '>Powered By Winks.fun</p>
      </div>
      </div>
      
    </>
  )
}

export default App
