import React, { useState } from 'react'
import { data } from '../data/data.js'

export const Food = () => {
  console.log()

  const [foods, setFoods] = useState(data)

  //   Filter Type
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category
      })
    )
  }
  // filter Price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        if (price === 10) {
          return item.price <= 10
        } else if (price === 20) {
          return item.price <= 20
        } else if (price === 21) {
          return item.price >= 21
        }
        return true // Default case
      })
    )
  }

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top rated menu items
      </h1>
      {/* filter row */}
      <div className="flex flex-col xl:flex-row  justify-between">
        {/* filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button
              onClick={() => filterType('Rice')}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              Rice
            </button>
            <button
              onClick={() => filterType('Local Nigerian Dishes')}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              Local Nigerian Dishes
            </button>
            <button
              onClick={() => filterType('Breakfast')}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              Breakfast
            </button>
            <button
              onClick={() => filterType('FastFood')}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              FastFood
            </button>
            <button
              onClick={() => setFoods(data)}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              All
            </button>
          </div>
        </div>
        {/* filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[590px] w-full">
            <button
              onClick={() => filterPrice(10)}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              $0 - $10
            </button>
            <button
              onClick={() => filterPrice(20)}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
                $20 and below
            </button>
            <button
              onClick={() => filterPrice(21)}
              className="border-orange-600 bg-orange-600 m-1 text-white hover:bg-white duration-300 hover:text-orange-600"
            >
              $21 and above
            </button>
          </div>
        </div>
      </div>
      {/* Display Image */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
        {foods.map((items, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300"
          >
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
        ))}
      </div>
    </div>
  )
}
