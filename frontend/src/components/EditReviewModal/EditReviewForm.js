import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from '../../store/review';
import './EditReview.css';

function EditReviewForm({ id }) {
    const dispatch = useDispatch();

    const oneReview = useSelector((state) => state.reviews[id])
    console.log('fsdfasf', oneReview)

    const [rating, setRating] = useState(oneReview.rating);
    const [review, setReview] = useState(oneReview.review);
    const [image1, setImage1] = useState(oneReview.image1);
    const [image2, setImage2] = useState(oneReview.image2);
    const [image3, setImage3] = useState(oneReview.image3);
    const [errors, setErrors] = useState([]);

    const updateRating = (e) => e.target.value === 0 ? oneReview.rating : setRating(e.target.value);
    const updateReview = (e) => setReview(e.target.value);
    const updateImage1 = (e) => setImage1(e.target.value);
    const updateImage2 = (e) => setImage2(e.target.value);
    const updateImage3 = (e) => setImage3(e.target.value);

    const handleSubmit = async (e) => {
        const errors = [];
        if (review.length < 5) errors.push("Reviews must be at least 5 or more characters");
        if (rating.value < 6 && rating.value > 0) errors.push("Rating must be at between 1-5");
        setErrors(errors);

        if (errors.length) {
            e.preventDefault();
            return;
        }

        let editReview = {
            id,
            rating,
            review,
            image1,
            image2,
            image3,
        };
        const edit = await dispatch(reviewActions.editOneReview(editReview));
        console.log(edit)
        if (edit) {
            reset();
        }
    };

    const reset = () => {
        setRating(0);
        setReview("");
        setImage1("");
        setImage2("");
        setImage3("");
        setErrors([]);
    }

    return (
        <form className="new-review-form" onSubmit={handleSubmit}>
            <h2 className="review-form-header">Edit a review</h2>
            <ul className="error-valid" style={{ textAlign: "center" }}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                <div>Rating</div>
                <input
                    type="number"
                    value={rating}
                    // placeholder="1-5"
                    onChange={updateRating}
                // required
                />
            </label>
            <label>
                <div>Review</div>
                <textarea
                    type="text"
                    // placeholder="Add a review"
                    value={review}
                    onChange={updateReview}
                />
            </label>
            <label>
                <div>Add Images</div>
                <input
                    type="text"
                    value={image1}
                    placeholder="Image"
                    onChange={updateImage1}
                />
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image2}
                        placeholder="Image"
                        onChange={updateImage2}
                    />
                </div>
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image3}
                        placeholder="Image"
                        onChange={updateImage3}
                    />
                </div>
            </label>
            <div>
                <button type="submit">Edit Review</button>
            </div>
        </form>
    );
}

export default EditReviewForm;
