import { Food } from "./Food";



const Display = ({ selectedItem}) => {


  return (
    <div>
      <div className="max-w-[1640px] mx-auto p-4">
        <div>
          <Food selectedItem={selectedItem}/>
        </div>
      </div>
    </div>
  );
};

export default Display;
