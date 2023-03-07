import React from 'react'





export default function Rate({rate}) {
  const arrStar =[1,2,3,4,5]
  return (
    <div className='RatesContainer'    >
    
    { arrStar.map(el=>
      el<= rate ?<i class="fa-solid fa-star"></i> :<i class="fa-regular fa-star"></i>    )}
    
    
    
    
    </div>
  )
}
