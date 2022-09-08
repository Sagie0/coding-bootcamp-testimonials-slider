// import React from 'react'
import React, { useState } from 'react'
import './App.css'
import Testimonial from './Testimonial'
import testimonialList from './data'


const App = () => {

  const [testimonial]= useState(testimonialList)

  return (
    <div className='body'>
      <Testimonial testimonial={testimonial}/>
      
    </div>
  )
}

export default App