import { useState } from "react";
import Card from "./Components/Card";
import Testimonial from "./Components/Testimonial";
import Store from "./Components/Store";
import BgChanger from "./Components/BgChanger";
import PasswordGetrator from "./Components/PasswordGetrator";

function App() {
  const [value, setValue] = useState(0);

  const handleAddValue = () => {
    // value = value + 1;
    setValue((preValue) => preValue + 1);
    setValue((preValue) => preValue + 1);
    setValue((preValue) => preValue + 1);
    setValue((preValue) => preValue + 1);
    //using call back function in set state to redeem previous value and excute bunch of all 4 value 
  };

  const handleRemoveValue = () => {
    // value = value - 1;
    setValue(value - 1);
  };

  return (
    <>
      <div className="bg-slate-800 flex justify-center text-white w-[full] h-[100vh]">
        <div className="my-auto">
          <h1 className="font-bold text-3xl">Interview Preparation</h1>
          <h2 className="flex justify-center my-2 text-2xl font-bold">Counter : {value}</h2>
          <div className="flex justify-center space-x-2">
          <button className="bg-red-600 text-white py-1 px-2" onClick={handleRemoveValue}>Decrease - </button>
          <button className="bg-green-600 text-white py-1 px-2" onClick={handleAddValue}>Increase + </button>
          </div>
        </div>
      </div>
      <BgChanger />
      <PasswordGetrator />
      {/* <Card userName="Dilip" />
      <Testimonial userName="Stark" />
      <Store /> */}
    </>
  );
}

export default App;
