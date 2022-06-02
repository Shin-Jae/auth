import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import * as reviewsActions from "../../store/review.js";

function DeleteReviewForm({ id }) {
    const dispatch = useDispatch();
    const history = useHistory();
    console.log('reviewId', id)

    const handleSubmit = async (id) => {
        await dispatch(reviewsActions.deleteOneReview(id));
        // if (dispatch) {
        //     // dispatch(groupsActions.getAllGroups());
        //     setTimeout(() => {
        //         history.push('/');
        //     }, 100)
        // }
    }

    return (
        <div>
            <div><h2>Are you sure you want to delete?</h2></div>
            <div>
                <button type="submit" onClick={() => handleSubmit(id)}>Yes</button>
                {/* <button type="button" onClick={handleClick}>No</button> */}
            </div>
        </div>
    )
}

export default DeleteReviewForm;
