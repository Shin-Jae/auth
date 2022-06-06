import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditReviewForm from './EditReviewForm';

function EditReviewModal({ id }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div>
                <button className='edit-btn' onClick={() => setShowModal(true)}>Edit Review</button>
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
