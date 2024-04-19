import React from 'react'
import question from "../../images/question_mark.png"
import ioi from "../../logos/Speakers/ioi.png"
import cemreaksoy from '../../images/cemre.png'
import osmanyalin from '../../images/Osman.png'
import ozansolmaz from '../../images/Ozan.png'
import ezgi from '../../images/ezgi.png'

const Speakers = () => {
    return (
        <div className=' overflow-x-hidden w-100vw grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex justify-center'>
            <div className=' flex flex-col w-full  relative speakers-box overflow-hidden transition-all items-center justify-center'>
                    <img className=' w-full' alt='img' src={osmanyalin} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Osman Yalın 
                        </p>
                    </div>
                </div>
            <div className=' flex flex-col w-full  relative speakers-box overflow-hidden transition-all items-center justify-center'>
                    <img className=' w-full' alt='img' src={ozansolmaz} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Ozan Solmaz
                        </p>
                    </div>
                </div>
                <div className='flex flex-col w-full  relative speakers-box overflow-hidden transition-all items-center justify-center'>
                    <img className=' w-full' alt='img' src={cemreaksoy} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Cemre Aksoy
                        </p>
                    </div>
                </div>
                <div className='flex flex-col w-full  relative speakers-box overflow-hidden transition-all items-center justify-center'>
                    <img className=' w-full' alt='img' src={ezgi} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Ezgi Çetin
                        </p>
                    </div>
                </div>

            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={question} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Yakında...
                        </p>
                    </div>
                </div>
            
        </div>
    )
}

export default Speakers