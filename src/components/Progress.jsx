import React from 'react'
import {useSelector} from 'react-redux';
import Stage from './Stage';
import { useTranslation } from 'react-i18next';
export default function Progress() {
    const {shipment,loading,error}=useSelector((state)=>state.shipment);
    const [states,setStates]=React.useState([
      "TICKET_CREATED",
      "PACKAGE_RECEIVED",
      "OUT_FOR_DELIVERY",
      "DELIVERED",
      
    ]);
    const {t}=useTranslation("global");
    
  return (
    <>
    <div
    className='w-full h-2 bg-idle
    flex items-center justify-between
    m-10
    mb-20
    relative
    '
    >
        {
            states.map((state,index)=>{
                return (
                <>
                <Stage key={index} state={state} Done={index<shipment?.TransitEvents.length-1} current={index===shipment?.TransitEvents.length-1}/>
               {index<shipment?.TransitEvents.length-1&&<div className='w-full h-2' style={{
                backgroundColor:shipment?.color
               }}></div>}
              
                </>
                )
            })
        }

    </div>
    </>
  )
}
