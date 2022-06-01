import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import EditGroup from "../EditGroupModal"
import * as groupsActions from "../../store/group.js";
import './SingleGroup.css'
import DeleteModal from "../DeleteModal";

function SingleGroup() {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const allGroups = useSelector((state) => state.groups);
    const oneGroup = useSelector((state) => state.groups)
    // const groupReview = useSelector((state) => state.groups[id].Reviews)
    console.log('Before change', oneGroup);
    const group = Object.values(oneGroup);
    // const review = Object.values(groupReview);
    console.log('After change', group);

    useEffect(() => {
        dispatch(groupsActions.getOneGroup(id));
    }, [dispatch, id]);

    return (
        <div>
            {group.map(group => {
                return <div className="one-group-container" key={`${group.id}`}>
                    <div><img className="single-group-profile-img" src={`${group.groupImg}`} alt=""></img>
                        <h1 className="single-group-name">{group.name}</h1>
                        <span className="total-rating">⭐️ ⭐️ ⭐️ ⭐️ ⭐️</span>
                    </div>
                    <div className="single-group-title"><span className="red">Job:</span> {group.title}</div>
                    <div className="single-group-location"><span className="red">Located:</span> {group.location}</div>
                    <div className="single-group-aboutUs"><span className="red">About Us:</span> {group.aboutUs}</div>
                    {/* <div><span className="red">About us:</span> {group.aboutUs}</div> */}
                    <div><button type="submit">Write a review</button>
                        <button type="submit">Favorite</button></div>
                    <div>
                        <EditGroup />
                        <DeleteModal />
                    </div>
                    <div className="single-group-images1">
                        <img className="single-group-images" src={`${group.image1}`} alt="1"></img>
                        <img className="single-group-images" src={`${group.image2}`} alt="2"></img>
                        <img className="single-group-images" src={`${group.image3}`} alt="3"></img>
                    </div>
                </div>
            })}
            {/* {review.map(rev => {
                return <div className="single-review-container">
                    <img className="review-profile-img" src={`${rev.User.profileImg}`} alt="prof"></img>
                    <div>User: {rev?.User.username}</div>
                    <div>Rating: {rev?.rating}</div>
                    <div>Review: {rev?.review}</div>
                </div>
            })} */}

        </div>
    )
}

export default SingleGroup;
