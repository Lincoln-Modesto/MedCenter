import { ModalProvider } from './context/ModalContext';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/routes';
import Home from './components/Pages/Home';

export default function App() {
    return (
        <BrowserRouter>
            <ModalProvider>
                <Home/>
                <Routes/>
            </ModalProvider>
        </BrowserRouter>
    )
}

