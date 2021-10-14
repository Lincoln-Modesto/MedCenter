import React, { createContext, useContext, useState } from 'react';

// Context
const ModalContext = createContext({});

// Provider
const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({ visible: false });

  const openModal = (payload) =>
  setModalState({ ...payload, visible: true });
  const closeModal = () => setModalState({ visible: false });

  return (
    <ModalContext.Provider
      value={{ modalState, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Hook

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModalContext, ModalProvider };