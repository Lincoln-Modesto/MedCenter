import { useModalContext } from '../../context/ModalContext';
import TableCel from "../TableCel";

export default function TableRow(){

    const {openModal} = useModalContext()

    return (
            <tr onClick={openModal}>
                <TableCel title={'Lincoln'} />
                <TableCel title={'Masculino'} />
                <TableCel title={'15/02/1996'} />
                <TableCel title={'dev'} />
            </tr>
    )

}