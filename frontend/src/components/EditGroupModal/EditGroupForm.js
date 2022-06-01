import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import * as groupsActions from "../../store/group.js";

function EditGroupForm() {
    const dispatch = useDispatch();
    const { id } = useParams();

    const oneGroup = useSelector((state) => state.groups)

    const [name, setName] = useState(oneGroup.name);
    const [title, setTitle] = useState(oneGroup.title);
    const [location, setLocation] = useState(oneGroup.location);
    const [aboutUs, setAboutUs] = useState(oneGroup.aboutUs);
    const [categoryId, setCategoryId] = useState(oneGroup.categoryId);
    const [groupImg, setGroupImg] = useState(oneGroup.groupImg);
    const [image1, setImage1] = useState(oneGroup.image1);
    const [image2, setImage2] = useState(oneGroup.image2);
    const [image3, setImage3] = useState(oneGroup.image3);
    const [image4, setImage4] = useState(oneGroup.image4);
    const [image5, setImage5] = useState(oneGroup.image5);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState([]);

    const updateName = (e) => e.target.value === "" ? oneGroup.name : setName(e.target.value);
    const updateTitle = (e) => setTitle(e.target.value);
    const updateLocation = (e) => setLocation(e.target.value);
    const updateAboutUs = (e) => setAboutUs(e.target.value);
    const updateCategoryId = (e) => setCategoryId(e.target.value);
    const updateGroupImg = (e) => setGroupImg(e.target.value);
    const updateImage1 = (e) => setImage1(e.target.value);
    const updateImage2 = (e) => setImage2(e.target.value);
    const updateImage3 = (e) => setImage3(e.target.value);
    const updateImage4 = (e) => setImage4(e.target.value);
    const updateImage5 = (e) => setImage5(e.target.value);

    const handleSubmit = async (e) => {
        const errors = [];

        // if (name.length < 3) errors.push("Group names must be at least 3 or more characters");
        if (title.length < 3) errors.push("Job-title must be at least 3 or more characters");
        if (!categoryId || categoryId === null) errors.push("A category must be selected");
        setErrors(errors);

        if (errors.length) {
            e.preventDefault();
            return;
        }

        let edit = {
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
            image5,
            id
        };
        const update = await dispatch(groupsActions.editOneGroup(edit));
        console.log(update)
        if (update) {
            setShowModal(false);
        }
    };

    // const handleCategory = (e) => {
    //     setCategoryId(e);
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div><h2>Edit Group</h2></div>
            <ul className="error-valid" style={{ textAlign: "center" }}>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                <div>What is your Groups name?</div>
                <input
                    type="text"
                    value={name}
                    onChange={updateName}
                // required
                />
            </label>
            <label>
                <div>What does your Group do?</div>
                <input
                    type="text"
                    value={title}
                    placeholder={title}
                    onChange={updateTitle}
                    required
                />
            </label>
            <label>
                <div>Where is your Group located?</div>
                <input
                    type="text"
                    value={location}
                    onChange={updateLocation}
                />
            </label>
            <label>
                <div>Tell us about your Group</div>
                <textarea
                    type="text"
                    value={aboutUs}
                    onChange={updateAboutUs}
                />
            </label>
            <label>
                <span>Category:  </span>
                <select
                    value={categoryId}
                    onChange={updateCategoryId}
                >
                    <option value={null}>Select One</option>
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
                    onChange={updateGroupImg}
                />
            </label>
            <label>
                <div>Group Images</div>
                <input
                    type="text"
                    value={image1}
                    onChange={updateImage1}
                />
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image2}
                        placeholder="Image"
                        onChange={updateImage2}
                    />
                </div>
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image3}
                        placeholder="Image"
                        onChange={updateImage3}
                    />
                </div>
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image4}
                        placeholder="image"
                        onChange={updateImage4}
                    />
                </div>
            </label>
            <label>
                <div>
                    <input
                        type="text"
                        value={image5}
                        placeholder="image"
                        onChange={updateImage5}
                    />
                </div>
            </label>
            <div>
                <button type="submit" >Edit Group</button>
            </div>
        </form >
    )
}

export default EditGroupForm;
