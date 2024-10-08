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
    box-content
    p-0
    m-12
    mb-64
    lg:mb-20
    relative

    '
    >
        {
            shipment?.TransitEvents?.map((state,index)=>{
                return (
                <>
                <Stage key={index} state={state} Done={true} current={state.state===shipment?.CurrentStatus?.state} reason={state?.reason}/>
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
