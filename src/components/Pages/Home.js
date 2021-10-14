import { useEffect, useState } from 'react';
import { useModalContext } from '../../context/ModalContext';

import Header from '../Header';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import Search from '../Search';
import Load from '../../assets/replay.png';

import './styles.css';

import api from '../../services/randomUser';

export default function Home() {

    const [pacients, setPacients] = useState([]);

    useEffect(() => {
        loadPacients()
    }, [])

    async function loadPacients() {
        try {
            const response = await api.get('/?results=2');
            const res = response.data?.results;
            Array.prototype.push.apply(res, pacients);
            setPacients(res)
            console.log(pacients)
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <>
            <Header />
            <div>
                <div className="py-5 px-5" >
                    <h2>Lista de pacientes</h2>
                </div>
                <Search />
            </div>
            <main className="d-flex justify-content-center mx-5 flex-column">
                <table className="col-12">
                    <thead>
                        <tr>
                            <TableHeader name='Nome' col='col-4' />
                            <TableHeader name='Gênero' col='col-3' />
                            <TableHeader name='Data de Nasc.' col='col-2' />
                            <TableHeader name='Ações' col='col-3' />
                        </tr>
                    </thead>
                    {pacients.map((pacient) => <TableRow key={pacient.phone} />)}
                </table>

                <div className="d-flex justify-content-center mt-5">
                    <button onClick={loadPacients}>
                        <img src={Load} alt="load" />
                        <span>Carregar mais</span>
                    </button>
                </div>
            </main>

        </>
    )
}