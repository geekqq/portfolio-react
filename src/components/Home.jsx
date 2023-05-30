import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import potrait from '../assets/sunny_round.png'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Stone Hoo</h1>
            <h2 className='text-2xl sm:text-5xl font-bold text-[#8892b0]'>
                I am a 
                    <TypeAnimation
                        sequence={[
                            ' Father of Three', // Types 'One'
                            2000, // Waits 1s
                            ' Coder', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            ' Geek', // Types 'Three' without deleting 'Two'
                            2000,
                            ' Tech Enthusiast',
                            1000,
                            () => {
                            console.log('Sequence completed'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack developer specializing in building (and occasionally designing) exceptional degital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    <Link to='work' smooth={true} duration={500}>
                        View Work
                    </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>              
            </div>
            <div className='ml-auto'>
                <img className='w-60' src={potrait} alt='Myself icon' />
            </div>
        </div>
    </div>
  )
}

export default Home