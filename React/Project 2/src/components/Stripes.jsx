import React from 'react'
import Stripe from '../components/Stripe'


function Stripes() {
    const data = [
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg" , count: 52 },
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg" , count: 2 },
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg" , count: 15 },
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg" , count: 52 },
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg" , count: 2 },
        {url : "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg" , count: 47 },
      
    ]
  return (
    <div className='w-full flex pt-30'>
        {data.map((ele , index)=>(
            <Stripe key={index} image={ele.url} count={ele.count}/> 
        ))}  
    </div>
  )
}

export default Stripes