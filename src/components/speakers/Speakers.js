import React from 'react'
import question from "../../images/question_mark.png"
import ioi from "../../logos/Speakers/ioi.png"
import toged from "../../logos/Speakers/toged.png"
import cansungur from "../../logos/Speakers/cs.png"
import cat from "../../logos/Speakers/cat.png"
import mob from "../../logos/Speakers/mob.png"
import endless from "../../logos/Speakers/endless.png"
import metaverse from "../../logos/Speakers/metaverse.png"

const Speakers = () => {
    return (
        <div className=' overflow-x-hidden w-100vw grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 flex justify-center'>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={cansungur} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center konusmaci'>
                        Can Sungur, Türkiye'de oyun sektörünü takip eden herkesin bildiği "Can Sungur ve Yakın Evren" adlı Youtube kanalından ve canlı yayın  platformlarından tanınan bir Influencer ve dijital pazarlama ve strateji danışmanıdır. Aynı zamanda okulumuz Yıldız Teknik Üniversitesi mezunudur.
                    </p>
                </div>
            </div>

            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={ioi} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center konusmaci'>
                        IO Interactive, HITMAN, Kane & Lynch, Mini Ninjas ve Freedom Fighters oyunlarının ve Glacier oyun motorunun yaratıcıları olan 25 yıllık, AAA bağımsız bir oyun stüdyosudur. YILDIZ JAM'de seminer oturumlarımızda "AAA Oyun Sektörü, IO Interactive ve Türkiye" hakkında bir sunum yaparak etkinliğimizde yer alacaklardır.
                    </p>
                </div>
            </div>
            
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={endless} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center konusmaci'>
                        Endless Entertainment, oyun geliştirme ve problem çözme zihniyetiyle çalışan ve oyunlaştırma metadolojisinin yeni dünya stratejileri için önemli olduğunu düşünen bir şirkettir. Şuanda bir RPG (Rol Yapma Oyunu) olan "The Dwarf" isimli oyunlarını geliştirmektedirler. Aynı zamanda "Microsoft for Startups" bünyesinde bulunmaktadırlar.
                    </p>
                </div>
            </div>
            <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                <img className=' w-full' alt='img' src={toged} />
                <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                    <p className=' text-white cursor-pointer text-center konusmaci'>
                        Türkiye’de oyun geliştirme ile ilgili her türlü çalışma ve düzenlemenin toplumsal gelişmeye katkı sağlayacak biçimde gerçekleştirilmesi ve ülkemizdeki oyun sektörü ekosisteminin geliştirilerek hak ettiği seviyelere getirilmesi amaçlarını taşıyan Türkiye Oyun Geliştiricileri Derneği bizimle yer alacaktır.
                    </p>
                </div>
            </div>
            
                <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={mob} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                            Mobidictum, Türkiye'de oyun sektörü haberlerini paylaşan ve network etkinlikleri düzenleyen bir platformdur.
                        </p>
                    </div>
                </div>
                <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={cat} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                            Geniş bir yaş aralığındaki eski ve yeni nesil oyunculardan oluşan Project Flying Cat, ekip üyelerinin yeteneklerini, oyun sevgilerini ve yaratıcılıklarını sergileyen benzersiz ve dikkate değer video oyunları yaratmayı hedefleyen bir şirkettir.
                        </p>
                    </div>
                </div>
                <div className=' w-full  relative speakers-box overflow-hidden transition-all'>
                    <img className=' w-full' alt='img' src={metaverse} />
                    <div className=' absolute w-full h-full opacity-0 top-[-100vh] speakers-information transition-all flex justify-center items-center px-4 overflow-x-hidden'>
                        <p className=' text-white cursor-pointer text-center konusmaci'>
                        Erkan Bayol, oyunları dünyada 40 milyon oyuncuya ulaşmış, yılların verdiği bilgi ve deneyimle birlikte de Angelic oyununu geliştiren Metaverse Game Studios, Inc.'in kurucusudur. Kökleri 2016'da atılmış ve 2020 yılından beri geliştirilen, karanlık bir bilim kurgu evreni üzerine kurulu bir strateji-RPG oyunu olan Angelic ile birlikte projenin büyük resimde hedefi global bir fikri mülkiyet haline gelmektir. Erkan Bayol, "Paylaşımlı ve Merkeziyetsiz Bir Fikri Mülkiyet: Angelic" seminer konusuyla YILDIZ JAM Oyun Geliştirme Zirvesi ve Yarışması'nda bizlerle olacaktır.
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