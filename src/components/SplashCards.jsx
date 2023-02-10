import React, { useEffect, useState } from 'react'
import '../styles/SplashCards.css'
import SplashCard from './SplashCard'
import { getTopFive } from '../utils/api'

function SplashCards() {
    const [topFive, setTopFive] = useState([])

    useEffect(()=>{
        getTopFive().then((res) => {
            setTopFive(res.slice(0,5))
        })
    },[])


  return (
    <div className='splash-cards-box'>
        
        {topFive.map((rev) => {
            return <SplashCard key={rev.review_id} review={rev}/>
        })}
    </div>
  )
}

export default SplashCards