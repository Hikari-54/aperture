import './Hero.scss'
import heroPngPath from '../../assets/photo/hero.png'
import diaphragm from '../../assets/svg/diaphragm.svg'
import exposure from '../../assets/svg/exposure.svg'
import iso from '../../assets/svg/iso.svg'
import location from '../../assets/svg/location.svg'

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero__main-header">
                    <h5 className="hero__caption">Photographer & Filmmaker</h5>
                    <h1 className="hero__header">Aperture Studios</h1>
                    <p className="hero__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Suspendisse varius enim in eros elementum tristique. 
                        Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, 
                        ut commodo diam libero vitae erat. Aenean faucibus nibh et justo 
                        cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                    </p>
                </div>
                <div className="hero__photo-tags">
                    <div className="hero__photo-tag hero__photo-tag-diaphragm">
                        <img src={diaphragm} alt="Photo diaphragm" />
                        <p>1/2000s</p>
                    </div>
                    <div className="hero__photo-tag hero__photo-tag-exposure">
                        <img src={exposure} alt="Photo exposure" />
                        <p>f/11</p>
                    </div>
                    <div className="hero__photo-tag hero__photo-tag-iso">
                        <img src={iso} alt="Photo ISO" />
                        <p>100</p>
                    </div>
                    <div className="hero__photo-tag hero__photo-tag-location">
                        <img src={location} alt="Phtot location" />
                        <p>Iceland</p>
                    </div>
                </div>
            </section>
        </>
    )
}