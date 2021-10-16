import { ModalProvider } from './context/ModalContext';
import { PacientProvider } from './context/PacientContext'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Home from './components/Pages/Home';

export default function App() {
    return (
        <BrowserRouter>
            <PacientProvider>
                <ModalProvider>
                    <Routes />
                    <Home />
                </ModalProvider>
            </PacientProvider>
        </BrowserRouter>
    )
}

