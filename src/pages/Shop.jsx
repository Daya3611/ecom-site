import React from 'react'
import Hero from '../Cpmponets/Hero/Hero'
import Popular from '../Cpmponets/Popular/Popular'
import Offers from '../Cpmponets/Offers/Offers'
import NewCollection from '../Cpmponets/NewCollection/NewCollection'
import NewsLetter from '../Cpmponets/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
    </div>
  )
}

export default Shop