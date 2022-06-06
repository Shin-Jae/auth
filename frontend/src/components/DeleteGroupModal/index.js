import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteGroupForm from './DeleteGroupForm';


function DeleteGroupModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div>
                <button className='delete-btn' onClick={() => setShowModal(true)}>Delete</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <DeleteGroupForm />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default DeleteGroupModal;
