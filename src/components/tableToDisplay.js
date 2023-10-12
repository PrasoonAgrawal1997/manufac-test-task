// this a common component used to display table dynamically
// it takes 2 props:- numberOfClasses, tableData
// numberOfClasses:- it is an array of all possible number of different class
// tableData:- it is an array of array, and each array contains data of row

import React from "react";
import "./tableToDisplay.css";

const TableToDisplay = (props) => {
  const { numberOfClasses, tableData } = props;

  return (
    <div>
      <table>
        <tr>
          <th>Measure</th>
          {numberOfClasses?.map((heading) => (
            <th>{`Class ${heading}`}</th>
          ))}
        </tr>
        {tableData?.map((item) => (
          <tr>
            {item.map((tableRowData, index) => (
              <td>
                {index === 0 ? tableRowData : Number(tableRowData).toFixed(3)}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableToDisplay;
