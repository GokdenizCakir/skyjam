import React from 'react'
import question from "../../images/question_mark.png"
import narcade from "../../logos/Fuaye/narcade.png"
import gamesup from "../../logos/Fuaye/gamesup.png"
import uskudar from "../../logos/Fuaye/uskudar.png"
import gamfed from "../../logos/Fuaye/gamfed.png"
import starverse from "../../logos/Fuaye/starverse.png"
import toyed from "../../logos/Fuaye/toyed.png"
import sensemotion from "../../logos/Fuaye/sensemotion.png"
import remoob from "../../logos/Fuaye/remoob.png"
import dojo from "../../logos/Fuaye/dojo.png"

const Stants = () => {
    return (
        <div className=' overflow-x-hidden w-100vw grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-5'>
            {/*
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={funverse} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                    Funverse Games
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={gamefactory} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        Game Factory
                    </p>
                </div>
            </div>
            */}
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={narcade} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        Mobil oyun sektörünün başarılı firmalarından ve Gümüş sponsorumuz olan Narcade oyunlarını oynatmak, çalışma prensipleri hakkında bilgilendirmek ve ürünlerini paylaşmak adına fuaye alanımızda olacaktır.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={gamesup} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        Mobil oyun, e-spor ve oyun teknolojileri alanında ürün ve yazılım geliştiren veya geliştirmeyi amaçlayan girişimcileri hızlandırma ve kuluçka programları ile destekleyen GamesUp fuaye alanımızda yer alacaktır.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={starverse} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        Türkiye'nin ilk üniversite metaverse platformu olan ve eğitimin geleceğini inşaa eden YTÜ STARVERSE projesi ve ekibi fuaye alanımızda bizimle olacaktır.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={sensemotion} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        Hareket yakalama teknolojisinin en gelişmiş ürünleri ile hayal gücünü sanal ortama aktarman için hem yarışmada hem zirvede yanımızda Sense4motion MOCAP sponsorumuz olarak yer alacaklardır.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={gamfed} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                    GamFed, International Gamification Federation – Uluslararası Oyunlaştırma Federasyonu – tüm dünyadan sertifikalı oyunlaştırma uzmanlarının deneyimlerini paylaştıkları ve Dünyadaki Oyunlaştırma farkındalığını artırmak amacıyla içerik ürettikleri kar amacı gütmeyen bir kurum olarak fuaye alanımızda yer alacaktır.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={uskudar} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        Girişimcilere, girişimci olmak isteyenlere eğitim, ekipman, sarf malzeme, mentorluk, danışmanlık hizmetlerini ücretsiz olarak sunan bir girişimcilik ve inovasyon merkezi olan Atölye Üsküdar Sanal Gerçeklik(VR) İstasyonu ve çeşitli ekipmanlarıyla fuaye alanımızda yer alacaktır.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={toyed} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        TOYED - Teknoloji Oyunlaştırma ve Eğitim Derneği - oyun elementlerinin gerçek hayatta kullanımı ile oluşan oyunlaştırmayı yaygınlaştırmak ve oyunlaştırma ile toplumu kalkındırma amacıyla kurulan bir dernek olarak fuaye alanımızda yer alacaktır.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={remoob} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        Remoob, kayda değer oyunlar geliştirme amacı güden tutkulu öğrenciler tarafından kurulmuş bir bağımsız oyun stüdyosudur. Çok sayıda Game Jam'den elde ettikleri deneyimden faydalanan ekip,  "Pile Up!" isimli şehir kurma oyununu geliştirmektedir.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={dojo} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                    We are a company that specializes in connecting talented individuals with blockchain and blockchain gaming companies. Our goal is to bridge the gap between companies and individuals, and to provide top-notch opportunities for everyone involved. We believe that talent is the driving force behind any successful company, and we are committed to ensuring that our clients have access to the best talent available. At DOJO Talent, we pride ourselves on our ability to present top-notch talents to companies in less than 2 days. We understand that time is of the essence when it comes to finding the right person for the job, and we are dedicated to streamlining the hiring process. Our team consists of experienced professionals who are passionate about matching talented individuals with the right company. We are excited to help you find your next opportunity or to connect you with the perfect candidate for your team. Thank you for considering DOJO Talent for your talent solutions.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={question} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center info'>
                        Yakında...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Stants