const generateDate = () => {
  // get the container for the date
  const dateContainer = document.getElementById("date");
  // create a div that will hold the date
  const postDiv = document.createElement("div");
  // get the div element with id=date and add the date style class to it
  postDiv.classList.add("date-style");

  // Create Date object
  const date = new Date();

  // get the date components  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // format the date according to requirements
  var formattedDay = day < 10 ? "0" + day : day;
  var formattedMonth = month < 10 ? "0" + month : month;

  // post the result to the div
  postDiv.innerHTML = `<p>Today is ${formattedMonth}/${formattedDay}/${year}</p>`;
  dateContainer.appendChild(postDiv);

  // return the date
  return postDiv

};
generateDate();