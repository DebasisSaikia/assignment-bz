import React from 'react'
import { iconData } from '../assets/data';
import './layout.css';



const Layout = ({children,loading}) => {
  return (
    <div className='layout-container'>
        <div className="main-content">
        {children}
        </div>
      
      {!loading &&
      <div className='icon-container'>
      {iconData?.map((item,index)=>(
          <img src={item?.icon} alt={item?.name} key={index} />
      ))}
  </div>
      }
        
    </div>
  )
}

export default Layout