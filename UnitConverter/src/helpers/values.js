const values = {
  LENGTH: {
    kms: 0.001,
    miles: 0.000621371,
    ms: 1,
    cms: 100,
    milims: 1000,
    micrometres: 1e+6,
    nanometres: 1e+9,
    yards: 1.09361,
    feets: 3.28084,
    inches: 39.3701,
    nauticalmiles: 0.000539957,
  },
  WEIGHT: {
    kgs: 1,
    pound: 2.20462,
    tonnes: 0.001,
    grams: 1000,
    mgms: 1000000,
    micrograms: 1000000000,
    imperialtons: 0.000984207,
    ustons: 0.00110231,
    stones: 0.157473,
    ounces: 35.274,
  },
};

export const getGroups = () => {
  let groups = [];
  for (let key in values) {
    if (values[key]) {
      groups.push(key);
    }
  }
  return groups;
};

export const getKeys = (group) => {
  const keys = values[group];
  let keysArray = [];
  for (let key in keys) {
    if (keys[key]) {
      keysArray.push(key);
    }
  }
  return keysArray;
};

export default values;
