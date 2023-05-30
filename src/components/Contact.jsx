import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/7dde307a-253b-4159-a9e0-9c4fdf87dde5' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-500'>Contact</p>
                <p className='text-gray-400 py-4'>//Submit the form below or shot me an email - jinwei1014@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' name='Name' placeholder='Name' required />
            <input className='my-4 p-2 bg-[#ccd6f6]' type='email' name='Email' placeholder='Email' required />
            <textarea className='bg-[#ccd6f6] p-2' name='Message' rows='10' placeholder='Message' required ></textarea>
            <button className='text-gray-500 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                Let's Get in Touch!
            </button>
        </form>
    </div>
  )
}

export default Contact