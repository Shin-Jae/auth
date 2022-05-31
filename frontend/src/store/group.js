import { csrfFetch } from './csrf';

const ALL_GROUPS = "groups/ALL_GROUPS";

export const allGroups = (groups) => ({
    type: ALL_GROUPS,
    groups
})

export const getAllGroups = () => async dispatch => {
    const response = await csrfFetch(`/api/group`);

    if (response.ok) {
        let groups = await response.json();
        dispatch(allGroups(groups));
        return groups
    }
}

const initialState = {};

const groupReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case ALL_GROUPS:
            const groups = {};

            for (let group of action.groups) {
                groups[group.id] = group;
            }
            return { ...groups };
        default:
            return state;
    }
}

export default groupReducer;
