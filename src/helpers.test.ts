import {getYearsWithData} from './helpers';

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date('2022-01-01').getTime());
});

it('should return array of years with data', () => {
  const years = getYearsWithData();

  expect(years).toEqual([
    2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
    2020, 2021, 2022,
  ]);
});
