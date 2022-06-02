import { useDispatch } from "react-redux";
import * as reviewsActions from "../../store/review.js";

function DeleteReviewForm({ id }) {
    const dispatch = useDispatch();

    const handleSubmit = (id) => {
        dispatch(reviewsActions.deleteOneReview(id));
    }

    return (
        <form onSubmit={handleSubmit(id)}>
            <div><h2>Are you sure you want to delete?</h2></div>
            <div>
                <button type="submit">Yes</button>
            </div>
        </form>
    )
}

export default DeleteReviewForm;
