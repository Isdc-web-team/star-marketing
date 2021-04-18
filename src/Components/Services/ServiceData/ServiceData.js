import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ServiceData = ( services ) => {
    const [service, setService] = useState ([])
    return (

        <div className="col-md-3 ">
            <div className="card card-zoom mx-2">

                <div className="m-3">
                    <img className="img-fluid" src={service.img} alt="" />

                </div>


                <div className="text-center p-3">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <h3>{service.price}</h3>
                    <button className="btn btn-primary">Check Now</button>
                </div>
            </div>

        </div>

    );
};

export default ServiceData;