import React from "react";

export default function About() {
  return (
    <div
      id="body"
      className="flex items-center justify-center bg-gradient-to-tr from-background to-secondary"
    >
      <div className="w-9/12 flex h-screen items-center justify-center relative">
        <div className="text-text flex flex-col gap-6">
          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl w-1/4">
            About
          </h1>
          <p className="text-xs sm:text-sm med:text-md lg:text-3xl">
            Feed Me Flavor is an engaging food recipe website that leverages
            Spoonacular's API to bring a rich variety of culinary options to its
            users. Featuring an intuitive interface, the site offers a range of
            categories such as drinks, grilled dishes, fruits, and spicy foods,
            each represented by eye-catching icons and buttons. Users can
            explore recipes categorized under different types, with each
            category page displaying a grid of recipes complete with images and
            titles. The site’s use of modern technologies, including React and
            Tailwind CSS, ensures a responsive and visually appealing
            experience. Whether you’re looking for a refreshing drink, a hearty
            grilled meal, or something to satisfy your spicy cravings, Feed Me
            Flavor delivers delicious options with ease.
          </p>
        </div>
      </div>
    </div>
  );
}
