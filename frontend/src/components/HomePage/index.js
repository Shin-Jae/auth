import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as groupsActions from "../../store/group.js";
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch();
    const allGroups = useSelector((state) => state.groups);
    console.log('Before change', allGroups)
    const groups = Object.values(allGroups);
    console.log('After change', groups)

    useEffect(() => {
        dispatch(groupsActions.getAllGroups());
    }, [dispatch]);
    return (
        <div>
            <div className="home-img-container">
                {/* <img className="homepage-slide" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.AFBZmAzd2ndaGrfmYrQunAHaE7%26pid%3DApi&f=1" alt="" ></img> */}
                SlidezShow NOthign lik,e a new coat
            </div>
            <div className="recent-activity">
                <h1>Recent Activity</h1>
            </div>
            <div className="categories">
                <h1>Categories</h1>
            </div>
        </div>
    )
}

export default HomePage;
