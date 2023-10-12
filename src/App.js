import React, { useEffect, useState } from "react";
import "./App.css";
import FlavanoidsData from "./pages/flavanoidsData";
import GammaData from "./pages/gammaData";
import { getAllClasses } from "./utils/helpers";
import { data } from "./dummyData";

const App = () => {
  const [numberOfClasses, setNumberOfClasses] = useState([]);

  // this is the useEffect used to find all possible values for classes, and store it in numberOfClasses
  useEffect(() => {
    setNumberOfClasses(getAllClasses(data));
  }, []);

  return (
    <div>
      <FlavanoidsData numberOfClasses={numberOfClasses} />
      <GammaData numberOfClasses={numberOfClasses} />
    </div>
  );
};

export default App;
