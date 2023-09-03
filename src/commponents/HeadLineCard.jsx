import { useState } from "react";
import { kitchens } from "../data/ketchens.js";
import Display from "./Display.jsx";
import backdrop from "../assert/background/bg2.png";

export const HeadLineCard = () => {
  // State to keep track of the selected kitchen item
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle when a kitchen card is clicked
  const handleSelected = (item) => {
    // Update the selectedItem state with the clicked kitchen item's details
    setSelectedItem(item);

    console.log("clicked");
    // Scroll down to the Display component when a card is clicked
    window.scrollTo({
      top: document.getElementById("display").offsetTop,
      behavior: "smooth",
    });
  };

  // Function to handle when a kitchen item inside the card is clicked
  const handleItemClick = (item) => {
    // Update the selectedItem state with the clicked kitchen item's details
    setSelectedItem(item);
  };

  // JSX code to display the HeadLineCard component UI
  return (
    <div id="destination" className="mt-10">
      <div
        className="bg-contain bg-top bg-abso bg-no-repeat bg-red-200"
        style={{ backgroundImage: `url(${backdrop})` }}
      >
        <h2 className="text-2xl md:text-4xl font-extrabold p-2 mt-3 bg-gray-200 bg-opacity-50 text-center underline underline-offset-4 unde">
          Our Kitchens
        </h2>
        <div
          className="border-black max-w-[1640px] mx-auto p-4 py-14 grid md:grid-cols-3 sm:grid-cols-2 gap-6  bg-contain bg-top bg-abso "
          style={{ backgroundImage: `url(${backdrop})` }}
        >
          {/* Render kitchen cards */}
          {kitchens.map((item, id) => (
            <div key={id} className="rounded-xl relative">
              <div
                onClick={() => {
                  // Call both handleSelected and handleItemClick functions on card click
                  handleSelected(item);
                  handleItemClick(item);
                }}
                className="absolute h-full w-full bg-black/50 rounded-xl text-white"
              >
                <p className="font-bold px-2 pt-3 text-2xl sm:text-3xl md:text-4xl">
                  {item.name}
                </p>
                <p className="p-2 text-xl sm:text-1xl md:text-2xl">
                  Delicacies
                </p>
                <button className="border-white bg-white text-black m-2 hover:bg-black hover:text-white hover:border-black hover:transition-all duration-500 ease-in-out absolute bottom-0">
                  View Now!
                </button>
              </div>
              <img
                className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
                src={item.image}
                alt={item.name}
              />
            </div>
          ))}
        </div>
      </div>
      {/* Add an anchor point for scrolling */}
      <div id="display"></div>
      {/* Render the Display component and pass selectedItem as a prop */}
      {selectedItem && <Display selectedItem={selectedItem} />}
    </div>
  );
};
