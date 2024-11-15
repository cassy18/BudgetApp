"use client";
import React from 'react'
import { useState } from 'react';

// TODO: Add filtering for date
// TODO: Add search functionality
export default function TransactionList(props) {
    const [openCategoryFilter, setOpenCategoryFilter] = useState(false)
    const [filter, setFilter] = React.useState('All')
    const transactions = [
        {
            name: 'Shirt',
            description: 'Bought a new shirt',
            cost: 20,
            category:{'id': 1, 'name': 'Apparel', 'colour': '#ff6e6f'},
            date: (new Date()).toDateString(),
            time: (new Date()).toLocaleTimeString(),
        },
        {
            name: 'Lunch',
            description: 'Got lunch from subway',
            cost: 10,
            category:{'id': 2, 'name': 'Food', 'colour': '#B3FFD9'},
            date: (new Date()).toDateString(),
            time: (new Date()).toLocaleTimeString(),
        },
        {
            name: 'Groceries',
            description: 'Bought groceries for the week.',
            cost: 70,
            category:{'id': 3, 'name': 'Groceries', 'colour': '#B3CFFF'},
            date: (new Date()).toDateString(),
            time: (new Date()).toLocaleTimeString(),
        },
    ]
    const categories = [ 
        {'id': 1, 'name': 'Apparel', 'colour': '#ff6e6f'},
        {'id': 2, 'name': 'Food', 'colour': '#B3FFD9'},
        {'id': 3, 'name': 'Groceries', 'colour': '#B3CFFF'},
        {'id': 4, 'name': 'Outings', 'colour': '#FFD1B3'},
        {'id': 5, 'name': 'Date', 'colour': '#FFB3E0'},
        {'id': 6, 'name': 'Entertainment', 'colour': '#D1B3FF'},
        {'id': 7, 'name': 'Transport', 'colour': '#FFF2B3'},
        {'id': 8, 'name': 'Misc', 'colour': '#CFFFB3'},
    ]

    return (
        <div className='text-lg flex flex-col items-center space-y-1'>
            <input className='w-80 p-1 border-2 border-gray-300 rounded-md' type='text' placeholder='Search Transactions'/>
            <div className=''>
                <p className='font-bold'>Filter transactions</p>
                {openCategoryFilter ? <button className="bg-secondary rounded-t-md p-1"
                    onClick={() => setOpenCategoryFilter(false)}>Close Filter Category</button> : 
                <button className="bg-accent rounded-t-md p-1"
                    onClick={() => setOpenCategoryFilter(true)}>Filter Category</button>}
                {openCategoryFilter ? <div className='bg-secondary'>
                    <button className='rounded-md p-2 m-1 bg-slate-900 text-white'
                        onClick={() => setFilter('All')}>All</button>
                    {categories.map((category, index) => {
                        return(
                            <button key={index} className='rounded-md p-2 m-1'
                            style={{backgroundColor: category.colour}}
                            onClick={() => setFilter(category)}>{category.name}</button>
                        )
                    })}
                </div> : null}
                <div className='h-64 overflow-y-auto space-y-2'>
                {transactions.map((transaction, index) => (
                    (filter === 'All' || transaction.category.id === filter.id) ? (
                        <div key={index} className='bg-[#ffa4b3] rounded-md p-2 m-1'>
                            <div className='flex items-center space-x-2'>
                                <div className='rounded-full w-8 h-8'
                                style={{backgroundColor: transaction.category.colour}}></div>
                            <p className='font-bold'>{transaction.name} - <span className='font-style: italic'>${transaction.cost}</span></p>
                            </div>
                            <p>{transaction.description}</p>
                            <p>{transaction.date}, {transaction.time}</p>
                        </div>
                    ) : null
                ))}
                </div>
            </div>
        </div>
    )
}
