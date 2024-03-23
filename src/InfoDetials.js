import React from 'react'
import { TbExclamationMark } from "react-icons/tb";

const InfoDetials = ({FilterData}) => {
    
  return (
    <>
        {FilterData.length  ?   <div className='city-info-area-main'>
    
    <h3 style={{margin:'0px 40%'}} className='city-name'> {FilterData[0].name}</h3>
   <div className='konum' > <h4 className='konum-detials'>Enlem: </h4 >  <p className='konum-sayı' style={{ marginLeft:'36px' }}>{FilterData[0].latitude}</p>  </div>
   <div className='konum' > <h4 className='konum-detials'>Boylam:  </h4>   <p  className='konum-sayı'>{FilterData[0].longitude}</p> </div>
   <div className='bölge '> <h4 className='konum-detials'>Bölge :  </h4> <p style={{marginLeft:'35px' }} className='konum-sayı'>{FilterData[0].region}</p></div>
   <div className='bölge '> <h4 className='konum-detials'>Nüfus :  </h4> <p style={{marginLeft:'30px' }} className='konum-sayı'>{FilterData[0].population} </p></div>

  </div> :  <div className='city-info-area-main'> <p className='detay-goster'> Lütfen Detay Görmek İçin Şehir Seçiniz </p> <TbExclamationMark  style={{ marginLeft:'176px' }} size={100}/>
</div> }
  
  </>
  )
}

export default InfoDetials