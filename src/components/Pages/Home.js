import Header from '../Header';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import LoadButton from '../LoadButton';
import Search from '../Search';

import './styles.css';

export default function Home() {

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
                    <TableRow/>
                </table>
              
                <div className="d-flex justify-content-center mt-5">
                    <LoadButton />
                </div>
            </main>

        </>
    )
}