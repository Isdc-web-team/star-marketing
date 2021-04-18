const ServiceData = ({ service }) => {
    return (
        <div className="col-md-3 ">
            <div className="card card-zoom mx-2">
                <div className="m-3">
                    <img
                        className="img-fluid"
                        src={`http://localhost:5000/${service.image}`}
                        alt=""
                    />
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
