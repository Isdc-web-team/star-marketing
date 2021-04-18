
import React, { useEffect, useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddServices = () => {
    const [service, setService] = useState({
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
        setService((service) => ({
            ...service,
            [name]: value,
        }));
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        if (image) formData.append('image', image);

        for (const key of Object.keys(service)) {
            formData.set(key, service[key]);
        };

        fetch(`http://localhost:4000/api/services`, {
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

        console.log(service, image);

    }
    
    ;return (
        <div>
           <div className="row">
               <div className="col-md-2">
                   <Sidebar/>
               </div>
               <div className="col-md-5">
               <div className=" p-5 ">
                
                <form className="card p-3" onSubmit={submitHandler} > 
                        <input placeholder="Service Name" onChange={inputHandler} className="form-control m-2" name="title" defaultValue={service.name} />
                        <textarea placeholder="service details" onChange={inputHandler} className="form-control m-2" name="description" rows="3" defaultValue={service.description} />
                        <input placeholder="price" onChange={inputHandler} className="form-control m-2" name="price" type="number" defaultValue={service.price}/>
                        {/* onChange={handleImageUpload}  */}
                        <input onChange={imageHandler} className="form-control m-2" name="exampleRequired" type="file" />
                        <input className="bg-primary border-0 rounded text-white p-1" type="submit" />
                    </form>
                </div>
               </div>
               <div className="col-md-5">
                   <h1>All Services</h1>
               </div>
           </div>
        </div>
    );
};

export default AddServices;