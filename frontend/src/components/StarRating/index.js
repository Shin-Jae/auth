import { useEffect, useState } from "react";
import './StarRating.css'


function StarRating({ avg }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    console.log('avegare rating', avg)

    // let arr = []

    if (avg >= .75 && avg <= 1.49) avg = 1
    else if (avg >= 1.5 && avg <= 2.49) avg = 2
    else if (avg >= 2.5 && avg <= 3.49) avg = 3
    else if (avg >= 3.5 && avg <= 4.49) avg = 4
    else if (avg >= 4.5 && avg <= 5) avg = 5

    console.log('avg array!!!1', avg)

    return (
        <div className="group-rating">
            {avg % 2 === 0}
            {[1, 2, 3, 4, 5].map((star, index) => {
                index += 1;
                return (
                    <button
                        id="rating-btn"
                        type="button"
                        key={index}
                        value={avg}
                    >
                        {index <= avg
                            ? <span className="solid-star"><i className="fa-solid fa-star fa-2xl"></i></span>
                            : <span className="white-star"><i className="fa-regular fa-star fa-2xl"></i></span>}
                    </button>
                )
            })}
        </div>
    )
};

export default StarRating;
