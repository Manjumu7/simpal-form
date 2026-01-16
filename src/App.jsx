import React, { useState } from 'react'
import Card from './components/card'

function App() {
  const [userName, setuserName] = useState('')
  const [UserRole, setUserRole] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const [AllUser, setAllUser] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(userName, imageURL, UserRole, userDesc)

    const OldUser = [...AllUser]
    OldUser.push([userName, UserRole, userDesc, imageURL])
    console.log(OldUser)

    setAllUser(OldUser)

    setuserName('')
    setUserRole('')
    setimageURL('')
    setuserDesc('')
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form
        onSubmit={submitHandler}
        className='p-2 flex flex-wrap '
      >

        <input
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='enter your name'
        />

        <input
          value={imageURL}
          onChange={(e) => setimageURL(e.target.value)}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='image url'
        />

        <input
          value={UserRole}
          onChange={(e) => setUserRole(e.target.value)}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='enter role'
        />

        <input
          value={userDesc}
          onChange={(e) => setuserDesc(e.target.value)}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]'
          type="text"
          placeholder='enter description'
        />

        <button className='px-5 py-2 text-xl font-semibold active:scale-95 cursor-pointer rounded bg-emerald-700 m-2 w-[92%]'>
          create User
        </button>
      </form>
      <div className='px-4 py-5 gap-4 flex flex-wrap'>
        {AllUser.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className='w-[20vw] rounded-xl py-6 px-6 flex flex-col items-center text-center h-80 bg-white text-black'
            >
              <img
                className='h-24 w-24 rounded-full object-center object-cover'
                src={elem[3]}
                alt=""
              />

              <h1 className='text-2xl mt-2 font-semibold'>
                {elem[0]}
              </h1>

              <h5 className='text-blue-500 text-semibold text-lg my-2'>
                {elem[1]}
              </h5>

              <p className='font-medium text-sm leading-tight'>
                {elem[2]}
              </p>

              <button className='px-4 py-2 rounded bg-red-600 text-xs active:scale-95 cursor-pointer'>
                remove
              </button>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default App
