import './styles.css'

export default function TableHeader({ name, col }) {
    return (
        <th className={col}>{name}</th>
    )
}