import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as reviewActions from '../../store/review';
import "./CreateReview.css";

function ReviewForm() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [review, setReview] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
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
        };
        console.log(rating)
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
        setErrors([]);
    }

    return (
        <form className="new-review-form" onSubmit={handleSubmit}>
            <h2 className="review-form-header">Write a review</h2>
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
                                value={index}
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
                    placeholder='ex. "This squad really got me out of a jam when I was in college. They did not know who I was but still lent a helping hand!"'
                    className="text-box"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
            </label>
            <label>
                <div className="create-review-text">Add Images</div>
                <input
                    type="text"
                    value={image1}
                    className="create-review-image"
                    placeholder="Image"
                    onChange={(e) => setImage1(e.target.value)}
                />
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image2}
                        className="create-review-image"
                        placeholder="Image"
                        onChange={(e) => setImage2(e.target.value)}
                    />
                </div>
            </label>
            <div>
                <button className="submit-edit" type="submit">Post Review</button>
            </div>
        </form>
    );
}

export default ReviewForm;
