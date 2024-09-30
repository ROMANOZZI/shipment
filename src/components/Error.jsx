import React from 'react'
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { setCurrentShipment } from '../state/slices/currentShipmentSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {fetchShipment} from "../state/middleWare/shipmentThunk";

export default function Error() {
    const { t } = useTranslation('global');
    const lang = useSelector((state) => state.language);
    const [shipmentNumber,setShipmentNumber]=useState("");
    const currentShipment = useSelector((state) => state.shipment);
    const dispatch = useDispatch();
  return (
    <div className="bg-white flex-col h-screen w-screen fixed top-0 left-0 flex items-center justify-center z-50">
    <h1 className="text-black font-bold  text-4xl">{"404"+t("Error")}</h1>

    <p className="font-semibold text-lg m-4 text-grey" >Try another shipment</p>
    <div className='flex justify-between  m-6 align-middle lg:w-1/2 lg:h-14 w-64 h-10'>
              <input type="text" placeholder={t("Enter")}
              onChange={(e)=>setShipmentNumber(e.target.value)}
              className='
              h-full

              shadow-md
              text-md
              lg:text-2xl
              outline-none border-none p-2 w-full'
              style={lang === "ar" ?
                  {
                  borderRadius: '0 0.5em  0.5em 0',

                  }
                  :
                  {
                  borderRadius: '0.5em 0 0 0.5em',
                  }

              }
              />
              <button
              onClick={()=>{

                  dispatch(setCurrentShipment(shipmentNumber));
                  dispatch(fetchShipment(shipmentNumber));

              }}
              className='  w-10 text-2xl font-bold
               h-full
              bg-red text-white  p-2 flex items-center justify-center'
              style={lang == "ar" ?
                  {

                      borderRadius: '0.5em 0 0 0.5em',

                  }
                  :
                  {
                  borderRadius: '0 0.5em  0.5em 0',

                  }

              }
              >


                  <svg width="30px" height="30px" viewBox="0 0 24 24" fill="transparent" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
              </button>
              </div>
  </div>
  )
}
