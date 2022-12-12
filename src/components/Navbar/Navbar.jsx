import H_tag from '../../Atoms/H_tag/H_tag'
import Links_tag from '../../Atoms/Links_tag/Links_tag'
import './Navbar.css'
import Logo from '../../Atoms/Logo/Logo'

export default function Navbar() {
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/"><Logo /></a>
          </div>
          <div className="links">
              <Links_tag num="3" href="/home" text="Услуги"/>
              <Links_tag num="3" href="/home" text="О компании"/>
              <Links_tag num="3" href="/home" text="Прайс"/>
              <Links_tag num="3" href="/home" text="Контакты"/>
          </div>
          <div className="number">
              <H_tag num="3" text="+7 (999) 888 00-00"/>
          </div>
        </div>
      </div>
    );
  }