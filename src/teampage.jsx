import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamPage = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('../assets/images/team1.jpg')` }}
      >
        <div className="absolute inset-0 bg-customTeal bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight" data-aos="fade-down" style={{marginTop:'-100px'}}>
            MEET OUR TEAM
          </h1>
          <p className="text-lg text-white max-w-3xl mb-6" data-aos="fade-up">
            Dedicated professionals, innovative thinkers, and experienced leaders committed to delivering excellence.
          </p>
        </div>
      </div>

      {/* Featured CEO Section */}
      <div className="py-16 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <div
          className="relative w-full md:w-1/2 flex justify-center"
          data-aos="fade-right"
        >
          <div className="w-64 h-64 bg-white rounded-full overflow-hidden shadow-lg">
            <img
              src="../assets/images/ceo.png"
              alt="CEO"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center md:text-left"><span className='text-customTeal'>CEO - </span>Habimana Emmanuel</h2>
          <p className="text-gray-700 leading-relaxed text-lg text-center md:text-left">
          HEMMA produces and sells tree seedlings for agroforestry and forestry. It also sells fruit tree seedlings. It
          provides trainings and technical support to farmers especially women it is a Rwandan-based company focused
          on land restoration and sustainable agriculture. It enhance soil fertility, and promote sustainable agricultural
          practices. The company seeks to improve environmental health while providing economic benefits to local
          communities.
          </p>
        </div>
      </div>

      {/* Team Categories Section */}
      <div className="py-16 max-w-7xl mx-auto px-6 lg:px-8">
  <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" data-aos="fade-up">
    <span className='text-customTeal'>Team </span>Categories
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: (
          <>
            <span className="text-customTeal">Dedicated</span> Professionals
          </>
        ),
        description: (
          <>
          <span className="text-gray-800">
          'A team of highly trained specialists in customer service, sales, technical support, and data analysis.',

          </span>
          </>
        )
      },
      {
        title: (
          <>
            <span className="text-customTeal">Innovative</span> Thinkers
          </>
        ),
        description: (
          <>
          
          <span className="text-gray-800">
          'Problem-solvers who leverage AI-powered tools, a cloud-based network, and analytics to deliver exceptional results.',

          </span></>
        )
      },
      {
        title: (
          <>
            <span className="text-customTeal">Experienced</span> Leaders
          </>
        ),
        description: (
          <>
          <span className='text-gray-800'>
          'We foster a culture of teamwork and growth, ensuring our employees have the tools and support to excel.',

          </span>
          </>
        )
      },
    ].map((category, index) => (
      <div
        key={index}
        className="bg-gradient-to-b from-green-200 to-white rounded-lg shadow-lg p-8 flex flex-col items-center text-center transform transition-transform hover:scale-105 cursor-pointer"
        data-aos="fade-up"
      >
        <h3 className="text-2xl font-bold mb-4">
          {category.title}
        </h3>
        <p className="text-gray-200">{category.description}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default TeamPage;
