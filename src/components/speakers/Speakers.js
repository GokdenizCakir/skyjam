import React from 'react'
import question from "../../images/question_mark.png"
import ioi from "../../logos/Speakers/ioi.png"
import cemreaksoy from '../../images/cemre.png'
import osmanyalin from '../../images/Osman.png'
import ozansolmaz from '../../images/Ozan.png'
import ezgi from '../../images/ezgi.png'
import ahmetkaya from '../../images/ahmetkaya.png'
import enginulukurtlar from '../../images/enginulukurtlar.png'
import bahadırr from '../../images/bahadırr.png'
import alpgeven from '../../images/alpgeven.png'
import berkayy from '../../images/berkayy.png'
import anılcan from '../../images/anılcan.png'

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
                    <img className=' w-full' alt='img' src={ahmetkaya} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Ahmet Kaya
                        </p>
                    </div>
                </div>
                <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={enginulukurtlar} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Engin Ulukurtlar
                        </p>
                    </div>
                </div>
                <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={bahadırr} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Doç. Dr. Bahadır Uçan
                        </p>
                    </div>
                </div>
                <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={alpgeven} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Alp Geven
                        </p>
                    </div>
                </div>
                <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={berkayy} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Berkay Güney
                        </p>
                    </div>
                </div>
                <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={anılcan} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Anıl Can Turan
                        </p>
                    </div>
                </div>
            
        </div>
    )
}

export default Speakers