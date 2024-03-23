import React from 'react'
import InfoDetials from './InfoDetials'

const Info = ({data,cityName}) => {
 console.log('city name:',cityName)
 const FilterData= data.filter((filterCity)=>{
 return  filterCity.name === cityName
 })
 
  return (
 
    <div>
        <InfoDetials FilterData={FilterData}></InfoDetials>
            
     
    </div>
  )
}

export default Info