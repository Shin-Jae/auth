import { csrfFetch } from './csrf';

const ALL_GROUPS = "groups/ALL_GROUPS";
const SINGLE_GROUP = "groups/SINGLE_GROUP";
const POST_GROUP = "groups/POST_GROUP";

export const allGroups = (groups) => ({
    type: ALL_GROUPS,
    groups
});

export const singleGroup = (group) => ({
    type: SINGLE_GROUP,
    group
});

export const postGroup = (group) => ({
    type: POST_GROUP,
    group
})

export const getAllGroups = () => async dispatch => {
    const response = await csrfFetch(`/api/group`);

    if (response.ok) {
        let groups = await response.json();
        dispatch(allGroups(groups));
        return groups
    }
}

export const getOneGroup = id => async dispatch => {
    const response = await csrfFetch(`/api/group/${id}`);

    if (response.ok) {
        let group = await response.json();
        dispatch(singleGroup(group));
    }
}

export const newGroup = group => async dispatch => {
    const response = await csrfFetch(`/api/group/new`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(group),
    });

    if (response.ok) {
        const group = await response.json();
        dispatch(postGroup(group));
        return group;
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
        case SINGLE_GROUP:
            const oneGroup = {};

            oneGroup[action.group.id] = action.group;

            return { ...oneGroup };
        default:
            return state;
    }
}

export default groupReducer;
