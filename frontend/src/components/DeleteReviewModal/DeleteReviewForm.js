import { useDispatch, useSelector } from "react-redux";
import * as reviewsActions from "../../store/review.js";

function DeleteReviewForm({ id, userId }) {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.session.user.id)

    const handleSubmit = (id) => {
        dispatch(reviewsActions.deleteOneReview(id));
    }

    const handleClick = () => {
        if (userId !== currentUser) {
            return alert("Cannot delete other user's reviews")
        }
    }

    return (
        <form className="delete-modal" onSubmit={() => handleSubmit(id)}>
            <div><h2 className="delete-msg">Are you sure you want to delete?</h2></div>
            <div>
                <button type="submit" onClick={handleClick}>Yes</button>
            </div>
        </form>
    )
}

export default DeleteReviewForm;
