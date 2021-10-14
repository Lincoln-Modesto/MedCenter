import './styles.css'

import Load from '../../assets/replay.png';

export default function LoadButton(){
    return (
        <button >
            <img src={Load} alt="load"/>
            <span>Carregar mais</span>
        </button>
    )
}