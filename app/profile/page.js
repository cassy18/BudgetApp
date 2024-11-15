"use client";

import React from 'react'

export default function page() {
    // TODO: Update the theme after selection
    // TODO: Fix styling to the page
    const themes = [
        {
            name: 'Soft Pink',
            primary: '#FFC0CB',
            secondary: '#FF8096',
            accent: '#FF4162',
            darkAccent: '#9e263a'
        },
        {
            name: 'Ocean Blues',
            primary: '#ADE8F4',
            secondary: '#48CAE4',
            accent: '#0096C7',
            darkAccent: '#023E8A'
        },
        {
            name: 'Monochrome',
            primary: '#ECEFF1',
            secondary: '#CFD8DC',
            accent: '#90A4AE',
            darkAccent: '#607D8B'
        },
        {
            name: 'Soft Pastels',
            primary: '#FFB3BA',
            secondary: '#B2F4FF',
            accent: '#B3E5C7',
            darkAccent: '#A7BFD4'
        },
        {
            name: 'Vibrant',
            primary: '#FF6E6F',
            secondary: '#FFBC42',
            accent: '#5BBA6F',
            darkAccent: '#374A67'
        },
        {
            name: 'Earth Tones',
            primary: '#D4A373',
            secondary: '#A38671',
            accent: '#7E685A',
            darkAccent: '#4D3B33'
        }
    ]
    
    const changeTheme = (theme) => {
        console.log("clicked");
        console.log(theme);
        document.documentElement.style.setProperty('--primary', theme.primary);
        document.documentElement.style.setProperty('--secondary', theme.secondary);
        document.documentElement.style.setProperty('--accent', theme.accent);
        document.documentElement.style.setProperty('--dark-accent', theme.darkAccent);
        console.log(document.documentElement.style.getPropertyValue('--primary'));
    }

    return (
        <div className='p-2'>
            <h1 className='text-lg font-bold'>Customize your experience!</h1>
            <div className='flex gap-4 items-center'>
                <p>Current colour scheme: </p>
                <div className='rounded-full border border-black w-12 h-12 bg-primary'></div>
                <div className='rounded-full border border-black w-12 h-12 bg-secondary'></div>
                <div className='rounded-full border border-black w-12 h-12 bg-accent'></div>
                <div className='rounded-full border border-black w-12 h-12 bg-dark-accent'></div>
            </div>
            <p>Choose a different colour scheme: </p>
            <div className='grid grid-cols-3 gap-4 items-center'>
                {Object.keys(themes).map((theme, index) => {
                    return(
                        <div className='border max-w-fit p-1' key={index}>
                            <p>{themes[theme].name}</p>
                            <div className='flex gap-4 items-center p-2'
                            onClick={() => changeTheme(themes[theme])}>
                                <div className='rounded-full border border-black w-12 h-12'
                                style={{backgroundColor: themes[theme].primary}}></div>
                                <div className='rounded-full border border-black w-12 h-12'
                                style={{backgroundColor: themes[theme].secondary}}></div>
                                <div className='rounded-full border border-black w-12 h-12'
                                style={{backgroundColor: themes[theme].accent}}></div>
                                <div className='rounded-full border border-black w-12 h-12'
                                style={{backgroundColor: themes[theme].darkAccent}}></div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>

    )
}
