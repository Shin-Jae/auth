import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as groupActions from '../../store/group';
import './GroupFormPage.css'

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
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = [];
        if (name.length < 3) errors.push("Group names must be at least 3 or more characters");
        if (title.length < 3) errors.push("Job-title must be at least 3 or more characters");
        if (!categoryId || categoryId === null) errors.push("A category must be selected");
        setErrors(errors);

        if (errors.length) {
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
        };
        const group = await dispatch(groupActions.newGroup(newGroup));
        // console.log("dkasfjdlkfs;jadklf", group)
        if (group) {
            reset();
            history.push(`/group/${group.id}`);
        }
    };

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
        setErrors([]);
    }

    return (
        <div className="create-group-container">
            <form className="create-group-form" onSubmit={handleSubmit}>
                <div className="edit-group-header"><h2>Create your own Group</h2></div>
                <ul className="error-valid" style={{ textAlign: "center", color: "red" }}>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    <div className="edit-group-text">What is your Squad's name?</div>
                    <input
                        type="text"
                        value={name}
                        placeholder="Group Name"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <div className="edit-group-text">What does your Squad do?</div>
                    <input
                        type="text"
                        value={title}
                        placeholder="Job title"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    <div className="edit-group-text">Where is your Squad located?</div>
                    <input
                        type="text"
                        value={location}
                        placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label>
                    <div className="edit-group-text">Tell us about your Sqaud</div>
                    <textarea
                        type="text"
                        placeholder="Add a description"
                        value={aboutUs}
                        className="group-aboutUs"
                        onChange={(e) => setAboutUs(e.target.value)}
                    />
                </label>
                <label>
                    <div className="edit-group-text">Category:  </div>
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
                    <div className="edit-group-text">Squad Profile Image:</div>
                    <input
                        type="text"
                        value={groupImg}
                        placeholder="Image"
                        className="create-group-images"
                        onChange={(e) => setGroupImg(e.target.value)}
                    />
                </label>
                <label>
                    <div className="edit-group-text">Squad Images</div>
                    <input
                        type="text"
                        value={image1}
                        placeholder="Image"
                        className="create-group-images"
                        onChange={(e) => setImage1(e.target.value)}
                    />
                </label>
                <label>
                    <div>
                        <input
                            type="text"
                            value={image2}
                            placeholder="Image"
                            className="create-group-images"
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
                            className="create-group-images"
                            onChange={(e) => setImage3(e.target.value)}
                        />
                    </div>
                </label>
                <div>
                    <button className="submit-edit" type="submit">Create new Group</button>
                </div>
            </form >
        </div>
    );
}

export default GroupFormPage;
