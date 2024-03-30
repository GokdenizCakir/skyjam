import React from 'react'
import '../index.css'

import "../fonts/ARCADE_N.TTF"


const Reason = () => {
    return (
        <section className=' p-3 md:p-5 reason-page'>
            <div className=" md:m-20 m-5 ">
                <div className=" flex justify-center items-center ">
                    <div className='md:p-16  p-3 flex-col flex just bg-gradient-to-r from- via-purple-500 to-pink-500 rounded-lg  justify-center items-center'>
                        <h2 className='text-[4vh] md:text-[6vh] md:px-4 shadow-2xl shadow-second   mb-12  text-center m-3 border-2 border-indigo-600 rounded-3xl press2p'>KATILMAN İÇİN SEBEPLER</h2>
                        <ul className=' md:flex justify-center items-center md:mt-6 '>
                            <li className='md:text-[3vh] font-bold text-[3vh] flex-row flex md:m-3 m-1'>
                                <div className='flex md:w-[4vh] w-[3wh]  items-center'><svg xmlns="http://www.w3.org/2000/svg" fill='#FBCB0A' viewBox="0 0 24 24" class="w-6 h-6"><path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" /></svg></div>
                                <div> 10.000 TL Ödül Havuzu</div>
                            </li>
                            <li className='md:text-[3vh] font-bold text-[3vh] flex-row flex md:m-3 m-1 '>
                                <div className='flex md:w-[4vh] w-[3vh] items-center'><svg xmlns="http://www.w3.org/2000/svg" fill='#C70A80' viewBox="0 0 24 24" class="w-6 h-6"><path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" /></svg></div>
                                <div> AAA, AA ve mobil oyun geliştirme sektörden insanlarla tanışma fırsatı</div>
                            </li>
                            <li className='md:text-[3vh] font-bold text-[3vh] flex-row flex md:m-3 m-1 '>
                                <div className='flex md:w-[4vh] w-[3vh] items-center'><svg xmlns="http://www.w3.org/2000/svg" fill='#590696' viewBox="0 0 24 24" class="w-6 h-6"><path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" /></svg></div>
                                <div>Oyun geliştirme alanında kendini gösterme fırsatı</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reason