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
  const nextWorkingDay=shipment?.nextWorkingDay?.[0];
  const nextWorkingDayDate=nextWorkingDay ? moment(nextWorkingDay?.date).format('DD-MM-YYYY ')+" at "+moment(nextWorkingDay?.date).format('h:mm a') : '';
  const DeliveryDate=nextWorkingDay ? moment(nextWorkingDay?.date).format('DD ')+t(moment(nextWorkingDay?.date).format('MMMM'))+" "+moment(nextWorkingDay?.date).format('YYYY') : ''; 
  return (
    <div className='w-full max-w-7xl bg-red-500 shadow-lg rounded-md mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10'>
      <div className='flex flex-col  sm:flex-row  w-full shadow-lg p-3 sm:p-4 md:p-5 lg:p-6 justify-between'>
        <div className='flex flex-col mb-3 md:mb-0 sm:mr-2 text-center md:text-left '>
          <p className='text-2xs sm:text-xs md:text-sm lg:text-base font-semibold text-grey mb-1 '>{t(`general.shipmentNumber`) + " " + shipment?.TrackingNumber}</p>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg font-bold' style={{color:shipment?.color}}>{t(`ShipmentStates.${shipment?.CurrentStatus?.state}`)}</p>
        </div>
        <div className='mb-3 sm:mb-0 sm:mr-2 text-center md:text-left'>
          <p className='text-2xs sm:text-xs md:text-sm lg:text-base font-semibold text-grey mb-1'>{t(`general.lastUpdate`)}</p>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg font-bold'>{nextWorkingDay ? t(nextWorkingDay?.dayName) + " " + nextWorkingDayDate : ''}</p>
        </div>
        <div className='mb-3 sm:mb-0 sm:mr-2 text-center md:text-left'>
          <p className='text-2xs sm:text-xs md:text-sm lg:text-base font-semibold text-grey mb-1'>{t(`general.TraderName`)}</p>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg font-bold'>{"SOUQ.COM"}</p>
        </div>
        <div className='text-center md:text-left'>
          <p className='text-2xs sm:text-xs md:text-sm lg:text-base font-semibold text-grey mb-1'>{t(`general.deliveryDate`)}</p>
          <p className='text-xs sm:text-sm md:text-base lg:text-lg font-bold'>{DeliveryDate}</p>
        </div>
      </div>
     
      <div className='flex w-full justify-between p-3  sm:p-4 md:p-5 lg:p-10'>
        <Progress/>
      </div>
    </div>
  )
}
