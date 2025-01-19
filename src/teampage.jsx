import React from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';


const TeamMemberCard = ({ name, role, imageSrc, description }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer"
      data-aos="fade-down"
    >
      <div className="w-32 h-32 bg-white rounded-full mx-auto mt-8">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <div className="text-center p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-700">{role}</p>
        <p className="text-gray-600 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

const TeamPage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100">
    
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('../assets/images/team1.jpg')` }}
      >
       
        <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col justify-center items-center text-center px-6">
         
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight" data-aos="fade-down">
            MEET OUR TEAM
          </h1>
         
          <p className="text-lg text-white max-w-3xl mb-6" data-aos="fade-up">
            Dedicated professionals, innovative thinkers, and experienced leaders committed to delivering excellence.
          </p>
         
          <a
            href="#team"
            className="bg-white text-teal-500 font-medium px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
            data-aos="fade-up"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-12 max-w-7xl mx-auto px-6 lg:px-8" id="team">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">Our Dedicated Team</h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { name: 'John Doe', role: 'Secretary', imageSrc: '../assets/images/t1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { name: 'Jane Smith', role: 'Project Manager', imageSrc: '../assets/images/t2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { name: 'Alice Johnson', role: 'Project Director', imageSrc: '../assets/images/t3.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { name: 'Mark Brown', role: 'CEO', imageSrc: '../assets/images/t4.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { name: 'Emily Davis', role: 'Role 5', imageSrc: '../assets/images/t5.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { name: 'Michael Wilson', role: 'Role 6', imageSrc: '../assets/images/t6.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }
          ].map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              imageSrc={member.imageSrc}
              description={member.description}
            />
          ))}
        </div>

        {/* Team Categories Section */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8" data-aos="fade-up">Team Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Dedicated Professionals',
              description:
                'A team of highly trained specialists in customer service, sales, technical support, and data analysis.',
            },
            {
              title: 'Innovative Thinkers',
              description:
                'Problem-solvers who leverage AI-powered tools, a cloud-based network, and analytics to deliver exceptional results.',
            },
            {
              title: 'Experienced Leaders',
              description:
                'We foster a culture of teamwork and growth, ensuring our employees have the tools and support to excel.',
            },
          ].map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center transform transition-transform hover:scale-105 cursor-pointer"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              <p className="text-gray-700 mt-4">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
