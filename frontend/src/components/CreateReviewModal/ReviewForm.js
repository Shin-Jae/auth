import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as reviewActions from '../../store/review';

function ReviewForm() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        const errors = [];
        if (review.length < 5) errors.push("Reviews must be at least 5 or more characters");
        if (rating > 5 || rating <= 0) errors.push("Rating must be at between 1-5");
        setErrors(errors);

        if (errors.length) {
            e.preventDefault();
            return;
        }

        let postReview = {
            id,
            rating,
            review,
            image1,
            image2,
            image3,
        };
        const post = await dispatch(reviewActions.newReview(postReview));
        console.log(post)
        if (post) {
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
            <div className="review-form-header">Write a review</div>
            <ul className="error-valid" style={{ textAlign: "center" }}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                <div>Rating</div>
                <input
                    type="number"
                    value={rating}
                    placeholder="1-5"
                    onChange={(e) => setRating(e.target.value)}
                    required
                />
            </label>
            <label>
                <div>Review</div>
                <textarea
                    type="text"
                    placeholder="Add a review"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </label>
            <label>
                <div>Add Images</div>
                <input
                    type="text"
                    value={image1}
                    placeholder="Image"
                    onChange={(e) => setImage1(e.target.value)}
                />
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image2}
                        placeholder="Image"
                        onChange={(e) => setImage2(e.target.value)}
                    />
                </div>
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image3}
                        placeholder="Image"
                        onChange={(e) => setImage3(e.target.value)}
                    />
                </div>
            </label>
            <div>
                <button type="submit">Post Review</button>
            </div>
        </form>
    );
}

export default ReviewForm;
