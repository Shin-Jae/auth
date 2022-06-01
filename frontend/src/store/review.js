import { csrfFetch } from "./csrf";
import groupReducer from "./group";

const ALL_REVIEWS = "reviews/ALL_REVIEWS";

export const allReviews = (reviews) => ({
    type: ALL_REVIEWS,
    reviews
})

export const getAllReviews = () => async dispatch => {
    const response = await csrfFetch(`/api/review`);

    if (response.ok) {
        let reviews = await response.json();
        dispatch(allReviews);
        return reviews;
    }
}

const initialState = {};

const reviewReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case ALL_REVIEWS:
            const reviews = {};

            for (let review of action.reviews) {
                reviews[review.id] = review;
            }
            return { ...reviews };
        default:
            return state;
    }
}

export default groupReducer;
