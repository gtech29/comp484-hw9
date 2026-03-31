// Part 1: Date Display
const generateDate = () => {
  // get the container for the date
  const dateContainer = document.getElementById("date");

  // create h1 and p elements
  const title = document.createElement("h1");
  title.textContent = "Part 1: Date Display";
  const paragraph = document.createElement("p");

  // create a div that will hold the date and add the date style class to it
  const postDiv = document.createElement("div");
  postDiv.classList.add("requirement-item");

  // Create Date object and get the date components
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // format the date according to requirements
  var formattedDay = day < 10 ? "0" + day : day;
  var formattedMonth = month < 10 ? "0" + month : month;

  // post the result to the div
  paragraph.textContent = `Today is ${formattedMonth}/${formattedDay}/${year}`;
  postDiv.appendChild(title);
  postDiv.appendChild(paragraph);
  dateContainer.appendChild(postDiv);
};
generateDate();

// Part 2: Number Conversion Test
const numConversions = () => {
  // get container
  const numContainer = document.getElementById("conversions");
  // create h1 and p elements
  const titleConversions = document.createElement("h1");
  titleConversions.textContent = "Part 2: Number Conversion Tests";
  // create the div
  const postDiv = document.createElement("div");
  postDiv.classList.add("requirement-item");

  // First Variable
  const firstString = "37";
  const conv1 = Number(firstString);
  const convInt = Number.isInteger(conv1);
  const notAnum = Number.isNaN(conv1);
  const p1 = document.createElement("p");
  p1.textContent = `Original value: "${firstString}" → Converted value: ${conv1} → isNaN: ${notAnum}  → isInteger: ${convInt} `;

  // Second Variable
  const secondString = "27.13";
  const conv2 = Number(secondString);
  const convInt2 = Number.isInteger(conv2);
  const notAnum2 = Number.isNaN(conv2);
  const p2 = document.createElement("p");
  p2.textContent = `Original value: "${secondString}" → Converted value: ${conv2} → isNaN: ${notAnum2}  → isInteger: ${convInt2} `;

  // Third Variable
  const thirdString = "14";
  const conv3 = Number(thirdString);
  const convInt3 = Number.isInteger(conv3);
  const notAnum3 = Number.isNaN(conv3);
  const p3 = document.createElement("p");
  p3.textContent = `Original value: "${thirdString}" → Converted value: ${conv3} → isNaN: ${notAnum3}  → isInteger: ${convInt3} `;

  // Fourth Variable
  const notAnumber = "I am not a number";
  const conv4 = Number(notAnumber);
  const convInt4 = Number.isInteger(conv4);
  const notAnum4 = Number.isNaN(conv4);
  const p4 = document.createElement("p");
  p4.textContent = `Original value: "${notAnumber}" → Converted value: ${conv4} → isNaN: ${notAnum4}  → isInteger: ${convInt4}`;

  // append the results
  postDiv.appendChild(p1);
  postDiv.appendChild(p2);
  postDiv.appendChild(p3);
  postDiv.appendChild(p4);
  numContainer.appendChild(titleConversions);
  numContainer.appendChild(postDiv);

  return {
    firstCheck: notAnum,
    fourthCheck: notAnum4,
    firstString,
    notAnumber
  };
};

// Part 3: Number Formatting and Math Results
const numberFormatting = () => {
  // get container
  const mathContainer = document.getElementById("math-formatting");
  // create h1 and p elements
  const titleMath = document.createElement("h1");
  titleMath.textContent = "Part 3: Number Formatting and Math Results";

  // create the div
  const postDiv = document.createElement("div");
  postDiv.classList.add("requirement-item");

  // Perform Multiplication
  const premiumMembership = "26.99";
  // Format premiumMembership
  const formattedNum = Number.parseFloat(premiumMembership);
  // get yearly membership
  const yearlyMembership = formattedNum * 12;
  // post result
  const multiplication = document.createElement("p");
  multiplication.innerHTML = `Cost of Netflix Premium membership: $${premiumMembership}<br> Cost of Netflix Annual Membership: $${yearlyMembership}`;
  postDiv.appendChild(multiplication);

  // Perform Addition, Division and Formatting
  const appetizer = 8.99;
  const mainCourse = 15.99;
  const drink = 5.99;

  // add the total bill
  const totalBill = appetizer + mainCourse + drink;

  // we want to split the bill
  const splitBill = totalBill / 2;
  const formatBill = splitBill.toFixed(2);

  // post the results
  const addition = document.createElement("p");
  addition.innerHTML = `The total bill is $${totalBill}<br>If you split the bill in half the amount is: $${formatBill}`;
  postDiv.appendChild(addition);

  mathContainer.appendChild(titleMath);
  mathContainer.appendChild(postDiv);
};
numberFormatting();



// Part 4: Conditional Messages
const conditionalMessages = () => {
  // get container
  const conditionalContainer = document.getElementById("conditionals");
  // create h1 and p elements
  const titleConditionals = document.createElement("h1");
  titleConditionals.textContent = "Part 4: Conditional Messages";
  // create the div
  const postDiv = document.createElement("div");
  postDiv.classList.add("requirement-item");

  // post the title
  conditionalContainer.appendChild(titleConditionals);
  conditionalContainer.appendChild(postDiv);

  // Storing the packed results from Part 2
  // 
  const messageParagraph = document.createElement("p");
  const messageParagraph2 = document.createElement("p");

  // first conditional check
  if (conversionResults.firstCheck == false) {
    messageParagraph.textContent = `This value ${conversionResults.firstString} is a valid integer.`;
  } else {
    messageParagraph.textContent = `This ${conversionResults.firstString} value is not a valid number.`;
  }

  // second conditional check
  if (conversionResults.fourthCheck == true) {
    messageParagraph2.textContent = `This value " ${conversionResults.notAnumber} " is not a valid integer.`;
  } else {
    messageParagraph2.textContent = `This value " ${conversionResults.notAnumber} " is an integer.`;
  }
  postDiv.appendChild(messageParagraph);
  postDiv.appendChild(messageParagraph2);
};
const conversionResults = numConversions();
conditionalMessages(conversionResults);
