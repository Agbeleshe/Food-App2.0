import { Food } from "./Food";
import backdrop from "../assert/background/bg.png";


const Display = ({ selectedItem}) => {
  const handleScrollToTop = () => {
    // Scroll back to the top of the page when the button is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4">
        <div
          className="hero min-h-screen md:bg-contain bg-right-top bg-no-repeat"
          style={{ backgroundImage: `url(${backdrop})` }}
        >
          <div className="hero-content">
            <div className="text-center">
              <h1 className="text-5xl font-bold">
                Hello, Welcome to {selectedItem.name}!!
              </h1>
              <p className="py-6 max-w-xl">
                This web app lets you connect to services from various kitchens.
                We have collaborated with {selectedItem.name} to give you the
                best user experience and satisfaction you need.
              </p>

              {/* Update the button to scroll back to the top */}
              <button onClick={handleScrollToTop}>Back to Home Page</button>
            </div>
          </div>
        </div>
        <div>
          <Food selectedItem={selectedItem}/>
        </div>
      </div>
    </div>
  );
};

export default Display;
