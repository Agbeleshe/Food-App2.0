export const HeadLineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-14 grid md:grid-cols-3 sm:grid-cols-2 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold px-2 pt-4 text-2xl">Very Delicious</p>
          <p className="p-2">Local Delicacies</p>
          <button
            className="border-white bg-white text-black m-2 hover:bg-black hover:text-white hover:border-black hover:transition-all duration-500 ease-in-out
           absolute bottom-0"
          >
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1327486591/photo/okra-soup-with-fufu-or-pounded-yam.jpg?s=612x612&w=0&k=20&c=PpafSlYJ2wTizb5VBPo93pYd4s4ziXc9lFb1N90gYdA="
          alt=" Egushi soup"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white">
          <p className="font-bold px-2 pt-4 text-2xl">We offer Catering</p>
          <p className="p-2">Services to</p>
          <button
            className="border-white bg-white text-black m-2 hover:bg-black hover:text-white hover:border-black hover:transition-all duration-500 ease-in-out
           absolute bottom-0"
          >
            Order Now!
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/937891150/photo/fish-curry-with-rice.jpg?s=612x612&w=0&k=20&c=TtE6eHiPM1H1ISR2GmMticHKI9sXV4eYBb2CgVmmrU0="
          alt=" Egushi soup"
        />
      </div>
      {/* card */}
      <div className="rounded-xl relative grid sm:col-span-2 md:col-span-1">
        {/* overlay */}
        <div className="absolute h-full w-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold px-2 pt-4 text-2xl">Unsure of what to eat?</p>
          <p className="p-2">Try this</p>
          <button
            className="border-white bg-white text-black m-2 hover:bg-black hover:text-white hover:border-black hover:transition-all duration-500 ease-in-out
           absolute bottom-0 "
          >
            Order Now!
          </button>
        </div>
        <img
          className=" max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://media.istockphoto.com/id/1062263330/photo/roasted-chicken.jpg?s=612x612&w=0&k=20&c=M4r-OviSyipqsg8yChtnj_a-hqn8jKcKvpDDPTds-Z4="
          alt=" Egushi soup"
        />
      </div>
    </div>
  )
}