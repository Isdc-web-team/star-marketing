import React, { useState } from 'react';
import Sidebar from '../../../Dashboard/Sidebar/Sidebar';
import Navbar from '../../../Shared/Navbar/Navbar'
const AddReview = () => {
    const [review, setReview] = useState({
        title: '',
            description: '',
            price: '',
        });
    
        const [image, setImage] =useState(null);
        
        const imageHandler = (e) => {
            const file = e.target.files[0];
            setImage(file);
        };
    
        const inputHandler = (e) => {
            const { name, value } = e.target;
            setReview((review) => ({
                ...review,
                [name]: value,
            }));
        }
    
        const submitHandler = async (event) => {
            event.preventDefault();
    
            const formData = new FormData();
            if (image) formData.append('image', image);
    
            for (const key of Object.keys(review)) {
                formData.set(key, review[key]);
            };
    
            fetch(`http://localhost:4000/api/reviews`, {
                method: 'POST',
                body: formData,
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
                .catch(err => {
                    console.log(err);
                });
    
            console.log(review, image);
    
        }
    return (
        <div>
            
           <div className="row">
               <Navbar/>
              
               <div className="col-md-6">
               <div className="p-5">
                   <h1>Review Page</h1>
                
                <form className="card p-3" onSubmit={submitHandler} > 
                        <input placeholder="your name" onChange={inputHandler} className="form-control m-2" name="title" defaultValue={review.name} />
                        <input placeholder="your mail" onChange={inputHandler} className="form-control m-2" name="email" defaultValue={review.email} />
    
                        <textarea rows="3" placeholder="Your Review" onChange={inputHandler} className="form-control m-2" name="description" defaultValue={review.description} />
                        {/* onChange={handleImageUpload}  */}
                        <input onChange={imageHandler} className="form-control m-2" name="exampleRequired" type="file" />
                        <input className="bg-primary border-0 rounded text-white p-1" type="submit" />
                    </form>
                </div>
               </div>
               <div className="col-md-6">
                   <h1>All Reviews</h1>
               </div>
           </div>
        </div>
    );
};

export default AddReview;