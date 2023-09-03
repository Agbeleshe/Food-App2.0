import backdrop from "../assert/background/bg.png";

const Welcome = () => {
  return (
    <div>
      <div
        className="hero min-h-screen md:bg-contain bg-right-top bg-no-repeat"
        style={{ backgroundImage: `url(${backdrop})` }}
      >
        <div className="hero-content">
          <div className="text-center">
            <h1 className="text-5xl font-bold ">
              Hello, Welcome to Kitchen Connect!!
            </h1>
            <p className="py-6 max-w-xl">
              This web app lets you connect to services from various kitchens.
              We have collaborated with various resturant to give you the best
              user experience and satisfaction you need.
            </p>

            {/* Update the button to scroll back to the top */}
            {/* <button onClick={handleScrollToTop}>Back to Home Page</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
