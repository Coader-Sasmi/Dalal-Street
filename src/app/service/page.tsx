import SmartTradingBanner from '@/components/service/SmartTradingBanner'
import TradingPlansWithFilter from '@/components/service/TradingPlansWithFilter'
import React from 'react'

export default function page() {
  return (
    <div>
      <SmartTradingBanner/>
      <TradingPlansWithFilter/>
    </div>
  )
}
