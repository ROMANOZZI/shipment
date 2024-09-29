import React from 'react'
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import Contact from './Contact';
export default function Address () {
  const {t}=useTranslation('global');
  const {shipment}=useSelector((state)=>state.shipment);
  return (
    <div className='
    lg:mr-20
    mt-10
    
    '>
    <h3 className='text-xl 
    mb-10
    font-bold text-black'>{t('general.deliveryAddress')}</h3>

    <div className=' bg-white rounded-md shadow-lg '>
    <div className=' bg-white rounded-md shadow-md p-6 pl-10'>
    <p className='text-black text-lg font-bold'>{t('Address')}</p>
      </div>
      <Contact/>
    </div>
    </div>
  )
}
