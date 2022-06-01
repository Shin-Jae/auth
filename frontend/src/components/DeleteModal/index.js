import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';


function DeleteModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setShowModal(true)}>Delete</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <DeleteForm />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default DeleteModal;
