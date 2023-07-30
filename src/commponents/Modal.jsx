import React from 'react';



const Modal = ({ isOpen, onClose, clickName, price, handlePriceChange }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <dialog open={isOpen} className="modal"> {/* Set the open attribute based on isOpen */}
      <form className="modal-box md:rounded-none max-w-[400px] ">
        {/* close modal */}
        <button type="button" onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg mt-2 md:text-center">
          Hello! {clickName.resturant} is glad to take your order
        </h3>
        <p className="py-4">
          You selected <strong>{clickName.name}</strong> from our menu,
          and it will cost you <strong>${clickName.price}</strong> per
          order.
        </p>
        <input
          type="text"
          required
          placeholder="Full name"
          className="mb-1 input input-bordered input-info w-full"
        />
        <input
          required
          type="text"
          placeholder="House Address"
          className="mb-1 input input-bordered input-info w-full"
        />
        <input
          required
          type="number"
          placeholder="Phone number"
          className="mb-1 input input-bordered input-info w-full"
        />
        <input
          required
          value={price}
          onChange={handlePriceChange}
          type="number"
          placeholder="Number of Orders"
          className="mb-1 input input-bordered input-info w-full"
        />

        <p className="bg-pink-500 rounded-sm text-white p-1 text-center">
          Your new total is ${clickName.price * price}
        </p>
        <button className="btn bg-orange-500 hover:bg-orange-700 text-white w-full mt-2">
          submit
        </button>
      </form>
    </dialog>
  );
};

export default Modal;
