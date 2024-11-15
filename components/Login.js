import React from 'react'
import { Fugaz_One } from 'next/font/google';
import Button from './Button';
const fugaz = Fugaz_One({subsets: ["latin"], weight: ['400']});

export default function Login() {
    return (
        <div className='flex flex-col flex-1 justify-center items-center gap-4'>
            <h3 className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>Log In / Register</h3>
            <p>You're one step away!</p>
            <input className='w-full max-w-[350px] mx-auto px-3 py-2 sm:py-3 border 
                duration-200 hover:border-dark-accent focus:border-dark-accent border-solid border-accent rounded-full outline-none'
                placeholder='Email'/>
            <input className='w-full max-w-[350px] mx-auto px-3 py-2 sm:py-3 border 
                duration-200 hover:border-dark-accent focus:border-dark-accent border-solid border-accent rounded-full outline-none'
                placeholder='Password' type='password'/>
            <div className='max-w-[350-px] w-full mx-auto'>
                <Button text="Submit" full/>
            </div>
            <p>Don't have an account? 
                <span className='text-accent'> Create one!</span>
            </p>
        </div>
    )
}
