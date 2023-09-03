import React, { useState, useEffect } from "react";
import { data } from "../data/ketchens.js";
import FoodItems from "./FoodItems.jsx";
import { AiOutlineSearch } from "react-icons/ai";

export const Food = ({ selectedItem}) => {
  // State to keep track of the clicked food item (name, price, etc.)
  const [clickName, setClickName] = useState("");
  // State to store the filtered food items based on the selected category
  const [foods, setFoods] = useState(data);
  // State to store the price of the selected food item
  const [price, setPrice] = useState("");
  // State to keep track of the selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState("All kitchen Menu");
  // State to control the visibility of the paragraph (side effect)
  const [showParagraph, setShowParagraph] = useState(false);
  


  // Function to handle button click for "Show All Kitchen Menu's"
  const handleButtonClick = () => {
    // Call the filterType function with "All kitchen Menu" to reset the filters
    filterType("All kitchen Menu");
    // Show the paragraph indicating that all kitchens are displayed
    setShowParagraph(true);
  };

  // Side effect using useEffect to handle the timeout for hiding the paragraph
  useEffect(() => {
    if (showParagraph) {
      // Set a timeout to hide the paragraph after 7 seconds
      const timeoutId = setTimeout(() => {
        setShowParagraph(false);
      }, 7000);

      // Cleanup function to clear the timeout when the component unmounts or the state changes
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [showParagraph]);

  // Function to handle when a food item is clicked
  const handleClickName = (items) => {
    // Update the clickName state with the clicked food item's details
    setClickName(items);
    console.log("clicked name: " + items.name);
  };

  // Function to handle price change in the input field
  const handlePriceChange = (event) => {
    // Update the price state with the entered value
    setPrice(event.target.value);
  };

  // Function to filter the food items based on the selected category
  const filterType = (category) => {
    if (category === "All kitchen Menu") {
      // If "All kitchen menu" is selected, show all kitchens
      setSelectedCategory("All kitchen Menu");
      setFoods(data);
    } else {
      // Filter the data array to show items of the selected category from the selected restaurant
      setFoods(
        data.filter(
          (item) =>
            item.category === category && item.resturant === selectedItem.name
        )
      );
      setSelectedCategory(category);
    }
  };

  // JSX code to display the Food component UI
  return (
    <div className="max-w-[1640px] m-auto px-4 py-4 md:py-12">
      <h1 className="text-orange-600 font-bold text-xl md:text-4xl text-center">
        Top rated menu items at {selectedItem.name}
      </h1>
      {/* Search food */}
      <div className="flex bg-slate-300 p-1 max-w-[540px] w-auto rounded-full my-5 m-auto ">
        <input
          className="focus:outline-none px-1 w-full bg-transparent"
          type="text"
          placeholder="Search foods"
        />
        <AiOutlineSearch size={25} />
      </div>
      {/* Filter and result display */}
      <div className="mt-2 flex flex-col md:flex-row justify-between">
        {/* Filter by type */}
        <div>
          <p className="font-bold text-gray-700 text-l md:text-xl">
            Select your kind of meal
          </p>
          <div className="flex md:flex-row flex-col justify-between flex-wrap text-[10px] md:text-[13px]">
            {/* Filter buttons for different categories */}
            <button
              onClick={() => filterType("Rice")}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              Rice
            </button>
            <button
              onClick={() => filterType("Local Nigerian Dishes")}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              Local Nigerian Dishes
            </button>
            <button
              onClick={() => filterType("Breakfast")}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              Breakfast
            </button>
            <button
              onClick={() => filterType("FastFood")}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              FastFood
            </button>
            {/* Paragraph to be displayed */}
            {showParagraph && (
              <p className="bg-red-100 p-1 font-semibold text-center rounded-sm mt-3 md:absolute md:mt-14 md:text-center md:right-72">
                This button displays food from all of our kitchens and not only{" "}
                {selectedItem.name}.
              </p>
            )}
            {/* Button to trigger the paragraph display */}
            <button
              onClick={handleButtonClick}
              className="border-orange-800 bg-orange-800 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              Show All Kitchen Menu's
            </button>
          </div>
        </div>
        {/* Filter by price */}
        <div>
          <p className="font-bold text-gray-700 text-l md:text-xl mt-4 text-center">
            We found {foods.length} results for {selectedCategory}
          </p>
        </div>
      </div>
      {/* Display food items */}
      {foods.length === 0 ? (
        // Show the message when there are no matching items
        <div>
          <p className="p-2 text-xl w-full text-center">
            Sorry, {selectedItem.name} doesn't have food under this category.
            Please select the <strong>All kitchen's menu</strong> to find
            everything on the menu.
          </p>
        </div>
      ) : (
        // Render the FoodItems component to display the filtered food items
        <FoodItems
          clickName={clickName}
          price={price}
          handlePriceChange={handlePriceChange}
          handleClickName={handleClickName}
          foods={foods}
        />
      )}
    </div>
  );
};
