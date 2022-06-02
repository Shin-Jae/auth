import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReviewForm from './DeleteReviewForm';


function DeleteReviewModal({ id }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setShowModal(true)}>Delete</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <DeleteReviewForm id={id} />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default DeleteReviewModal;
