import React, { useState } from 'react'

function App() {
  const [userName, setuserName] = useState('')
  const [UserRole, setUserRole] = useState('')
  const [imageURL, setimageURL] = useState('')
  const [userDesc, setuserDesc] = useState('')

  const [AllUser, setAllUser] = useState([])

  const submitHandler = (e)=>{
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
          onChange={(e)=> setuserName(e.target.value)}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]' 
          type="text" 
          placeholder='enter your name' 
        />

        <input
          value={imageURL}
          onChange={(e)=> setimageURL(e.target.value)}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]' 
          type="text" 
          placeholder='image url' 
        />

        <input 
          value={UserRole}
          onChange={(e)=> setUserRole(e.target.value)}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]' 
          type="text" 
          placeholder='enter role' 
        />

        <input 
          value={userDesc}
          onChange={(e)=> setuserDesc(e.target.value)}
          className='border-2 px-5 py-2 rounded m-2 w-[48%]' 
          type="text" 
          placeholder='enter description' 
        />

        <button className='px-5 py-2 text-xl font-semibold active:scale-95 cursor-pointer rounded bg-emerald-700 m-2 w-[92%]'>
          create User
        </button>
      </form>
      <div className='px-4 py-10 flex flex-wrap '>
        {AllUser.map(function(){
            return 'hello'
        })}
      </div>
    </div>
  )
}
 
export default App
