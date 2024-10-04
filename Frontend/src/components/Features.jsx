import React from "react";
import FeatureCard from "./FeatureCard";

function Functions() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container space-y-12 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 text-sm">
              Question Bank Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-gray-100 sm:text-5xl">
              Elevate Your Learning Experience
            </h2>
            <p className="max-w-[900px] text-gray-700 dark:text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Unlock the power of our comprehensive question bank, designed to propel your academic journey to new
              heights.
            </p>
          </div>
        </div>
        <FeatureCard />
      </div>
    </section>
  );
}

export default Functions;
