import { Modal as ModalComponent } from "antd"
import { useModalContext } from "../context/Context"

const Modal = () => {
    const {
      modalState: { message, visible },
      closeModal,
    } = useModalContext();
  
    return (
      <ModalComponent
        onCancel={closeModal}
        onOk={closeModal}
        visible={visible}
      >
        <h2>{message}</h2>
      </ModalComponent>
    );
  };

export default Modal;