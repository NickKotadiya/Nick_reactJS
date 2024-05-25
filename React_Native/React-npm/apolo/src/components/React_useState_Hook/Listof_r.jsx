import React, { useState } from "react";

const Listof_r = () => {
  let str = "Choose You Recepi";

  const [Count, setCount] = useState(str);

  function Item1() {
    return (
      <ol className="text-pink-500 text-left font-mono text-3xl capitalize">
        <li>
          1.Boil the <span className="text-yellow-500">noodles</span> in salted
          water.
        </li>
        <li>2.Finely chop the chilies, bell pepper, carrots and beans.</li>
        <li>
          3.Heat oil in a pan and put all the{" "}
          <span className="text-yellow-500">Veggies</span>
        </li>
        <li>
          4.Drain the excess water from the noodles and add them to the pan
        </li>
        <li>
          5.Fry them with the rest of the veggies and add the{" "}
          <span className="text-yellow-500">Masala</span>
        </li>
      </ol>
    );
  }

  const Maggi = () => {
    setCount(Item1);
  };

  function Item2() {
    return (
      <ol className="text-green-500 text-left font-mono text-3xl flex justify-center items-center">
        <li>
          1.Set Aside a Bowl With Ice. Prepare an ice bath in a large bowl and
          set a clean bowl over it
        </li>
        <li>
          2.Mix and Simmer ,<span className="text-yellow-500">Milk</span> Cream,
          Sugar, and Vanilla
        </li>
        <li>
          3.Beat the<span className="text-yellow-500">&nbsp; Eggs</span>
        </li>
        <li>4.Add Milk Mixture</li>
        <li>5.Thicken the Custard</li>
        <li>6.Move It to the </li>
        <span className="text-yellow-500">Ice-Cream Maker</span>
        <li>
          7.Transfer and <span className="text-sky-500">Frezze</span>.
        </li>
      </ol>
    );
  }

  const Ice_Cream = () => {
    setCount(Item2);
  };

  const Reset = () => {
    setCount("Select your recipe");
  };

  return (
    <>
      <div className="mt-20">
        <span>
          <p className="text-center text-4xl text- font-mono mt-10 p-2 bg-green-300">
            UseStack Recipe
          </p>
        </span>
        <h1 className="font-bold mt-20 flex items-center justify-center text-4xl">
          {Count}
        </h1>
        <div className="flex justify-center gap-4 mt-10 mb-10">
          <button
            className="px-4 py-2 rounded-md border-2 border-black border-solid text-2xl text- font-mono hover:bg-yellow-500 transition-all ease-linear duration-200"
            onClick={Maggi}
          >
            Maggi
          </button>
          <button
            className="px-4 py-2 rounded-md bg-white text-2xl border-solid font-mono border-2 border-black hover:bg-[#A67B5B] transition-all ease-linear duration-200"
            onClick={Ice_Cream}
          >
            Ice-Cream
          </button>
          <button
            className="px-4 py-2 rounded-md text-2xl border-2 border-black border-solid text- font-mono hover:bg-red-500 transition-all ease-linear duration-200"
            onClick={Reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Listof_r;