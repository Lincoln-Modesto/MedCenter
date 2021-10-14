import { useEffect, useState } from 'react';
import { useModalContext } from '../../context/ModalContext';

import Header from '../Header';
import TableHeader from '../TableHeader';
import TableRow from '../TableRow';
import LoadButton from '../LoadButton';
import Search from '../Search';

import './styles.css';

import api from '../../services/randomUser';

export default function Home() {

    const [pacients, setPacients] = useState({})

    async function loadPacients(){
        try{
            const response = await api.get('/?results=50');
            const res = response.data
            setPacients(res)
        }catch(err){
            console.log(err.message)
        }
    }

    // eslint-disable-next-line
    useEffect( () => {
        loadPacients()
    },[])
   
    let {results} = pacients

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
                   {results?.map( (pacient) => <TableRow key={pacient.phone}/> )}
                </table>
              
                <div className="d-flex justify-content-center mt-5">
                    <LoadButton/>
                </div>
            </main>

        </>
    )
}