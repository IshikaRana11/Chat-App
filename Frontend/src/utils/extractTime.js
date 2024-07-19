export function extractTime(dataString) {
  const data = new Date(dataString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getminutes());
  return `${hours}:${minutes}`;
}

//helper function to pad single -digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}
