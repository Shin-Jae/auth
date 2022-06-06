import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import EditGroup from "../EditGroupModal";
import DeleteGroupModal from "../DeleteGroupModal";
import CreateReviewModal from "../CreateReviewModal";
import EditReviewModal from "../EditReviewModal";
import * as groupsActions from "../../store/group.js";
import * as reviewsActions from "../../store/review.js";
import './SingleGroup.css'
import DeleteReviewModal from "../DeleteReviewModal";
import StarRating from "../StarRating";

function SingleGroup() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const oneGroup = useSelector((state) => state.groups)
    const oneReview = useSelector((state) => state.reviews)
    // console.log("kj;j;jk", oneReview)

    const group = Object.values(oneGroup);
    const review = Object.values(oneReview);
    // console.log('After change', group);

    let count = 0;
    review.forEach((revv) => {
        count += revv.rating
    })
    const avg = count / review.length;

    useEffect(() => {

        dispatch(groupsActions.getOneGroup(id));

        dispatch(reviewsActions.getOneReview(id));

    }, [dispatch, id]);

    return (
        <div>
            {group.map(group => {
                return <div className="one-group-container" key={`${group.id}`}>
                    <div className="one-group-header-container"><img className="single-group-profile-img" src={`${group.groupImg}`} alt=""></img>
                        <div className="single-group-name-container">
                            <h1 className="single-group-name">{group.name}</h1>
                        </div>
                        <div className="single-group-rating">
                            <StarRating avg={avg} /><span className="total-rating">({review.length})</span>
                            <div className="one-group-btns">
                                <CreateReviewModal />
                            </div>
                        </div>
                    </div>
                    <div className="edit-delete-btns">
                        <EditGroup />
                        <DeleteGroupModal />
                    </div>
                    <div className="single-group-title single-group-text"><span className="red">Job:</span> {group.title}</div>
                    <div className="single-group-location single-group-text"><span className="red">Located:</span> {group.location}</div>
                    <div className="single-group-aboutUs single-group-text"><span className="red">About Us:</span> {group.aboutUs}</div>
                    {/* <div><span className="red">About us:</span> {group.aboutUs}</div> */}
                    <div className="single-group-images-container">
                        <img className="single-group-images" src={`${group.image1}`} alt="1"></img>
                        <img className="single-group-images" src={`${group.image2}`} alt="2"></img>
                        <img className="single-group-images" src={`${group.image3}`} alt="3"></img>
                        {/* <img className="single-group-images" src={`${group.image4}`} alt="4"></img>
                        <img className="single-group-images" src={`${group.image5}`} alt="5"></img> */}
                    </div>
                </div>
            })}
            <ul>
                {review.map(rev => {
                    return <li className="single-review-container" key={`review-${rev.id}`}>
                        {rev.User.profileImg ? <img className="review-profile-img" src={`${rev.User.profileImg}`} alt="prof"></img> : <></>}

                        <div>User: {rev?.User.username}</div>
                        <div><StarRating avg={rev?.rating} />{rev.rating}</div>
                        <div>Review: {rev?.review}</div>
                        <div className="single-group-images-container">
                            {rev.image1 ? <img className="single-group-images" src={`${rev.image1}`} alt="r1"></img> : <></>}
                            {rev.image2 ? <img className="single-group-images" src={`${rev.image2}`} alt="r2"></img> : <></>}
                            {rev.image3 ? <img className="single-group-images" src={`${rev.image3}`} alt="r3"></img> : <></>}

                        </div>
                        <div>
                            <EditReviewModal id={rev.id} />
                            <DeleteReviewModal id={rev.id} userId={rev.userId} />
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SingleGroup;
