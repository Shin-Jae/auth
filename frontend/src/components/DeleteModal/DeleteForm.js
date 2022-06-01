import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import * as groupsActions from "../../store/group.js";

function DeleteForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    let [showModal, setShowModal] = useState(true);

    const handleSubmit = (id) => {
        dispatch(groupsActions.deleteOneGroup(id));
        if (dispatch) {
            // dispatch(groupsActions.getAllGroups());
            setTimeout(() => {
                history.push('/');
            }, 100)
        }
    }

    // const handleClick = () => {

    // }

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

export default DeleteForm;
