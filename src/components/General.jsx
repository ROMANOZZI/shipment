import React from 'react'
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import moment from 'moment';
import Progress from './Progress';
export default function General() {
  const lang=useSelector((state)=>state.language);
  const {t}=useTranslation('global');
  const {shipment,loading,error}=useSelector((state)=>state.shipment);
  moment().locale(lang);
  const nextWorkingDay=shipment?.nextWorkingDay[0];
  const nextWorkingDayDate=moment(nextWorkingDay?.date).format('DD-MM-YYYY ')+" at "+moment(nextWorkingDay?.date).format('h:mm a');
  const DeliveryDate=moment(nextWorkingDay?.date).format('DD ')+t(moment(nextWorkingDay?.date).format('MMMM'))+" "+moment(nextWorkingDay?.date).format('YYYY'); 
  return (
    <div className='w-3/4 bg-red-500 shadow-lg rounded-md mx-auto mt-10 ' style={{
        boxShadow:'box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);'
    }}>
    <div className='flex w-full h-1/2 shadow-lg p-6 justify-between '>
    <div className='flex  h-full flex-col'>
    <div className='mx-9'>
    <p className={` text-xl font-semibold  text-grey mb-3 `} >{t(`general.shipmentNumber`) +" "+ shipment?.TrackingNumber}</p>
    <p className={` text-2xl font-bold`} style={{color:shipment?.color}}>{t(`ShipmentStates.${shipment?.CurrentStatus?.state}`)}</p>
    </div>
   
    </div>
    <div className='mx-12'>
    <p className={` text-xl font-semibold  text-grey mb-3 `} >{t(`general.lastUpdate`) }</p>
    <p className={` text-2xl font-bold`} >{t(shipment?.nextWorkingDay[0]?.dayName) + " " + nextWorkingDayDate}</p>
    </div>
    <div className='mx-12'>
    <p className={` text-xl font-semibold  text-grey mb-3 `} >{t(`general.TraderName`) }</p>
    <p className={` text-2xl font-bold`} >{"SOUQ.COM"}</p>
    </div>
    <div className='mx-24'>
    <p className={` text-xl font-semibold  text-grey mb-3`} >{t(`general.deliveryDate`) }</p>
    <p className={` text-2xl font-bold`} >{DeliveryDate}</p>
    </div>
    </div>
     
    <div className='flex w-full h-1/2 justify-between p-6'>
    <Progress/>
    </div>
    </div>
  )
}
