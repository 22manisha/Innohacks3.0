import React from "react";
import AboutUs from "../about/About";

const elocateFeatures = [
  {
    number: "01",
    title: "E-Waste Collection",
    description:
      "A network of certified e-waste collection facilities which help in ensuring responsible disposal.",
  },
  {
    number: "02",
    title: "Educational Resources",
    description:
      "Information about e-waste and collection facilities which help users to gain knowledge.",
  },
  {
    number: "03",
    title: "User-Friendly Interface",
    description:
      "A dynamic and easy-to-use platform for individuals and businesses seeking e-waste solutions.",
  },
  {
    number: "04",
    title: "Chatbot",
    description:
      "An intelligent chatbot responsible for FAQs and educational resources.",
  },
  {
    number: "05",
    title: "Streamlined Booking System",
    description:
      "Efficient booking system with a credit mechanism helps in encouraging responsible disposal practices.",
  },
  {
    number: "06",
    title: "Facility Management Dashboard",
    description:
      "Comprehensive dashboard for facility owners to manage bookings and credits seamlessly.",
  },
];

const Features: React.FC = () => {
  return (
    <>
      <section className=" features" id="features" aria-label="features">
        <div className="container mx-auto px-4 pb-4 text-center">
          <AboutUs />
          <ul className="grid-list section py-20 my-2">
            {elocateFeatures.map((feature, index) => (
              <li key={index}>
                <div className="features-card">
                  <data className="card-number" value={feature.number}>
                    {feature.number}
                  </data>
                  <h3 className="h3 card-title">{feature.title}</h3>
                  <p className="card-text text-2xl">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Features;
