import React from 'react';

const PossibleSolutions = () => {
  const solutions = [
    {
      title: "Tree Nurseries",
      description:
        "Set up local nurseries to provide seedlings, engaging communities in the production and care of trees, while educating them about the benefits of afforestation.",
      image: "../assets/images/nursery.jpg", // Replace with your image path
    },
    {
      title: "Organic Matter Enhancement",
      description:
        "Encourage the use of compost, green manures, and crop residues to increase soil organic matter, improving nutrient availability and soil structure.",
      image: "../assets/images/organic-matter.jpeg", // Replace with your image path
    },
    {
      title: "Crop Rotation and Diversification",
      description:
        "Implement crop rotation and intercropping to maintain soil fertility, reduce pest pressure, and enhance resilience against climate variability.",
      image: "../assets/images/crop-rotation.jpeg", // Replace with your image path
    },
    {
      title: "Cooperative Models",
      description:
        "Create farmer cooperatives to share resources, knowledge, and organic inputs, facilitating the transition to organic farming and ensuring collective bargaining power.",
      image: "../assets/images/coperative.jpeg", // Replace with your image path
    },
    {
      title: "Water Management",
      description:
        "Implement rainwater harvesting and sustainable irrigation practices to improve water availability and reduce soil erosion.",
      image: "../assets/images/water.jpeg", // Replace with your image path
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-16">
      {/* Solutions Grid (First Row with 3 Cards) */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 mt-12">
        {solutions.slice(0, 3).map((solution, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-green-200 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center h-full"
          >
            <div className="md:w-1/2 mb-6 md:mb-0">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-6 flex flex-col justify-between text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {solution.title.split(' ')[0]}{" "}
                <span className="text-teal-500">{solution.title.split(' ')[1]}</span>
              </h2>
              <p className="text-gray-700 mb-4">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Centered and Gradient Background Cards (Second Row) */}
      <div className="grid gap-12 mt-12 md:grid-cols-2 justify-items-center">
        {solutions.slice(3, 5).map((solution, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-green-200 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex flex-col items-center h-full"
          >
            <div className="mb-6">
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-48 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex flex-col justify-between text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {solution.title.split(' ')[0]}{" "}
                <span className="text-teal-500">{solution.title.split(' ')[1]}</span>
              </h2>
              <p className="text-gray-700 mb-4">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PossibleSolutions;
