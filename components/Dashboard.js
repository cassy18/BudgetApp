"use client";
import { useState } from 'react';
import { Fugaz_One } from 'next/font/google';
import Button from './Button';
import TransactionList from './TransactionList';
const fugaz = Fugaz_One({subsets: ["latin"], weight: ['400']});
export default function Dashboard() {
    const [display, setDisplay] = useState(false);
    const [openTransactions, setOpenTransactions] = useState(false);
    const [categorySelected, setCategorySelected] = useState(null);
    const [transactionName, setTransactionName] = useState('');
    const [transactionAmt, setTransactionAmt] = useState('');

    const statuses = {
        num_days: 14,
        time_remaining: '13:14:26',
        date: (new Date()).toDateString(),
    }

    const budgetInfo = {
        budget: 50,
        spent: 0,
        remaining: 50,
    }

    const categories = [ 
        {'id': 1, 'name': 'Apparel', 'colour': '#ff6e6f'},
        {'id': 2, 'name': 'Food', 'colour': '#B3FFD9'},
        {'id': 3, 'name': 'Groceries', 'colour': '#B3CFFF'},
        {'id': 4, 'name': 'Outings', 'colour': '#FFD1B3'},
        {'id': 5, 'name': 'Date', 'colour': '#FFB3E0'},
        {'id': 6, 'name': 'Entertainment', 'colour': '#D1B3FF'},
        {'id': 7, 'name': 'Transport', 'colour': '#FFF2B3'},
        {'id': 8, 'name': 'Misc', 'colour': '#CFFFB3'},
    ];

    // Dummy transactions
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
            description: 'Bought groceries for the week',
            cost: 70,
            category:{'id': 3, 'name': 'Groceries', 'colour': '#B3CFFF'},
            date: (new Date()).toDateString(),
            time: (new Date()).toLocaleTimeString(),
        },
    ]

    function toggleDisplay() {
        setCategorySelected(null);
        setDisplay(!display);
    }
    
    function toggleTransactionList() {
        setCategorySelected(null);
        setDisplay(!display);
        setOpenTransactions(!openTransactions);
    }

    function handleCategoryClick(id) {
        setCategorySelected(id);
    }

    function submitTransaction() {
        // TODO: Add transaction logic to this!
        console.log('Transaction submitted');
        console.log('Name:', transactionName);
        console.log('Amount:', transactionAmt);
        console.log('Category:', categories[categorySelected - 1]);
        console.log('Date:', (new Date()).toDateString());
        console.log('Time:', (new Date()).toTimeString());
    }
    
    if (display) {
        return (
            <div className='flex justify-center'>
            <div className='bg-[#ffcad3] p-4 space-y-4 rounded-md border border-[#ce6879]'>
                <div className='flex justify-between'>
                    <h4 className={'text-3xl sm:text-4xl md:text-5xl text-center ' + fugaz.className}>
                        Add Transaction
                    </h4>
                    <button 
                        className="cursor-pointer w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-full transition duration-200 ease-in-out shadow-md flex items-center justify-center"
                        onClick={toggleDisplay}
                    >
                        X
                    </button>
                </div>
                <div className='text-lg flex flex-col items-center space-y-1'>
                    <p>Your weekly budget is ${budgetInfo.budget}</p>
                    <p>You have spent ${budgetInfo.spent} today</p>
                    <input 
                        type="text" 
                        placeholder="Transaction name"
                        className="p-2 border border-gray-300 rounded w-full"
                        onChange={(e) => setTransactionName(e.target.value)}
                    />
                    <input 
                        type="number" 
                        placeholder="Transaction amount"
                        className="p-2 border border-gray-300 rounded w-full"
                        onChange={(e) => setTransactionAmt(e.target.value)}
                    />
                    <div className='bg-[#ffa4b3] rounded-md'>
                        <p className={'p-2 ' + fugaz.className}>Transaction category</p>
                        <div className="p-2 flex justify-center w-full space-x-3">
                            {categories.map((category, index) => {
                                return(
                                    <button 
                                        key={index}
                                        style={{backgroundColor: category.colour}}
                                        onClick={() => handleCategoryClick(category.id)}
                                        className={`font-bold p-2 rounded-lg border ${categorySelected === category.id ? 'border-black border-2' : 'border-transparent'} `}
                                        >
                                            {category.name}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <Button text="Submit" dark full onClick={submitTransaction}/>
                </div>
                <button className='underline cursor-pointer'
                    onClick={toggleTransactionList}>View Transaction List
                </button>
            </div>
            </div>
        )
    }
    // TODO: Move this to a separate component
    // TODO: Add filtering to this transaction list
    if (openTransactions) {
        return(
            <div className='flex justify-center'>
                <div className='bg-[#ffcad3] p-4 space-y-4 rounded-md border border-[#ce6879]'>
                    <div className='flex justify-between'>
                        <h4 className={'text-3xl sm:text-4xl md:text-5xl text-center ' + fugaz.className}>
                            Transactions
                        </h4>
                        <button 
                            className="cursor-pointer w-10 h-10 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold rounded-full transition duration-200 ease-in-out shadow-md flex items-center justify-center"
                            onClick={toggleTransactionList}
                        >
                            X
                        </button>
                    </div>
                    <TransactionList />
                    <button className='underline cursor-pointer'
                        onClick={toggleTransactionList}>Add a Transaction
                    </button>
                </div>
            </div>
        )
    }
    return (
        // change this to reflect budget
        <div className='flex flex-col flex-1 gap-4 sm:gap-8 md:gap-12'>
            <div className='grid grid-cols-1 sm:grid-cols-3 bg-[#ffe2e6] 
                text-accent rounded-lg'>
                {Object.keys(statuses).map((key, index) => {
                    return(
                        <div key={index} className='flex flex-col gap-1 p-4 sm:gap-2'>
                            <p className='font-medium uppercase'>{key.replace('_', ' ')}</p>
                            <p className={'text-base sm:text-lg ' + fugaz.className}>{statuses[key]}</p>
                        </div>
                    )
                })}
            </div>
            <h4 className={'text-4xl sm:text-5xl md:text-6xl text-center ' + fugaz.className}>
                How much have you spent today?
            </h4>
            <Button text="Add a Transaction" dark onClick={toggleDisplay}/>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4'>
                {/* {Object.keys(display).map((key, index) => {
                    return(
                        <div key={index} className='flex flex-col gap-2 p-4 bg-[#FF4162] text-white rounded-lg'>
                            <p className='font-medium'>{key}</p>
                            <p className='text-2xl'>{display[key]}</p>
                        </div>
                    )
                    })
                } */}
            </div>
        </div>
    )
}
