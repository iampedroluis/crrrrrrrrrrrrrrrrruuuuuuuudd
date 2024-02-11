import "./Modal.css"
export const Modal = ({children, isOpen, closeModal}) => {
    const handleModalContainerClick = (e) => e.stopPropagation()
    
  return (
    <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
        <div className="modal-container" onClick={handleModalContainerClick}>
            <button className="modal-close" onClick={closeModal}><box-icon name='x'></box-icon></button>
            {children}
        </div>
    </article>
  )
}
