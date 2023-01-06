import React, { useEffect, useState } from 'react'
import { makeRequest } from '../axios'
import Advice from './Advice'

//https://api.adviceslip.com/advice

function Main() {

  const [advice, setAdvice] = useState('')


  const getAdvice =() => {
    makeRequest.get('/advice').then(res => setAdvice(res.data.slip))
  }
  const handleClick = () => {
    makeRequest.get('/advice').then(res => setAdvice(res.data.slip))
  }

  useEffect(() => {
    getAdvice()
  }, [])
  return (
    <div className='Main'>
      <Advice advice={advice} click={handleClick} />

    </div>
  )
}

export default Main