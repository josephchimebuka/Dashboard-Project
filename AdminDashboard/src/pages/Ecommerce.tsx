import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
// import  {GoPrimitiveDot} from 'react-icons/go'
import { Stacked, Pie,Button, SparkLine } from '../components'
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { usestateContext } from '../context/ContextProvider'
const Ecommerce = () => {
  return (
    <div className='mt-12'>
        <div className='flex flex-wrap lg:flex-nowrap justify-center'>
              <div className=' bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full  pt-9 bg-hero-pattern1 bg-no-repeat bg-cover bg-center m-3'>
              <div className='flex justify-between items-center'>
              <div className='text-white'>
                <p className='font-bold text-gray-400'>
                Earnings
                </p>
                <p className='text-2xl'> $79,000</p>

                <Button/>
              </div>
              </div>
              </div>
        </div>
    </div>
  )
} 

export default Ecommerce