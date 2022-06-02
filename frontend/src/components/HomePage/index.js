import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as groupsActions from "../../store/group.js";
import './HomePage.css'

function HomePage() {
    const dispatch = useDispatch();
    const allGroups = useSelector((state) => state.groups);
    console.log('Before change', allGroups);
    const groups = Object.values(allGroups);
    console.log('After change', groups);

    useEffect(() => {
        dispatch(groupsActions.getAllGroups());
    }, [dispatch]);
    return (
        <div>
            <div className="home-img-container">
                SlidezShow NOthign lik,e a new coat
            </div>
            <div className="recent-activity">
                <h1 className="recent-text">Recent Activity</h1>
                <ul className="view-group-home">
                    {groups.map(group => {
                        return <li className="single-group-container" key={`group-${group.id}`}>
                            <NavLink exact to={`/group/${group.id}`} style={{ textDecoration: "none", color: "blue" }}>
                                <div><img className="group-profile-img" src={`${group.groupImg}`} alt=""></img></div>
                                <div><span className="red">Group:</span> {group.name}</div>
                                <div><span className="red">Job:</span> {group.title}</div>
                                {/* <div><span className="red">About us:</span> {group.aboutUs}</div> */}
                                <div>
                                    <img className="group-images" src={`${group.image1}`} alt="1"></img>
                                    <img className="group-images" src={`${group.image2}`} alt="2"></img>
                                    {/* <img className="group-images" src={`${group.image3}`} alt="3"></img> */}
                                </div>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
            {/* <div className="categories">
                <h1>Categories</h1>
            </div> */}
        </div>
    )
}

export default HomePage;
