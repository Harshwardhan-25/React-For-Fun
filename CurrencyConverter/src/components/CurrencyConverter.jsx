import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown';
import { MdOutlineSwapHoriz } from "react-icons/md";
const CurrencyConverter = () => {

    const[currencies,setCurrencies] = useState([]);
    const[amount,setAmount]=useState(1)

    const [fromCurrency,setFromCurrency]=useState("USD");
    const [toCurrency,setToCurrency]=useState("INR");

    const [convertedAmount,setConvertedAmount]=useState(null);
    const [converting,setConverting]=useState(false);

    //Currencies -> https://api.frankfurter.app/currencies
    //Conversion ->  https://api.frankfurter.app/latest?from=USD&to=INR

    const fetchCurrencies = async()=>{
           try{
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json();
            setCurrencies(Object.keys(data));
           }catch(error){
            console.log("Error Fetching",error);
           }
    };
    
    useEffect(()=>{
        fetchCurrencies();
    },[currencies]);

    console.log(currencies);

    const convertCurrency = async()=>{
        if(!amount) return;
        setConverting(true);
        try{
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
            const data = await res.json();
            setConvertedAmount(data.rates[toCurrency]+" "+toCurrency);
           }catch(error){
            console.log("Error Fetching",error);
           }finally {setConverting(false);}
       
    };

    const swapCurrencies = ()=>{
          setFromCurrency(toCurrency);
          setToCurrency(fromCurrency);
    }

  return (
    <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
        <h2 className='mb-5 text-2xl font-semibold text-gray-700'>
            Currency Convertor
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 items-end'>
            <Dropdown currencies={currencies} title="From:" currency={fromCurrency} setCurrency={setFromCurrency}></Dropdown>
            {/* swap currency button */}
            <div className='flex justify-center -mb--5 text-2xl'>
               <button onClick={swapCurrencies} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-400">
                  <MdOutlineSwapHoriz />
               </button>
            </div>
            <Dropdown currencies={currencies} title="To:" currency={toCurrency} setCurrency={setToCurrency}></Dropdown>
        </div>
        <div className='mt-4'>
            <label htmlFor="amount"
            className='block text-sm font-medium text-gray-700'>
                Amount :
            </label>

            <input className='w-full p-2 border border-gray-300 rounded-md 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1' 
            type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
        </div>

        <div className='flex justify-center mt-6'>
            <button onClick={convertCurrency} className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-800 
            focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
            ${converting ? "animate-pulse" : ""}`}>
                Convert
            </button>
        </div>

        <div className='flex justify-center items-center border border-gray-300 rounded-lg mt-6 mb-2'>
        {convertedAmount && (<div className=' m-2 text-lg font-medium text-right text-green-500'>
            Converted Amount : {convertedAmount}
        </div>
        )}
        </div>
    </div>
  )
}

export default CurrencyConverter;