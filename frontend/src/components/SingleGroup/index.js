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
    const currentUser = useSelector((state) => state.session.user.id)
    // console.log("kj;j;jk", user.id)

    const group = Object.values(oneGroup);
    const review = Object.values(oneReview);

    //avg group rating
    let count = 0;
    review.forEach((revv) => {
        count += revv.rating
    })
    const avg = count / review.length;

    //user auth for edit/delete
    let auth = group[0]?.ownerId === currentUser;

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
                            <div className="single-group-title">
                                {group.title}
                            </div>
                        </div>
                        <div className="single-group-rating">
                            <StarRating avg={avg} /><span className="total-rating">({review.length})</span>
                            <div className="one-group-btns">
                                <CreateReviewModal />
                            </div>
                        </div>
                    </div>
                    <div className="single-group-images-container">
                        {group.image1 ? <img className="single-group-images" src={`${group.image1}`} alt="1"></img> : <></>}
                        {group.image2 ? <img className="single-group-images" src={`${group.image2}`} alt="2"></img> : <></>}
                        {group.image3 ? <img className="single-group-images" src={`${group.image3}`} alt="3"></img> : <></>}
                    </div>
                    <div className="single-group-location single-group-text"><span className="red">Located:</span>
                        <span className="location">{group.location}</span> </div>
                    <div className="single-group-aboutUs single-group-text"><span className="red">About Us:</span>
                        <div className="about-us"> {group.aboutUs}</div></div>
                    {
                        auth ? <div className="edit-delete-btns review-edit-delete">
                            <EditGroup />
                            <DeleteGroupModal />
                        </div> : <></>
                    }
                </div>
            })}
            <ul className="all-review-container">
                {review.map(rev => {
                    return <li className="single-review-container" key={`review-${rev.id}`}>
                        <div className="review-user">
                            {rev.User.profileImg ? <img className="review-profile-img" src={`${rev.User.profileImg}`} alt="prof"></img>
                                : <img className="group-profile-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BIRXTW1zxxbEAxGUuOpOgQHaHa%26pid%3DApi&f=1"></img>}
                            <div className="review-username">{rev?.User.username}</div>
                        </div>
                        <div className="review-rating"><StarRating avg={rev?.rating} /></div>
                        <div className="review-review"><span>🗣 :</span><div className="review">{rev?.review}</div></div>
                        <div className="single-review-images-container">
                            {rev.image1 ? <img className="single-review-images" src={`${rev.image1}`} alt="r1"></img> : <></>}
                            {rev.image2 ? <img className="single-review-images image2" src={`${rev.image2}`} alt="r2"></img> : <></>}
                            {/* {rev.image3 ? <img className="single-review-images" src={`${rev.image3}`} alt="r3"></img> : <></>} */}
                        </div>
                        {rev.userId === currentUser ?
                            <div className="review-edit-delete">
                                <EditReviewModal id={rev.id} />
                                <DeleteReviewModal id={rev.id} userId={rev.userId} />
                            </div> : <></>}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default SingleGroup;
