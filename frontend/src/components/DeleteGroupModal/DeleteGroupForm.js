import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from 'react-router-dom';
import * as groupsActions from "../../store/group.js";
import "./DeleteModal.css"

function DeleteGroupForm() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const currentUser = useSelector((state) => state.session.user.id)
    const ownerId = useSelector((state) => state.groups[id].ownerId)
    console.log(ownerId)

    const handleSubmit = (e, id) => {
        if (currentUser !== ownerId) {
            return alert("Cannot delete other user's reviews")
        }

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
        <form className="delete-modal" onSubmit={(e) => handleSubmit(e, id)}>
            <div><h2 className="delete-msg">Are you sure you want to delete?</h2></div>
            <div>
                <button className="delete-btn" type="submit" >Yes</button>
                {/* <button type="button" onClick={handleClick}>No</button> */}
            </div>
        </form>
    )
}

export default DeleteGroupForm;
