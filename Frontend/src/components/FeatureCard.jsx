import React from "react";

function FeatureCard() {
  const data = [
    {
      title: "Thousands of Practice Questions",
      description:
        "Dive into a vast collection of practice questions, covering a wide range of topics and difficulty levels.",
      iconPath:
        "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
    },
    {
      title: "Detailed Explanations",
      description:
        "Understand the reasoning behind each answer with our comprehensive explanations, helping you master the concepts.",
      iconPath:
        "M8 2h8v2H8z M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2 M12 11h4 M12 16h4 M8 11h.01 M8 16h.01",
    },
    {
      title: "Personalized Learning Path",
      description:
        "Tailor your learning experience with our personalized recommendations, ensuring you focus on the areas that need the most attention.",
      iconPath:
        "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z M12 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
    },
    {
      title: "Progress Tracking",
      description:
        "Monitor your progress and identify areas for improvement with our comprehensive tracking tools.",
      iconPath: "M12 20v-10 M18 20v-16 M6 20v-4",
    },
    {
      title: "Mobile App",
      description:
        "Study on-the-go with our intuitive mobile app, allowing you to access your practice questions and track your progress anytime, anywhere.",
      iconPath:
        "M5 2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M12 18h.01",
    },
    {
      title: "Accelerate Your Learning",
      description:
        "Enhance your study efficiency and boost your exam performance with our targeted practice tools.",
      iconPath:
        "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0 M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
    },
  ];

  return (
    <>
      <div className="mx-auto grid max-w-6xl items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-6xl lg:grid-cols-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 bg-zinc-800 text-gray-50 p-5"
          >
            <div>
              <div className="group-hover:scale-110 w-full h-60 bg-blue-400 duration-500 flex justify-center items">
                 {" "}
                <div>
                  <img
                    src="Dictionary-pana.svg"
                    className="h-32 w-auto"
                    alt="Program-img"
                  />
                </div>
              </div>
              <div className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12 ">
                <div className="absolute -z-10 left-0 w-64 h-36 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-black"></div>
                <div className="flex items-center gap-3 mb-2 p-2">
                  <div className="rounded-full bg-blue-500 p-2 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d={item.iconPath}></path>
                    </svg>
                  </div>
                  <h3 className="text-sm font-bold text-gray-100">
                    {item.title}
                  </h3>
                </div>
                <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeatureCard;
