import React from 'react'
import { useSelector } from 'react-redux'
import { setLanguage } from '../state/slices/languageSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
export default function Header() {
    const lang = useSelector((state) => state.language);
    const dispatch = useDispatch();
    const { t } = useTranslation();
  return (
    <div className="flex w-full bg-blue p-3 shadow-md ">
        <h1 className='text-blue text-2xl'>{t("Welcome to React")}</h1>
        <div className='flex '>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>Home</button>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>About</button>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>Contact</button>
        </div>
        <div className='flex ml-auto'>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>Login</button>
            <button className='bg-white text-red outline-none border-none p-2 m-2'>Register</button>
        </div>
        <div className='flex ml-2'>
            <button 
            onClick={()=>dispatch(setLanguage(lang=='en'?'ar':'en'))}
            className='bg-white text-red outline-none border-none p-2 m-2'>
                {lang=='en'?'Ar':'ENG'}</button>

        </div>
    </div>
  )
}
