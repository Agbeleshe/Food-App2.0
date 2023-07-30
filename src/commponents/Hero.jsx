export const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 pt-16">
      <div className="max-h-[500px] relative">
        {/* OverLay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/50 flex flex-col justify-center ">
          <h1 className="px-4 text-2xl sm:text-6xl md:text-7xl xl:text-6xl font-bold">
          <span className="text-red-400">Delicious</span> satisfaction
          </h1>
          <h1 className="px-4 text-2xl sm:text-5xl md:text-7xl xl:text-6xl font-bold">
            <span className="text-red-400">Any Where</span> You Are
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://media.istockphoto.com/id/1398349790/photo/served-amala-with-assorted-meat.jpg?s=612x612&w=0&k=20&c=JJEtkch5lEEljIGMnqOXvUJAQ27CZosA69g5ja8Tj1Y="
          alt="food"
        />
      </div>
    </div>
  )
}
