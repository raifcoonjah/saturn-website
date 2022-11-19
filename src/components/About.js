import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="bg-gradient-to-r via-gray-900 from-gray-700  to-black container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-bold title-font sm:text-4xl text-3xl mb-4  text-white">
            Saturn startpage
          </h1>
          <p className="mb-8 leading-relaxed">
            Free & Open source startpage for your browser.
          </p>
          <div className="flex justify-center">
            <a
              href="https://github.com/raifcoonjah/saturn-startpage/releases"
              className="py-2.5 px-5 mr-4 mb-4 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Get for Firefox
            </a>
            <a
              href="https://demo.saturn-startpage.netlify.app"
              target="_blank"
              className="py-2.5 px-5 mr-4 mb-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Try demo
            </a>
            <a
              href="https://github.com/raifcoonjah/saturn-startpage/releases"
              className="py-2.5 px-5 mr-4 mb-4 text-white font-medium text-gray-300"
            >
              Other versions?
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
          <img
            className="object-cover object-center rounded-md"
            alt="screenshot"
            src="./screenshot.png"
          />
        </div>
      </div>
    </section>
  );
}
