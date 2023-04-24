import {categories} from '../data/data.js'

const Categories = () => {

    console.log(categories)
  return (
    <div className="bg-gray-500 text-white max-w-[1640px] px-4 py-12 m-auto rounded-xl text-bold">
      <h1 className='text-center text-4xl'>Top Categories</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((data, index) => (
          <div className='flex justify-between hover:bg-gray-200 hover:duration-300 hover:text-black hover:rounded-xl active:bg-red-300 p-3 text-bold' key={index}>
            <h2>{data.name}</h2>
            <div>{data.images}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Categories