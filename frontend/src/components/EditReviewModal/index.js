import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';

function EditReviewModal({ id }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setShowModal(true)}>Edit Group</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <EditReviewForm id={id} />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default EditReviewModal;
