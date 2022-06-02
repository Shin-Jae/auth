import { csrfFetch } from "./csrf";

const ALL_REVIEWS = "reviews/ALL_REVIEWS";
const ONE_REVIEW = "reviews/ONE_REVIEW";
const POST_REVIEW = "reviews/POST_REVIEW";
const EDIT_REVIEW = "reviews/EDIT_REVIEW";
const DELETE_REVIEW = "reviews/DELETE_REVIEW";

export const allReviews = (reviews) => ({
    type: ALL_REVIEWS,
    reviews
});

export const oneReview = (review) => ({
    type: ONE_REVIEW,
    review
});

export const postReview = (review) => ({
    type: POST_REVIEW,
    review
});

export const editReview = (review) => ({
    type: EDIT_REVIEW,
    review
});

export const deleteReview = (id) => ({
    type: DELETE_REVIEW,
    id
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

export const newReview = review => async dispatch => {
    const response = await csrfFetch(`/api/review/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });

    if (response.ok) {
        const review = await response.json();
        dispatch(postReview(review));
        return review;
    }
}

export const editOneReview = review => async dispatch => {
    const response = await csrfFetch(`/api/review/${review.id}`, {
        method: "PUT",
        body: JSON.stringify(review)
    });
    if (response.ok) {
        let edit = await response.json();
        dispatch(editReview(edit));
    }
}

export const deleteOneReview = id => async dispatch => {
    const response = await csrfFetch(`/api/review/${id}`, {
        method: "DELETE",
    })
    if (response.ok) {
        dispatch(deleteReview(id));
    }
    return response;
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
        case ONE_REVIEW:
            const oneReview = {};

            for (let review of action.review) {
                oneReview[review.id] = review;
            }
            return { ...oneReview };
        case EDIT_REVIEW:
            newState.reviews = state.reviews.map((review) => {
                if (review.id === action.review.id) {
                    return action.review;
                } else {
                    return review;
                }
            });
            return newState;
        default:
            return state;
    }
}

export default reviewReducer;
