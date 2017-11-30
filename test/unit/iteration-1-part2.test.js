import DistrictRepository from '../../src/helper.js';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

describe('DistrictRepository iteration 1 - part 2', () =>  {
  const district = new DistrictRepository(kinderData);

  test('findAllMatches defaults to returning all data in an object', () => {
    expect(Object.keys(district.findAllMatches()).length).toBe(181);
  });

  test('findAllMatches returns matches in an object, case insensitive', () => {
    expect(Object.keys(district.findAllMatches('ColoRado')).length).toBe(2);
  });

  test('findAllMatches finds no matches and returns an empty object when given arguments that dont exist within the data', () => {
    expect(Object.keys(district.findAllMatches('al;dkfjas;dlkjasdfl;')).length).toBe(0);
    expect(Object.keys(district.findAllMatches('packers')).length).toBe(0);
    expect(Object.keys(district.findAllMatches('df')).length).toBe(0);
  });

});
