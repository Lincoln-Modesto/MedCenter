import TableCel from "../TableCel";
import { useModalContext } from '../../context/ModalContext';
import { Link } from "react-router-dom";
import './styles.css';

export default function TableRow({ pacient }) {

    const { openModal } = useModalContext()
    const toModal = () => openModal({pacient})

    return (
        <tbody>
            <tr>
                <TableCel title={pacient?.name?.first + ' ' + pacient?.name?.last} />
                <TableCel title={pacient?.gender === 'female' ? 'Feminino' : 'Masculino'}/>
                <TableCel title={pacient?.dob?.date.substring(0, 10)}/>
                <td>
                    <Link className="modalOpen" to="/pacient/123" onClick={toModal}>Visualizar</Link>
                </td>
            </tr>
        </tbody>
    )
}

