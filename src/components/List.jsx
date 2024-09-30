import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useState , useEffect } from 'react';
import { setLanguage } from '../state/slices/languageSlice';
import { useDispatch } from 'react-redux';
export default function List() {
    const list = useSelector((state) => state.list);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1150);
    const lang = useSelector((state) => state.language);
 const dispatch = useDispatch();
    const {t}=useTranslation('global');
    useEffect(() => {
        const handleResize = () => {
          setIsLargeScreen(window.innerWidth > 1150);
        };

        window.addEventListener('resize', handleResize);

        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
 if(list && !isLargeScreen){
    return (
    <div className='h-screen mt-16 top-0 right-0 z-50 mar w-1/3 fixed flex flex-col bg-light'>
    <button className='bg-white  hover:text-red text-black text-2xl font-semibold outline-none border-none p-2 m-2'>{t("Header.Home")}</button>
          <button className='bg-white  hover:text-red text-black text-2xl font-semibold outline-none border-none p-2 m-2'>{t("Header.About")}</button>
          <button className='bg-white  hover:text-red text-black text-2xl font-semibold outline-none border-none p-2 m-2'>{t("Header.Contact")}</button>
          <button
            onClick={() => dispatch(setLanguage(lang == 'en' ? 'ar' : 'en'))}
            className='bg-white text-2xl font-bold text-red outline-none border-none p-2 m-2'>
            {lang == 'en' ? 'العربية' : 'ENG'}</button>
    </div>
  )}
  return null;
}
