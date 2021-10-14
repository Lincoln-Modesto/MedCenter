import { Link } from 'react-router-dom'
import { useModalContext } from '../../context/ModalContext';
import './styles.css'

export default function TableCel({title}){

    const { openModal } = useModalContext()
    
    return(
        <td>
            <Link to="/pacient/123" onClick={openModal}>{title}</Link>
        </td>
    )
}