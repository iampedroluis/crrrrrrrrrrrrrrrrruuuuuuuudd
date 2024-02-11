import React from "react";
import {Modal} from "./Modal.jsx"
import { useModal } from "../hooks/useModal.js";
import { ContactForm } from "./ContactForm.jsx";
import { SongSearch } from "./SongSearch.jsx";
export const Modals = () => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    const [isOpenModalContact, openModalContact, closeModalContact] = useModal(false)
    const [isOpenModalSong, openModalSong, closeModalSong] = useModal(false)
  return (
    <div>
      <h2>Modales</h2>
      <button onClick={openModal1}>Modal 1</button>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola este el contenido de mi modal 1</p>
        <img src="https://picsum.photos/400/400" alt="Animals" />
      </Modal>
      <button onClick={openModal2}>Modal 2</button>
    <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3>Otro Modal</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus amet culpa suscipit magni, optio iste deleniti consequatur nemo ipsam dolor molestiae obcaecati tempore ex autem neque repellendus praesentium! Exercitationem, eum?</p>
        <img src="https://loremflickr.com/400/400" alt="" />
      </Modal> 
      <button onClick={openModalContact}>Modal Contacto</button>
      <Modal isOpen={isOpenModalContact} closeModal={closeModalContact}>
        <ContactForm/>
      </Modal>
      <button onClick={openModalSong}>Modal Lyric</button>
      <Modal isOpen={isOpenModalSong} closeModal={closeModalSong}>
        <SongSearch/>
      </Modal>
    </div>
  );
};
