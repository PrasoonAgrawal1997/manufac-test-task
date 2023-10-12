import React, { useEffect, useState } from "react";
import { data } from "../dummyData";
import { calculateMeanMedianMode } from "../utils/helpers";
import TableToDisplay from "../components/tableToDisplay";

const FlavanoidsData = (props) => {
  const { numberOfClasses } = props;
  const [arrToCalculate, setArrToCalculate] = useState([]);
  const [tableData, setTableData] = useState([]);

  // it is the useEffect used to calculate all the flavanoids value of particular class, and store it in an array
  // after that push each array into an array, Ex:- [[1, 2, 3, 4], [5, 2, 8, 6], [7, 4, 9, 1]];
  useEffect(() => {
    let finalArr = [];
    numberOfClasses?.map((cls) => {
      let arr = [];
      data?.map((val) => {
        if (val?.Alcohol === cls) {
          arr.push(val?.Flavanoids);
        }
      });
      finalArr.push(arr);
    });
    setArrToCalculate(finalArr);
  }, [numberOfClasses]);

  // it is the useEffect, used to find mean, median, mode of every class flavanoids, and store it in an array
  // after that we push that arrays into final array, Ex:- [[mean1, mean2, mean3], [median1, median2, median3], [mode1, mode2, mode3]];
  useEffect(() => {
    let mean = ["Flavanoids Mean"],
      median = ["Flavanoids Median"],
      mode = ["Flavanoids Mode"];
    arrToCalculate.map((entry) => {
      const allValuesArr = calculateMeanMedianMode(entry);
      mean.push(allValuesArr[0]);
      median.push(allValuesArr[1]);
      mode.push(allValuesArr[2]);
    });
    setTableData([mean, median, mode]);
  }, [arrToCalculate]);

  return (
    <div>
      <div className="header-text">Flavanoids Data</div>
      <TableToDisplay numberOfClasses={numberOfClasses} tableData={tableData} />
    </div>
  );
};

export default FlavanoidsData;
