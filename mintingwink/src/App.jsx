import { useState } from 'react'
import BG from './assets/BG.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-700 h-screen '>
      <div className='flex justify-center pt-28'>
      <button className='bg-blue-500 px-28 py-3 rounded-3xl text-white font-bold'>Connect Wallet</button>
      </div>
      <div className='flex justify-center my-10'>
      <img src={BG} className='h-[200px] w-[200px] ' alt="" />
      </div>
      <div className='flex justify-center '>
      <input type="text" className='px-24 bg-blue-200 py-2 rounded-lg' />
      </div>
      <div>
      <div className='flex justify-center my-10'>
      <button className='bg-blue-500 px-36 py-3 rounded-3xl text-white font-bold'>Mint</button>
      </div>
      </div>
      </div>
      
    </>
  )
}

export default App
