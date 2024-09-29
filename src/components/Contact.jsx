import React from 'react'
import Question from '../assets/Pictures/QuestionM.jpg';
import {useTranslation} from 'react-i18next';
export default function Contact() {
  const {t}=useTranslation('global');
  return (
    <div className='w-full p-4 '>
    <div className='w-full flex justify-between'>
    <img src={Question} alt='Question' className='w-1/3'/>
    <div className='flex flex-col p-6'>
    <p className='text-black  font-bold text-xl '>{t('Contact')}</p>
    </div>
    
    </div>
    </div>
  )
}
