export default class DistrictRepository {
  constructor(data) {
    this.data = this.cleanData(data);
  }

  cleanData(data) {
    return data.reduce((cleanData, object) => {
      const district = object.Location.toUpperCase();
      const year = object.TimeFrame;

      if (!cleanData[district]) {
        cleanData[district] = {
          location: district,
          data: {}
        };
      }

      if (!cleanData[district].data[year]) {
        cleanData[district].data[year] =
          Math.round(object.Data * 1000) / 1000 || 0;
      }

      return cleanData;
    }, {});
}

  findByName(input = '') {
    return this.data[input.toUpperCase()];
  }

  findAllMatches(string = '') {
    const keys = Object.keys(this.data);

    return keys.reduce((filteredDistricts, district) => {
      if (district.includes(string.toUpperCase())) {
        filteredDistricts.push(this.data[district]);
      }

      return filteredDistricts;
    }, []);
  }
}
