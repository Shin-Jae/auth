import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewForm from './ReviewForm';

function CreateReviewModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div>
                <button className='create-review-btn' onClick={() => setShowModal(true)}>Write a review</button>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <ReviewForm />
                    </Modal>
                )}
            </div>
        </>
    );
}

export default CreateReviewModal;
