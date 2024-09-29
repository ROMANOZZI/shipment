import React from 'react'
import Question from '../assets/Pictures/QuestionM.jpg';
import {useTranslation} from 'react-i18next';
export default function Contact() {
  const {t}=useTranslation('global');
  return (
    <div className='w-full p-4 '>
    <div className='w-full flex justify-between'>
    <img src={Question} alt='Question' className=' w-24 h-24'/>
    <div className='flex flex-col p-6'>
    <p className='text-black  font-bold text-xl '>{t('Contact')}</p>
    <button className='bg-red text-light font-bold mt-4 text-white p-2 rounded-md'>{t('Alert')}</button>
    </div>
    
    </div>
    </div>
  )
}
