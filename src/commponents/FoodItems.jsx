import React, { useState } from 'react';
import Modal from './Modal'; // Import the Modal component

const FoodItems = ({ clickName, foods, price, handlePriceChange, handleClickName }) => {
  const [modalOpenIndex, setModalOpenIndex] = useState(null);

  // Modal opening function
  const openModal = (index) => {
    setModalOpenIndex(index);
  };

  // for closing the modal
  const closeModal = () => {
    setModalOpenIndex(null);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4">
      {/* Render the Modal component outside the loop */}
      <Modal
        isOpen={modalOpenIndex !== null}
        onClose={closeModal}
        clickName={clickName}
        price={price}
        handlePriceChange={handlePriceChange}
      />
      {modalOpenIndex !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50" onClick={closeModal} />
      )}

      {foods.map((items, index) => (
        <div
          key={index}
          onClick={() => openModal(index)} // Pass the index as an argument to openModal
          className="border shadow-lg hover:scale-105 duration-300"
        >
          <div onClick={() => handleClickName(items)}>
            <img
              src={items.image}
              alt={items.name}
              className="w-full h-[200px] object-cover rounded-xl"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{items.name}</p>
              <p>
                <span className="p-1 bg-orange-600 text-white rounded-full">
                  ${items.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodItems;
