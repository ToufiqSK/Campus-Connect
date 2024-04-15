import React from 'react'
import Left from './Left'
import Feed from './Feed'
import Right from './Right'
import Navbar from './Navbar'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='flex w-[1920px] h-full justify-center text-center'>

                <Left />
                <Feed />
                <Right />
            </div>
        </>
    )
}

export default Home
