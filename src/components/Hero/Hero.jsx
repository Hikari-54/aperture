import './Hero.scss'
import heroPngPath from '../../assets/photo/hero.png'

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

                </div>
            </section>
        </>
    )
}