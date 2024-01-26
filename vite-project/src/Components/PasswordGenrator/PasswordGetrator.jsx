import React, { useCallback, useEffect, useRef, useState } from "react";

const gentratorApp = () => {
  const passwordRef = useRef(null)

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGetrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGFIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`!@#$%^&*()_+*;";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassToClipborad = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    PasswordGetrator();
  }, [length, numberAllowed, charAllowed, PasswordGetrator]);

  return (
    <div className="bg-slate-900 flex flex-col w-full h-screen text-white">
      <h1 className="text-3xl text-center py-10">Password Genrator</h1>
      <div className="w-full max-w-md mx-auto bg-black bg-opacity-50  rounded-md text-gray-200 px-2 py-4 shadow-purple-700 shadow-xl">
        <div className="flex justify-center">
          <input
            className="px-4 w-9/12 py-1 text-slate-800 rounded-l-full outline-none"
            placeholder="Password"
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button onClick={copyPassToClipborad} className="bg-purple-700 text-white px-4 py-1 rounded-r-full ">
            Copy
          </button>
        </div>
        <div className="flex p-2 justify-center items-center px-2">
          <div className="flex align-middle">
            <input
              type="range"
              value={length}
              name=""
              min={6}
              max={100}
              className="cursor-pointer"
              id=""
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="mx-2" htmlFor="">
              Length: {length}
            </label>
          </div>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            name=""
            id=""
          />
          <label className="mx-2" htmlFor="">
            Number
          </label>
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label className="mx-2" htmlFor="">
            Character
          </label>
        </div>
      </div>
    </div>
  );
};

export default gentratorApp;
