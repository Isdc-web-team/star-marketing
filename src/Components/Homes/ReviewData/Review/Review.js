import React, { useEffect, useState } from 'react';
import './Review.css'
const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/api/reviews')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
    }, [])
      return (
    //     <div className="  col-md-4 ">
    //        <div className="card card-zoom shadow-sm">
    //        <div className="p-3">
    //             <p className="card-text text-center">{quote}</p>
    //         </div>
    //         <div className="bg-light p-2 d-flex  align-items-center">
    //             <img className="mx-3 rounded-circle bg-danger" src={img} alt="" height="50" width="50"/>
    //             <div>
    //                 <h6 className="text-primary">{name}</h6>
    //                 <p className="m-0">{from}</p>
    //             </div>
    //         </div>
    //        </div>
    //    </div>
    <div className=""></div>
    );
};

export default Review;