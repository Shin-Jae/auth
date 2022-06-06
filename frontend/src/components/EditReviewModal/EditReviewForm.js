import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as reviewActions from '../../store/review';
import './EditReview.css';

function EditReviewForm({ id }) {
    const dispatch = useDispatch();

    const oneReview = useSelector((state) => state.reviews[id])

    const [rating, setRating] = useState(oneReview.rating);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState(oneReview.review);
    const [image1, setImage1] = useState(oneReview.image1);
    const [image2, setImage2] = useState(oneReview.image2);
    const [errors, setErrors] = useState([]);

    // const updateRating = (e) => e.target.value === 0 ? oneReview.rating : setRating(e.target.value);
    const updateReview = (e) => setReview(e.target.value);
    const updateImage1 = (e) => setImage1(e.target.value);
    const updateImage2 = (e) => setImage2(e.target.value);

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
        };

        await dispatch(reviewActions.editOneReview(editReview));
    };

    return (
        <form className="new-review-form" onSubmit={handleSubmit}>
            <h2 className="review-form-header">Edit a review</h2>
            <ul className="error-valid" style={{ textAlign: "center", color: "red" }}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                <div className="create-review-text">Rating</div>
                <div className="create-star-rating">
                    {[1, 2, 3, 4, 5].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                id="rating-btn"
                                type="button"
                                value={rating}
                                key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star"><i className="fa-solid fa-star fa-xl"></i></span>
                            </button>
                        )
                    })}
                </div>
            </label>
            <label>
                <div className="create-review-text">Review</div>
                <textarea
                    type="text"
                    className="text-box"
                    value={review}
                    onChange={updateReview}
                />
            </label>
            <label>
                <div className="create-review-text">Add Images</div>
                <input
                    type="text"
                    value={image1}
                    className="create-review-image"
                    placeholder="Image"
                    onChange={updateImage1}
                />
            </label>
            <label>
                <div >
                    <input
                        type="text"
                        value={image2}
                        className="create-review-image"
                        onChange={updateImage2}
                    />
                </div>
            </label>
            <div>
                <button className="submit-edit" type="submit">Edit Review</button>
            </div>
        </form>
    );
}

export default EditReviewForm;
