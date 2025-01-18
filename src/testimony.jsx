import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jean-Marie Nshimiyimana",
      title: "Masaka farm Manager",
      image: "../assets/images/p1.jpg", 
      text: "HEMMA Investment's tree planting project has greatly improved my farm's productivity. The training they provided helped me adopt sustainable farming practices that have truly made a difference.",
      rating: 5,
      bg: "bg-customTeal",
    },
    {
      name: "Emmanuel Mugisha",
      title: "Human Accounts Supervisor",
      image: "../assets/images/p2.jpg", 
      text: "The restoration of our community land has brought us not only better soil quality but also more income from our crops. HEMMA's approach is both effective and easy to follow.",
      rating: 5,
      bg: "bg-white",
    },
    {
      name: "Alice Mukamana",
      title: "District Directives Producer",
      image: "../assets/images/p3.jpg", 
      text: "Thanks to HEMMA Investment, our local water sources have improved, and the community's livelihood has been uplifted through sustainable land management practices. It's been a rewarding experience.",
      rating: 5,
      bg: "bg-white",
    },
    {
      name: "Claudine Uwimana",
      title: "Rwamagana GreenLand Manager",
      image: "../assets/images/p4.jpg", 
      text: "Working with HEMMA has been a game-changer. The support and knowledge they shared on soil health and organic farming boosted our yields and made farming more profitable.",
      rating: 5,
      bg: "bg-white",
    },
  ];

  return (
    <section className="px-20 py-12  bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          <span>See What They Are Saying </span>
          <span className="text-customTeal">About HEMMA Investment</span>
        </h2>
        <p className="text-gray-600 mt-2">
          At HEMMA Investment, we take pride in the positive impact we've made in the communities
          we serve. Hear from our satisfied clients as they share their experiences with our land
          restoration and sustainable agriculture services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md ${testimonial.bg} flex items-start`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="text-gray-700 italic mb-4">“ {testimonial.text} ”</p>
              <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
              <div className="mt-2 text-yellow-500 flex">
                {"★".repeat(testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
