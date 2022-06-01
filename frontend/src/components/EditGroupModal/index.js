import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditGroupForm from './EditGroupForm';

function EditGroup() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setShowModal(true)}>Edit Group</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditGroupForm />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default EditGroup;
