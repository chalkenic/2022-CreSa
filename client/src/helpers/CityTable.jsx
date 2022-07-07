// Function appends commas into number to give easier clarity of viewing population count.
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
