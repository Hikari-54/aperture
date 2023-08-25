import './Header.scss'
import logoPath from '../../assets/svg/logo.svg'

export default function Header() {

  return (
    <header className='header'>
      <div className="header__container">
        <div className="header__logo">
          <a href="#">
            <img src={logoPath} alt="Aperture logo" />
          </a>
        </div>
        <div className="header__links">
          <div className="header__link header__link_first">
              <a href="#">Business areas</a>
          </div>
          <div className="header__link">
            <a href="#">Featured images</a>
          </div>
          <div className="header__link">
            <a href="#">Gear cage</a>
          </div>
          <div className="header__link">
            <a href="#">Contact</a>
          </div>
          <button className="header__button">
            Get template
          </button>
        </div>
      </div>
    </header>
  )
}
