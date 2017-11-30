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
          this.rounder(object.Data) || 0;
      }

      return cleanData;
    }, {});
  }

  rounder(number) {
    return Math.round(number * 1000) / 1000;
  }

  findByName(input = '') {
    return this.data[input.toUpperCase()];
  }

  findAllMatches(string = '') {
    const keys = Object.keys(this.data);

    return keys.reduce((filteredDistricts, district) => {
      if (district.includes(string.toUpperCase())) {
        filteredDistricts[district] = this.data[district];
      }

      return filteredDistricts;
    }, {});
  }

  findAverage(district) {
    let data = this.data[district].data;
    let numberOfYears = Object.keys(data).length;
    let average = Object.keys(data).reduce( (average, year) => {
      return average + data[year];
    }, 0);

    return this.rounder(average / numberOfYears)
  }

  compareDistrictAverages(district1, district2) {
    let d1 = district1.toUpperCase();
    let d2 = district2.toUpperCase();

    let average1 = this.findAverage(d1);
    let average2 = this.findAverage(d2);
    let comparedAverage = average1 < average2 ? average1 / average2 : average2 / average1;

    return {
      [d1]: average1,
      [d2]: average2,
      'compared': this.rounder(comparedAverage)
    }
  }
}
