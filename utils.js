function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

module.exports = {
  generateRandomNumber,
  celciusToFarenheit,
};
