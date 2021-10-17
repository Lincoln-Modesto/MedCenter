import { useModalContext } from '../../context/ModalContext';
import { Link } from 'react-router-dom';
import ClipboardJS from 'clipboard';

import Email from '../../assets/email.png';
import Phone from '../../assets/phone.png';
import Place from '../../assets/place.png';
import Dates from '../../assets/date.png';
import House from '../../assets/house.png';
import Acount from '../../assets/account_circle.png';
import Close from '../../assets/clear.png';

import './styles.css';


export default function Modal() {

    const { modalState: { pacient, visible }, closeModal } = useModalContext();

    const clipboard = new ClipboardJS('.btn');

    clipboard.on('success', function (e) {
        document.getElementById("btn").innerHTML = 'Copiado!'

        e.clearSelection();
    });

    clipboard.on('error', function (e) {
        alert("Falha ao copiar texto")
    });

    return (
        <>
            {visible && <div className="modal d-flex justify-content-center align-items-center">
                <div className="container">
                    <Link className="close" onClick={closeModal} to="/">
                        <img src={Close} alt="close" />
                    </Link>
                    <img src={pacient?.picture?.large} className="user" alt="user" />
                    <div className="modal-title">
                        <h2>{pacient?.name?.first + ' ' + pacient?.name?.last}</h2>
                        <h6>id: {pacient?.id?.value}</h6>
                    </div>
                    <div className="container-fluid">
                        <div className="modal-info">
                            <img src={Acount} alt="sex" />
                            <h5>{pacient?.gender === 'female' ? 'Feminino' : 'Masculino'}</h5>
                        </div>
                        <div className="modal-info">
                            <img src={Email} alt="email" />
                            <h5>{pacient?.email}</h5>
                        </div>
                        <div className="modal-info">
                            <img src={Dates} alt="date" />
                            <h5>{pacient?.dob?.date.substring(0, 10)}</h5>
                        </div>
                        <div className="modal-info">
                            <img src={Phone} alt="phone" />
                            <h5>{pacient?.phone}</h5>
                        </div>
                        <div className="modal-info">
                            <img src={House} alt="from" />
                            <h5>{pacient?.location?.country}</h5>
                        </div>
                        <div className="modal-info">
                            <img src={Place} alt="map" />
                            <h5>{
                                pacient?.location?.street?.name + ', '
                                + pacient?.location?.street?.number + ', '
                                + pacient?.location?.city + ', ' + pacient?.location?.state}</h5>
                        </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mt-4 mb-2 share-container">
                        <input class="share-url"
                            id="toCopy"
                            readOnly
                            value={`http://localhost:3000/${pacient?.id?.value}`} />
                        <button class="btn" id="btn" data-clipboard-target="#toCopy">
                            Copiar
                        </button>
                    </div>
                </div>
            </div>}
        </>

    )
}

