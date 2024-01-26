import { useState } from "react";
import BgChanger from "./Components/BgChanger/BgChanger";
import PasswordGenrator from "./Components/PasswordGenrator/PasswordGetrator"

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
    <BgChanger/>
    <PasswordGenrator />
      {/* <Card userName="Dilip" />
      <Testimonial userName="Stark" />
      <Store /> */}
    </>
  );
}

export default App;
