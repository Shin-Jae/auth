import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as groupsActions from "../../store/group.js";
import * as reviewsActions from "../../store/review.js";
import StarRating from "../StarRating/index.js";
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch();
    const allGroups = useSelector((state) => state.groups);
    const allReview = useSelector((state) => state.reviews)

    // console.log('Before change', allGroups);
    const groups = Object.values(allGroups);
    const reviews = Object.values(allReview);
    // console.log('After change', groups);

    const StarAvg = (id) => {
        let count = 0;
        let reviewLength = 0;
        reviews.forEach(review => {
            if (review.groupId === id) {
                count += review.rating
                reviewLength += 1
            }
        })
        let avg = count / reviewLength
        return avg
    }

    useEffect(() => {
        dispatch(groupsActions.getAllGroups());
        dispatch(reviewsActions.getAllReviews());
    }, [dispatch]);
    return (
        <div>
            <div className="home-img-container">
                <div className="home-welcome">Welcome to YelpSquad</div>
            </div>
            <div className="recent-activity">
                <h1 className="recent-text">Recent Activity</h1>
                <ul className="view-group-home">
                    {groups.map(group => {
                        return <li className="single-group-container" key={`group-${group.id}`}>
                            <NavLink exact to={`/group/${group.id}`} style={{ textDecoration: "none", color: "black" }}>
                                <div className="contain">
                                    {group.groupImg ? <img className="group-profile-img" src={`${group.groupImg}`} alt=""></img> :
                                        <img className="group-profile-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.BIRXTW1zxxbEAxGUuOpOgQHaHa%26pid%3DApi&f=1"></img>}
                                    <div className="group-name">{group.name}</div></div>
                                <div className="home-page-star-avg">
                                    <StarRating avg={StarAvg(group.id)} />
                                    <div className="star-avg-length">
                                        ( {group?.Reviews.length} )
                                    </div>
                                </div>
                                <span ><div className="job-title">{group.title}</div></span>
                                {/* <div><span className="red">About us:</span> {group.aboutUs}</div> */}
                                <div>
                                    {group.image1 ? <img className="group-images first" src={`${group.image1}`} alt="1"></img> : <></>}
                                    {group.image2 ? <img className="group-images" src={`${group.image2}`} alt="2"></img> : <></>}
                                </div>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
            {/* <div className="categories">
                <h1>Categories</h1>
            </div> */}
        </div >
    )
}

export default HomePage;
