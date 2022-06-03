import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteReviewForm from './DeleteReviewForm';


function DeleteReviewModal({ id, userId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setShowModal(true)}>Delete</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <DeleteReviewForm id={id} userId={userId} />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default DeleteReviewModal;
