import { useEffect} from 'react';
import { usePacientContext } from '../../context/PacientContext';

import Header from '../Header';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import Search from '../Search';
import Load from '../../assets/replay.png';

import './styles.css';

export default function Home() {

    const { loadPacients, pacients } = usePacientContext();

    useEffect(() => {
        loadPacients()
    }, [])

    return (
        <>
            <Header />
            <main>
            <div>
                <div className="py-5 px-5" >
                    <h2>Lista de pacientes</h2>
                </div>
                <Search />
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
                    {pacients.map((pacient) => 
                        <TableRow pacient={pacient} key={pacient?.id?.value}/>
                    )}
                </table>

                <div className="d-flex justify-content-center mt-5">
                    <button onClick={loadPacients}>
                        <img src={Load} alt="load" />
                        <span>Carregar mais</span>
                    </button>
                </div>
            </section>
            </main>
        </>
    )
}