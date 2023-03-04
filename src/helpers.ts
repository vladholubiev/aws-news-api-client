const FIRST_YEAR_OF_DATA = 2004;

function getCurrentYear() {
  return new Date().getFullYear();
}

export function getYearsWithData(): number[] {
  const years = [];

  for (let year = FIRST_YEAR_OF_DATA; year <= getCurrentYear(); year++) {
    years.push(year);
  }

  return years;
}
