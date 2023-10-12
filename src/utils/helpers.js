// this is the function, used to get all the different classes
export const getAllClasses = (data) => {
  const uniqueAlcohols = [];
  data.map((entry) => {
    if (!uniqueAlcohols.includes(entry?.Alcohol)) {
      uniqueAlcohols.push(entry?.Alcohol);
    }
  });
  return uniqueAlcohols;
};

// this is the function, which takes array of values as an argument, and returns a mean, median, mode of that data
export const calculateMeanMedianMode = (numbers) => {
  const meanCalculation = numbers.reduce((acc, num) => acc + Number(num), 0);
  const mean = meanCalculation / numbers.length;

  //________________________________________________________________
  const medianCalculation = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(medianCalculation.length / 2);
  let median;
  if (medianCalculation.length % 2 === 0) {
    median = (medianCalculation[middle - 1] + medianCalculation[middle]) / 2;
  } else {
    median = medianCalculation[middle];
  }

  //________________________________________________________________
  const modeCalculation = {};
  numbers.forEach((num) => {
    modeCalculation[num] = (modeCalculation[num] || 0) + 1;
  });

  let mode = null;
  let maxFrequency = 0;

  for (const num in modeCalculation) {
    if (modeCalculation[num] > maxFrequency) {
      mode = Number(num);
      maxFrequency = modeCalculation[num];
    }
  }
  return [mean, median, mode];
};
