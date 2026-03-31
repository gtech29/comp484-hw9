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

  // return the date
  return postDiv;
};
generateDate();

// Part 2: Number Conversion Test
const numConversions = () => {
  const numContainer = document.getElementById("conversions");
  const titleConversions = document.createElement("h1");
  titleConversions.textContent = "Part 2: Number Conversion Tests";

  const postDiv = document.createElement("div");
  postDiv.classList.add("requirement-item");

  // First Variable
  const firstString = "37";
  const conv1 = Number(firstString);
  const p1 = document.createElement("p");
  p1.textContent = `Original value: "${firstString}" → Converted value: ${conv1}`;

  // Second Variable
  const secondString = "27.13";
  const conv2 = Number(secondString);
  const p2 = document.createElement("p");
  p2.textContent = `Original value: "${secondString}" → Converted value: ${conv2}`;

  // Third Variable
  const thirdString = "14";
  const conv3 = Number(thirdString);
  const p3 = document.createElement("p");
  p3.textContent = `Original value: "${thirdString}" → Converted value: ${conv3}`;

  // Fourth Variable
  const notAnumber = "I am not a number";
  const conv4 = Number(notAnumber);
  const p4 = document.createElement("p");
  p4.textContent = `Original value: "${notAnumber}" → Converted value: ${conv4}`;

  postDiv.appendChild(p1);
  postDiv.appendChild(p2);
  postDiv.appendChild(p3);
  postDiv.appendChild(p4);

  numContainer.appendChild(titleConversions);
  numContainer.appendChild(postDiv);
};
numConversions();
