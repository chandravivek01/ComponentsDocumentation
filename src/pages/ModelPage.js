import { useState } from "react"
import Button from "../components/Button"
import Modal from "../components/Modal"

const ModelPage = () => {

    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Agreement to accept.
            </p>
        </Modal>
    );

    return (
        <div>
            <Button primary onClick={handleClick} >Open Modal</Button>
            { showModal && modal } 
        </div>
    )
}

export default ModelPage