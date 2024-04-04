// 1 задание

function checkingLenght(string, maxLenght) {
  string = string.replaceAll(' ', '');
  console.log (string.length <= maxLenght);
}
checkingLenght('f f f f f', 5);
checkingLenght('про вер яемая строка', 18);
checkingLenght('пров еря емая строка', 10);

// 2 задание

function checkPalindrome (palindrome) {
  palindrome = palindrome.replaceAll(' ', '');
  const normalizedText = palindrome.toUpperCase();
  let comparsionString = '';

  for (let i = normalizedText.length - 1; i >= 0; i--) {
    comparsionString += normalizedText.at(i);
  }
  console.log(comparsionString === normalizedText);
}
checkPalindrome ('dovod');
checkPalindrome ('disfojdfos');

// 3 задание

function getIntegers (string) {
  string = string.toString();
  let emptyString = '';
  string = string.replaceAll(' ', '');
  for (let i = 0; i <= string.length; i++) {
    if (string.at(i) > 0 && string.at(i) <= 9) {
      emptyString += string.at(i);
    } else {
      emptyString += '';
    }
  }
  console.log(parseInt(emptyString, 10));
}
getIntegers(1.5);
getIntegers('d1sif23pj4afpsjf5');

function timeInMinutes (time) {
  const timeArray = time.split(':');
  const minutes = timeArray[0] * 60 + +timeArray[1];
  return minutes;
}

function caluculatingTime (dayStart, dayEnd, meetingStart, meetingDuration) {

  const dayStartMinutes = timeInMinutes (dayStart);
  const dayEndMinutes = timeInMinutes(dayEnd);
  const meetingStartMinutes = timeInMinutes(meetingStart);

  const restOfDay = dayEndMinutes - meetingStartMinutes;
  if ((restOfDay >= meetingDuration) && (dayStartMinutes <= meetingStartMinutes) && (dayEndMinutes >= meetingStartMinutes)) {
    console.log(true);
  } else {
    console.log(false);
  }
}

const result = caluculatingTime('8:00', '17:30', '08:00', 900);
console.log(result);
