import React from 'react'
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Current from '../assets/Pictures/truck.svg';
export default function Stage({ state, Done, current }) {
    const lang = useSelector((state) => state.language);
    const { shipment, loading, error } = useSelector((state) => state.shipment);
    const color = shipment?.color;
    const {t}=useTranslation("global");
    if (Done) {
        return (
            <div className='flex relative flex-col'>
            <div
                className='rounded-full w-8 h-8 flex items-center justify-center
                p-2
                z-10
                
                '
                style={{
                    backgroundColor: color
                }}
            >
                <svg fill={"#ffffff"} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="50px" height="50px" viewBox="0 0 335.765 335.765"
                    xml:space="preserve"

                >
                    <g>
                        <g>
                            <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795 		" />
                        </g>
                    </g>
                </svg>

            </div>
            <p className='text-md text-nowrap absolute top-16  font-bold text-xl left-1/2 transform -translate-x-1/2'>{t("ShipmentStates."+state)}
            </p>
            

        </div>
        )
    }
if(state == 'DELIVERED'){
    return(
        <div className='flex relative flex-col'>
            <div className={(Done||current ? 'bg-green' : 'bg-grey')+"   w-15 h-15 p-3 flex rounded-full items-center justify-center  z-10"}>
                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
     width="40px" height="40px" viewBox="0 0 512.000000 512.000000"
     preserveAspectRatio="xMidYMid meet">

    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
    fill={Done||current?  "#ffffff" : "#000000"} stroke="none">
    <path d="M0 2850 l0 -1920 1344 0 1344 0 -30 85 c-53 155 -71 271 -71 460 0
    137 4 190 21 272 121 566 536 986 1101 1114 113 25 347 36 464 20 80 -11 246
    -49 290 -66 16 -7 17 44 17 974 l0 981 -745 0 -745 0 0 -557 0 -558 -157 -130
    c-86 -71 -165 -136 -175 -143 -17 -12 -27 -6 -101 55 -45 37 -90 74 -100 82
    -19 15 -7 23 -164 -108 l-52 -43 -100 82 c-90 73 -103 81 -119 69 -9 -8 -54
    -45 -100 -83 l-82 -68 -58 47 c-31 26 -110 91 -174 144 l-118 96 0 558 0 557
    -745 0 -745 0 0 -1920z m1292 -546 c125 -104 227 -193 227 -197 1 -8 -179
    -227 -187 -227 -2 0 -30 23 -62 50 -32 28 -60 50 -64 50 -3 0 -6 -115 -6 -255
    l0 -256 -147 3 -148 3 -3 254 -2 253 -53 -44 c-28 -24 -57 -47 -64 -51 -11 -7
    -192 199 -191 218 1 14 451 394 463 391 6 -1 112 -88 237 -192z"/>
    <path d="M1790 4283 l1 -488 24 -18 25 -18 100 82 101 82 49 -42 c28 -22 73
    -60 100 -83 l50 -41 50 41 c161 134 148 126 167 111 10 -8 55 -45 100 -82 81
    -68 82 -68 107 -51 l26 16 0 489 0 489 -450 0 -450 0 0 -487z"/>
    <path d="M3812 2576 c-164 -31 -299 -85 -427 -171 -409 -272 -595 -774 -459
    -1243 118 -407 464 -718 884 -793 104 -18 296 -16 404 5 448 87 789 430 888
    891 19 93 17 333 -5 435 -62 287 -243 551 -487 709 -185 119 -354 171 -580
    177 -97 2 -169 -1 -218 -10z m716 -789 l102 -102 -373 -373 -372 -372 -260
    260 -260 260 108 107 107 108 155 -155 155 -155 263 263 c144 144 264 262 267
    262 3 0 51 -46 108 -103z"/>
    </g>
    </svg>
            </div>
            <p className='text-md text-nowrap absolute top-20 font-bold text-xl left-1/2 transform -translate-x-1/2'>{t("ShipmentStates."+state)}
            </p>
        </div>
    )
}
   
        return (
            <div className='flex relative flex-col'>
                <div
                    className='rounded-full w-15 h-15 flex items-center justify-center
                    p-2
                    z-10
                    '
                    style={{
                        backgroundColor: color
                    }}
                >
                    <svg fill="#ffffff " height="50px" width="50px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32" xml:space="preserve"
                        style={{transform: lang =='ar' ? 'scaleX(-1)' : 'none'}}
                        >
                        <g>
                            <path d="M26,27c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S27.7,27,26,27z" />
                        </g>
                        <g>
                            <path d="M10,27c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S11.7,27,10,27z" />
                        </g>
                        <path d="M31.8,17.4l-4-5C27.6,12.1,27.3,12,27,12h-5V9c0-0.6-0.4-1-1-1H5C4.4,8,4,8.4,4,9v1h1c0.6,0,1,0.4,1,1s-0.4,1-1,1H4H3
        c-0.6,0-1,0.4-1,1s0.4,1,1,1h1h2c0.6,0,1,0.4,1,1s-0.4,1-1,1H4H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h3v6c0,0.6,0.4,1,1,1h0.1
        C5,24.7,5,24.3,5,24c0-2.8,2.2-5,5-5s5,2.2,5,5c0,0.3,0,0.7-0.1,1H21h0.1C21,24.7,21,24.3,21,24c0-2.8,2.2-5,5-5s5,2.2,5,5
        c0,0.3,0,0.7-0.1,1H31c0.6,0,1-0.4,1-1v-6C32,17.8,31.9,17.6,31.8,17.4z"/>
                    </svg>
                    
                </div>
                <p className='text-nowrap text-md absolute top-14 bottom-0 font-bold text-xl left-1/2 transform -translate-x-1/2'>{t("ShipmentStates."+state)}
                </p>
            </div>
        )

}
