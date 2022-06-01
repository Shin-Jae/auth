import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as groupActions from '../../store/group';

function GroupFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [aboutUs, setAboutUs] = useState("");
    const [categoryId, setCategoryId] = useState();
    const [groupImg, setGroupImg] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    const [image5, setImage5] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        const errors = [];
        if (name.length < 3) errors.push("Group names must be at least 3 or more characters");
        if (title.length < 3) errors.push("Job-title must be at least 3 or more characters");
        if (!categoryId || categoryId === null) errors.push("A category must be selected");
        setErrors(errors);

        if (errors.length) {
            e.preventDefault();
            return;
        }

        let newGroup = {
            name,
            title,
            location,
            aboutUs,
            categoryId,
            groupImg,
            image1,
            image2,
            image3,
            image4,
            image5
        };
        const post = await dispatch(groupActions.newGroup(newGroup));
        // console.log(post)
        if (post) {
            history.push(`/group/${post.id}`);
            reset();
        }
    };

    // function handleClick() {
    //     history.push("/");
    // }

    const handleCategory = (e) => {
        setCategoryId(e);
    }

    const reset = () => {
        setName("");
        setTitle("");
        setLocation("");
        setAboutUs("");
        setCategoryId();
        setGroupImg("");
        setImage1("");
        setImage2("");
        setImage3("");
        setImage4("");
        setImage5("");
        setErrors([]);
    }

    return (
        <form className="new-group-form" onSubmit={handleSubmit}>
            <div className="group-form-header"><h2>Create your own Group</h2></div>
            <ul className="error-valid" style={{ textAlign: "center" }}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                <div>What is your Groups name?</div>
                <input
                    type="text"
                    value={name}
                    placeholder="Group Name"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                <div>What does your Group do?</div>
                <input
                    type="text"
                    value={title}
                    placeholder="Job title"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                <div>Where is your Group located?</div>
                <input
                    type="text"
                    value={location}
                    placeholder="Location"
                    onChange={(e) => setLocation(e.target.value)}
                />
            </label>
            <label>
                <div>Tell us about your Group</div>
                <textarea
                    type="text"
                    placeholder="Add a description"
                    value={aboutUs}
                    onChange={(e) => setAboutUs(e.target.value)}
                />
            </label>
            <label>
                <span>Category:  </span>
                <select
                    value={categoryId}
                    onChange={(e) => handleCategory(e.target.value)}
                >
                    <option value={null} >Select One</option>
                    <option value={1}>Adventure</option>
                    <option value={2}>Sports</option>
                    <option value={3}>Heros</option>
                    <option value={4}>Music</option>
                    <option value={5}>Miscellaneous</option>
                </select>
            </label>
            <label>
                <div>Group Profile Image:</div>
                <input
                    type="text"
                    value={groupImg}
                    placeholder="Image"
                    onChange={(e) => setGroupImg(e.target.value)}
                />
            </label>
            <label>
                <div>Group Images</div>
                <input
                    type="text"
                    value={image1}
                    placeholder="Image"
                    onChange={(e) => setImage1(e.target.value)}
                />
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image2}
                        placeholder="Image"
                        onChange={(e) => setImage2(e.target.value)}
                    />
                </div>
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image3}
                        placeholder="Image"
                        onChange={(e) => setImage3(e.target.value)}
                    />
                </div>
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image4}
                        placeholder="image"
                        onChange={(e) => setImage4(e.target.value)}
                    />
                </div>
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image5}
                        placeholder="image"
                        onChange={(e) => setImage5(e.target.value)}
                    />
                </div>
            </label>
            <div>
                <button type="submit">Create new Group</button>
            </div>
        </form >
    );
}

export default GroupFormPage;
