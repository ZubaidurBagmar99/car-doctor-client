import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-3xl font-semibold text-orange-600">Services</h3>
        <h2 className="text-4xl font-bold">Our Service Area</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sit
          dolores <br /> in distinctio quisquam accusamus, commodi tempore quis vel
          sequi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
            services.map(service => <ServiceCard key={service._id} service={service}> </ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
