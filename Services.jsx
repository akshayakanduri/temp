import { Link } from "react-router-dom";

import babyshower from "../assets/images/babyshower.jpg";
import birthday from "../assets/images/birthday.jpg";
import corporate from "../assets/images/corporate.jpg";
import engagement from "../assets/images/engagement.jpg";
import housewarming from "../assets/images/housewarming.jpg";
import wedding from "../assets/images/wedding.jpg";

const services = [
  {
    title: "Wedding",
    image: wedding,
    price: "Starting from ₹50,000",
  },
  {
    title: "Birthday Party",
    image: birthday,
    price: "Starting from ₹15,000",
  },
  {
    title: "Engagement",
    image: engagement,
    price: "Starting from ₹25,000",
  },
  {
    title: "Baby Shower",
    image: babyshower,
    price: "Starting from ₹20,000",
  },
  {
    title: "Corporate Event",
    image: corporate,
    price: "Starting from ₹40,000",
  },
  {
    title: "Housewarming",
    image: housewarming,
    price: "Starting from ₹18,000",
  },
];

function Services() {
  return (
    <section className="container py-5">

      <h2 className="text-center fw-bold mb-5">
        Our Services
      </h2>

      <div className="row">

        {services.map((service, index) => (

          <div className="col-lg-4 col-md-6 mb-4" key={index}>

            <div className="card shadow h-100 border-0">

              <img
                src={service.image}
                alt={service.title}
                className="card-img-top"
                style={{
                  height: "230px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">

                <h4 className="fw-bold">
                  {service.title}
                </h4>

                <ul>
                  <li>Venue Decoration</li>
                  <li>Catering</li>
                  <li>Photography</li>
                  <li>Entertainment</li>
                </ul>

                <p className="fw-bold text-warning">
                  {service.price}
                </p>

                <Link
                  to="/events"
                  className="btn btn-warning w-100"
                >
                  View Details
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;