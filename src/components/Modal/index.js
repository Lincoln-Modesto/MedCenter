import { useModalContext } from '../../context/ModalContext';

import User from '../../assets/user.png';
import Email from '../../assets/email.png';
import Phone from '../../assets/phone.png';
import Place from '../../assets/place.png';
import Dates from '../../assets/date.png';
import House from '../../assets/house.png';
import Acount from '../../assets/account_circle.png';
import Close from '../../assets/clear.png';

import './styles.css';
import { Link } from 'react-router-dom';

export default function Modal(){

    const { modalState: { visible }, closeModal } = useModalContext()

    return (
        <>
          { visible && <div className="modal d-flex justify-content-center align-items-center">
            <div className="container">
                <Link className="close" onClick={closeModal} to="/">
                    <img src={Close} alt="close"/>
                </Link>
                <img src={User} className="user" alt="user" />
                <div className="modal-title">
                    <h2>Marcos dos Santos</h2>
                    <h6>id: 7495558</h6>
                </div>
                <div className="container-fluid">
                    <div className="modal-info">
                        <img src={House} alt="from" />
                        <h5>Brasileiro</h5>
                    </div>
                    <div className="modal-info">
                        <img src={Acount} alt="sex" />
                        <h5>Masculino</h5>
                    </div>
                    <div className="modal-info">
                        <img src={Email} alt="email" />
                        <h5>Marcos@dev.com</h5>
                    </div>
                    <div className="modal-info">
                        <img src={Dates} alt="date" />
                        <h5>12/12/1999</h5>
                    </div>
                    <div className="modal-info">
                        <img src={Phone} alt="phone" />
                        <h5>(79) 99999999</h5>
                    </div>
                    <div className="modal-info">
                        <img src={Place} alt="map" />
                        <h5>Rua A, Cidade Nova, Estância/SE</h5>
                    </div>
                </div>
            </div>
        </div>}
        </>
       
    )
}

