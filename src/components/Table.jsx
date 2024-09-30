import React from 'react'
import {useTranslation} from 'react-i18next';
import { useSelector } from 'react-redux';
import moment from 'moment';

export default function Table() {
  const {t} = useTranslation('global');
  const {shipment, loading, error} = useSelector((state) => state.shipment);

  return (
    <div className=' sm:relative  md:w-full w-full  lg:px-8'>
      <h3 className='text-xl mb-6 font-bold text-black'>{t('general.details')}</h3>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 shadow-xl rounded-lg'>
          <thead className='bg-header '>
            <tr className='text-2xl  text-grey border-b-2 border-grey'>
              <th className='px-0 lg:px-6 lg:py-3 py-2 text-start text-xs font-medium text-grey uppercase tracking-wider'>{t('Branch')}</th>
              <th className='px-0 lg:px-6 lg:py-3 py-2 text-start text-xs font-medium text-grey uppercase tracking-wider'>{t('Date')}</th>
              <th className='px-0  lg:px-6 lg:py-3 py-2 text-start text-xs font-medium text-grey uppercase tracking-wider'>{t('Time')}</th>
              <th className='lg:px-0 lg:py-3 py-2 text-start text-xs font-medium text-grey uppercase tracking-wider'>{t('Details')}</th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200'>
            {shipment?.TransitEvents.map((event, index) => (
              <tr key={index} className='text-2xl text-start text-grey border-b-2 border-grey'>
                <td className='lg:px-4 py-2 px-2  md:whitespace-nowrap text-sm font-medium text-black'>{event.hub ? t(event.hub) : t('hub')}</td>
                <td className='lg:px-4 py-2 px-2 md:whitespace-nowrap text-sm text-black'>{moment(event.timestamp).format('DD/MM/YYYY')}</td>
                <td className='lg:px-4 py-2 px-2  md:whitespace-nowrap text-sm text-black'>{moment(event.timestamp).format('h:mm ')}</td>
                <td className='lg:px-4 py-2 px-2  md:whitespace-nowrap text-sm text-black'>
                  <p>
                  {t(`ShipmentStates.${event.state}`)}
                  </p>
                  {
                    event.reason && (
                      <p className='text-xs

                      ' style={{
                        color: shipment?.color
                      }}>
                        {t(`${event.reason}`)}
                      </p>
                    )
                  }

                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
