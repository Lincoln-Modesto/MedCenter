import './styles.css';
import '../../../src/global.css'

import Logo from '../../assets/MedCenter.png'
import Account from '../../assets/account.png'

export default function Heder() {
    return (
        <header className="d-flex justify-content-between py-4 px-5 align-items-center">
            <img src={Logo} className="img-fluid" alt="logo"/>
            <img src={Account} alt="account"/>
        </header>
    )
}