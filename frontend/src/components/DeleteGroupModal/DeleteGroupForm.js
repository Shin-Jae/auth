import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import * as groupsActions from "../../store/group.js";

function DeleteGroupForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e, id) => {
        e.preventDefault();
        dispatch(groupsActions.deleteOneGroup(id));
        if (dispatch) {
            // dispatch(groupsActions.getAllGroups());
            return setTimeout(() => {
                history.push('/');
            }, 100)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e, id)}>
            <div><h2>Are you sure you want to delete?</h2></div>
            <div>
                <button type="submit" >Yes</button>
                {/* <button type="button" onClick={handleClick}>No</button> */}
            </div>
        </form>
    )
}

export default DeleteGroupForm;
