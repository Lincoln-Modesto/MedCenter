import TableCel from "../TableCel";

export default function TableRow() {

    return (
        <tbody>
            <tr>
                <TableCel title={'Lincoln'} />
                <TableCel title={'Masculino'} />
                <TableCel title={'15/02/1996'} />
                <TableCel title={'dev'} />
            </tr>
        </tbody>
    )
}