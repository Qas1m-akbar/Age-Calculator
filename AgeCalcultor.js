let userInput = document.getElementById("date");

// this line will the calender upto date means the present date 
userInput.max = new Date().toISOString().split("T")[0];

function ageCalculate() {
    // setting birthdate with new date(anydate user give )
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  // setting today current date 
  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();


  // create variables that will store the birtthdate and today variables
  let d3, m3, y3;
  // subtract todaydate from birthdate years
  y3 = y2 - y1;

  // check condition for month if todaydate is grater or equal to birthdate then the todaydate will be subtract from the bithdate and store in varaible m3
  
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
      y3--;  // if not then year will be decrease by 1 and 12 month wil be added to todaysdate and subtracr from birthdate
      m3 = 12 + m2 - m1;
  }
  
  
  
  if (d2 >= d1) {
                   // check condition for day if todaydate is grater or equal to birthdate then the todaydate will be subtract from the bithdate and store in varaible d3
    d3 = d2 - d1;
  } else {
    m3--;         // create function for getDaysInMonth(y1,m1) add with todaydate and subtract from birthdate  
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  // This line of code used for to display the text inside <p></p> with the help of (innerHTML) property
  // Note: we can also do the same with console but it will be display only in inspect console----> console.log(y3,m3,d3);

  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
  
}

// function where the days will be in years and month 
function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
