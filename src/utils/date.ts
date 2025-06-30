export function calculateYears(from = new Date(1992, 7, 26)) {
  const diffMs = Date.now() - from.getTime();
  const date = new Date(diffMs); // miliseconds from epoch
  return [Math.abs(date.getUTCFullYear() - 1970), Math.abs(date.getMonth())];
}
