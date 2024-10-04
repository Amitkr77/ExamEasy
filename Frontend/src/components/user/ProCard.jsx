import React from "react";

function ProCard() {
  const data = [
    {
      program: "MCA",
      img: "Dictionary-pana.svg",
      sub: ["Java", "Python", "DSA"],
      sub_desc: {
        Java: "Java is a high-level, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
        Python:
          "Python is a high-level, interpreted programming language known for its readability and ease of use.",
        DSA: "Data Structures and Algorithms are fundamental concepts in computer science that focus on the organization and manipulation of data.",
      },
    },
    {
      program: "MBA",
      img: "Dictionary-pana.svg",
      sub: ["Marketing", "Finance", "Operations"],
      sub_desc: {
        Marketing:
          "Marketing involves promoting and selling products or services, including market research and advertising.",
        Finance:
          "Finance deals with the management of money and investments, including budgeting, investing, and financial planning.",
        Operations:
          "Operations management focuses on the efficient production and delivery of products and services.",
      },
    },
    {
      program: "BBA",
      img: "Dictionary-pana.svg",
      sub: ["Management", "Accounting", "Economics"],
      sub_desc: {
        Management:
          "Management involves planning, organizing, and overseeing the activities of an organization or team.",
        Accounting:
          "Accounting is the process of recording, summarizing, and analyzing financial transactions to provide accurate financial information.",
        Economics:
          "Economics studies the production, distribution, and consumption of goods and services, and how economic agents interact within markets.",
      },
    },
    {
      program: "LLB",
      img: "Dictionary-pana.svg",
      sub: ["Contract Law", "Criminal Law", "Constitutional Law"],
      sub_desc: {
        "Contract Law":
          "Contract Law deals with the formation, enforcement, and breach of contracts.",
        "Criminal Law":
          "Criminal Law pertains to crimes and their punishments, including the prosecution and defense of criminal cases.",
        "Constitutional Law":
          "Constitutional Law focuses on the interpretation and implementation of a country's constitution.",
      },
    },
    {
      program: "BCA",
      img: "Dictionary-pana.svg",
      sub: ["Programming", "Database Management", "Networking"],
      sub_desc: {
        Programming:
          "Programming involves writing code to create software applications and systems.",
        "Database Management":
          "Database Management focuses on the organization, storage, and retrieval of data using database systems.",
        Networking:
          "Networking deals with the design, implementation, and management of computer networks.",
      },
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center p-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-96 h-[600px] m-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 bg-white dark:bg-gray-800"
        >
          <div className="bg-gray-100 dark:bg-gray-700 flex justify-center items-center p-4">
            <img src={item.img} className="h-24" alt={`${item.program} img`} />
          </div>
          <div className="p-4">
            <h1 className="text-center mb-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
              {item.program}
            </h1>
            <h3 className="mt-2 mb-2 text-lg font-medium text-gray-700 dark:text-gray-300">
              Subjects
            </h3>
            {item.sub.map((subject, idx) => (
              <div
                key={idx}
                className="border border-gray-300 dark:border-gray-600 rounded-md flex items-start p-2 mb-2 shadow-lg bg-white dark:bg-gray-700 transition-transform transform hover:scale-105"
              >
                <div className="bg-gray-200 dark:bg-gray-600 h-10 w-10 flex justify-center items-center rounded-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-500 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                  </svg>
                </div>
                <div className="ml-3 flex-1">
                  <h4 className="text-md font-medium text-gray-800 dark:text-gray-100">
                    {subject}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.sub_desc[subject]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProCard;
