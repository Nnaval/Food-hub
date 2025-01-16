import { OrderSatCard } from '@/components/card'
import Cardbox from '@/components/cardbox'
import React from 'react'
import OrderStatisticsSection from './sections/order-statistics-section'

const page = async() => {

  return (
    <div className='w-full bg-slate-200 overflow-scroll'>
      <Cardbox/>
      <OrderStatisticsSection/>
    </div>
  )
}

export default page