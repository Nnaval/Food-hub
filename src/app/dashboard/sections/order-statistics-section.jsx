import { OrderSatCard } from '@/components/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import Charts from '@/components/charts/Charts'

const OrderStatisticsSection = () => {
  return (
    <div>
        <div className="flex justify-between items-center mx-4 my-4">
            <div className="">Order Statistics</div>
            <div className="flex items-center gap-2">
                <p className="text-gray-400 text-sm">from</p>
                <Input type="date" className="" />
                <p className="text-gray-400 text-sm">to</p>
                <Input type="date" className="" />
            </div>
        </div>
        
        <OrderSatCard/>
    
    <Charts />
    </div>
  )
}

export default OrderStatisticsSection