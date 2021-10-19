import { useEffect, useState, useMemo } from 'react';
import { usePacientContext } from '../../context/PacientContext';

import Header from '../Header';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import Load from '../../assets/replay.png';

import './styles.css';

export default function Home() {

    const { loadPacients, pacients } = usePacientContext();

    const [searchTerm, setSerachTerm] = useState('');

    useEffect(() => {

        loadPacients()
    }, [])

    const filteredPacients = useMemo(() => (
        pacients?.filter((pacient) => (
            pacient.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
            pacient?.location?.country.toLowerCase().includes(searchTerm.toLowerCase())
        ))
    ), [pacients, searchTerm]);

    return (
        <>
            <Header />
            <main>
                <div>
                    <div className="py-5 px-5" >
                        <h2>Lista de pacientes</h2>
                    </div>
                    <div className='col-10 d-flex justify-content-center mb-5 search-container'>
                        <input
                            value={searchTerm}
                            placeholder='Pesquisar paciente por nome ou nacionalidade'
                            onChange={(event) => setSerachTerm(event.target.value)}
                            className="search-bar"
                        />
                    </div>
                </div>
                <section className="d-flex justify-content-center mx-5 flex-column">
                    <table className="col-12">
                        <thead>
                            <tr>
                                <TableHeader name='Nome' col='col-4' />
                                <TableHeader name='Gênero' col='col-3' />
                                <TableHeader name='Data de Nasc.' col='col-2' />
                                <TableHeader name='Ações' col='col-3' />
                            </tr>
                        </thead>
                        {filteredPacients.map((pacient) =>
                            <TableRow pacient={pacient} key={pacient?.phone} />
                        )}
                    </table>

                    <div className="d-flex justify-content-center mt-5">
                        <button className="loadMore" onClick={loadPacients}>
                            <img src={Load} alt="load" />
                            <span>Carregar mais</span>
                        </button>
                    </div>
                </section>
            </main>
        </>
    )
}