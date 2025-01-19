import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const testimonials = [
    {
      name: "Jean-Marie Nshimiyimana",
      title: "Masaka farm Manager",
      image: "../assets/images/p2.jpg",
      text: "HEMMA Investment's tree planting project has greatly improved my farm's productivity. The training they provided helped me adopt sustainable farming practices that have truly made a difference.",
      rating: 5  
    },
    {
      name: "Emmanuel Mugisha",
      title: "Human Accounts Supervisor",
      image: "../assets/images/p2.jpg", 
      text: "The restoration of our community land has brought us not only better soil quality but also more income from our crops. HEMMA's approach is both effective and easy to follow.",
      rating: 5
    },
    {
      name: "Alice Mukamana",
      title: "District Directives Producer",
      image: "../assets/images/p3.jpg", 
      text: "Thanks to HEMMA Investment, our local water sources have improved, and the community's livelihood has been uplifted through sustainable land management practices. It's been a rewarding experience.",
      rating: 5
    },
    {
      name: "Claudine Uwimana",
      title: "Rwamagana GreenLand Manager",
      image: "../assets/images/p4.jpg", 
      text: "Working with HEMMA has been a game-changer. The support and knowledge they shared on soil health and organic farming boosted our yields and made farming more profitable.",
      rating: 5
    },
  ];

  return (
    <section className="max-w-7xl px-6 sm:px-10 lg:px-20 mx-auto py-12 sm:py-16 bg-white rounded-lg">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          <span>See What They Are Saying </span>
          <span className="text-customTeal">About HEMMA Investment</span>
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          At HEMMA Investment, we take pride in the positive impact we've made in the communities
          we serve. Hear from our satisfied clients as they share their experiences with our land
          restoration and sustainable agriculture services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md flex items-start hover:bg-customTeal hover:text-white transition-colors duration-300"
            data-aos="fade-up"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="italic mb-4">“ {testimonial.text} ”</p>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.title}</p>
                </div>
                <div className="mt-2 text-yellow-500 flex">
                  {"★".repeat(testimonial.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
