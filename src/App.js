import Modal from './components/Modal';
import Home from './components/Pages/Home';
import { ModalProvider } from './context/ModalContext';

export default function App() {
    return (
        <ModalProvider>
            <Modal/>
            <Home />
        </ModalProvider>
    )
}

