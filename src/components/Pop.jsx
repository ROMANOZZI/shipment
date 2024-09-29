import React from 'react'
import { useTranslation } from 'react-i18next';
export default function Pop() {
    const { t } = useTranslation('global');
    return (
        <div className='
         lg:pl-10
         pl-2
         pr-2
         py-4
         
        bg-header absolute top-14  lg:w-fit lg:h-fit bg-white  border-grey rounded-lg '
            style={{

                zIndex: '20',
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',

            }}
        >
            <div className='flex justify-between flex-col '>
                <h1 className='lg:text-xl lg:font-bold lg:p-4 p-2 text-lg font-semibold'>{t("Header.track")}</h1>
                <div className='flex justify-between align-middle'>
                <input type="text" placeholder={t("Enter")} className='
                h-10
                shadow-md
                text-sm
                lg:text-base
                outline-none border-none p-2 w-full' 
                style={{
                    borderRadius: '0 0.5em  0.5em 0',
                    
                }}
                />
                <button className='  w-10 text-2xl font-bold
                 h-10
                bg-red text-white  p-2 flex items-center justify-center'
                style={{
                    borderRadius: '0.5em 0 0 0.5em',
                    
                }}
                >


                    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                </div>
            </div>
        </div>
    )
}
