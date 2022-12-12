import Logo from '../../assets/logo_2.svg';
import "./Logo.css"

export default function Logo_site(props) {
    return (
        <>
            <img src={Logo} alt="Company Logo" className="logo"/>
        </>
    )
}