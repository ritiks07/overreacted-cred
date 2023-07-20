import React from 'react'
import Button from '../common/Button'
import './heroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-section-wrapper'>
      <div className='flex absolute-center hero-claim-label'>
        <div> Pay credit card bill. earn guaranteed rs200 back.</div>
        <div className='claim-anchor'>
          claim now
        </div>
      </div>
      <div className="flex absolute-center flex-col hero-section max-width ">
        <div className='hero-heading'>
          reward for paying credit card bills.
        </div>
       <div className='hero-subheading'>
          join 9M+ members who win rewards and cashbacks everyday
       </div>
       <Button buttonText='Download CRED' />
      </div>
    </div>
  )
}

export default HeroSection