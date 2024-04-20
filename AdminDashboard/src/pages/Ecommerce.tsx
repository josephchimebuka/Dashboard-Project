import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import  {GoDotFill} from 'react-icons/go'
import { Stacked, Pie,Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { usestateContext } from '../context/ContextProvider'
const Ecommerce = () => {
  return (
    <div className='mt-12'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
              <div className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full p-8  pt-9 bg-hero-pattern1 bg-no-repeat bg-cover bg-center m-3'>
              <div className='flex justify-between items-center'>
              <div className='text-white'>
                <p className='font-bold text-gray-400'>
                Earnings
                </p>
                <p className='text-2xl'> $79,000</p>
                <div className='mt-6'><Button bgColor='white' color='red' size='md' text='Download' borderRadius='10px'/></div>
              </div>
              </div>
              </div>
        </div>



        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
            {earningData.map((data)=>(
             <div
             key={data.title}
             className='bg:white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
                  <button type='button'
                  style={{color: data.iconColor, backgroundColor: data.iconBg}}
                  className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl'>
                    {data.icon}
                  </button>
                  <p className='mt-3'>
                    <span className='text-lg font-semibold'>{data.amount}</span>
                    <span className={`text-sm text-${data.pcColor}`}>{data.percentage}</span>
                  </p>
             </div>
            ))}
        </div>

        <div className='flex gap-10 flex-wrap justify-center'>
          <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-xl md:*:w-780'>
                <div className='flex justify-between'>
                  <p className='font-semibold text-xl'>Revenue Updates</p>
               <div className='flex justify-between gap-2'>
               <p className='flex items-center text-gray-600 hover:drop-shadow-xl'>
                    <span><GoDotFill/></span>
                    <span>Expenses</span>
                  </p>
                  <p className='flex items-center text-green-400 hover:drop-shadow-xl'>
                    <span><GoDotFill/></span>
                    <span>Budget</span>
                  </p>
               </div>
                </div>

                <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
                <div>
                  <p>
                    <span className='text-3xl font-semibold'>
                      $93,438
                    </span>
                    <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-green-400 ml-3'>
                      23%
                      </span>
                  </p>
                  <p className='text-gray-500 mt-1'>Budget</p>
                </div>
                <div className='mt-8'>
                  <p>
                    <span className='text-3xl font-semibold'>
                      $43,438
                    </span>
                    
                  </p>
                  <p className='text-gray-500 mt-1'>Expense</p>
                </div>

                <div className='mt-20'>
                  <SparkLine
                  currentColor='blue'
                  id='line-sparkline'
                  type='Line'
                  height='80px'
                  width='250px'
                  data={SparklineAreaData}
                  color='blue'/>
                </div>

                <div>
                  <Button 
                  bgColor='blue'
                   color='white'
                   size='md'
                   text='Download Reports'
                   borderRadius='10px'
                   />
                </div>
            </div>
            <div>
              <Stacked width='340px' height='350px'/>
            </div>
          </div>
          </div>

          
        </div>

       
    </div>
  )
} 

export default Ecommerce