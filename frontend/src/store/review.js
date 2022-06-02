import { csrfFetch } from "./csrf";

const ALL_REVIEWS = "reviews/ALL_REVIEWS";
const ONE_REVIEW = "reviews/ONE_REVIEW";

export const allReviews = (reviews) => ({
    type: ALL_REVIEWS,
    reviews
});

export const oneReview = (review) => ({
    type: ONE_REVIEW,
    review
})

export const getAllReviews = () => async dispatch => {
    const response = await csrfFetch(`/api/review`);

    if (response.ok) {
        let reviews = await response.json();
        dispatch(allReviews(reviews));
        return reviews;
    }
}

export const getOneReview = id => async dispatch => {
    const response = await csrfFetch(`/api/review/${id}`);

    if (response.ok) {
        const review = await response.json();
        dispatch(oneReview(review));
    };
};

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    // let newState = { ...state };
    switch (action.type) {
        case ALL_REVIEWS:
            const reviews = {};

            for (let review of action.reviews) {
                reviews[review.id] = review;
            }
            return { ...reviews };
        case ONE_REVIEW:
            const oneReview = {};

            for (let review of action.review) {
                oneReview[review.id] = review;
            }
            return { ...oneReview };
        default:
            return state;
    }
}

export default reviewReducer;
