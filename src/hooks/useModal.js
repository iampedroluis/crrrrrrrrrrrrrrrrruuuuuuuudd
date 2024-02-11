import { useState } from 'react';

export const useModal = (initialvalue = false) => {
    const[isOpen, setIsOpen] = useState(initialvalue)

    const OpenModal = () => setIsOpen(true)
    const CloseModal = () => setIsOpen(false)

    return [isOpen, OpenModal, CloseModal]
}


