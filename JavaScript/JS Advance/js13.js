const site = "https://cat-fact.herokuapp.com/facts";
let heading = document.querySelector("#heading");
let btn = document.querySelector("#btn");

// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	    Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)

let getfact = async () => {
  // if arrow function start with async function than it become async function
  let fetchingFact = await fetch(site); // it get information from the website - This information is in json format which is not readable so we convert it into normal js object.
  console.log(fetchingFact);

  let facts = await fetchingFact.json(); // json method translate the json data to normal javascript object
  console.log(facts);

  let randomNum = Math.random() * 5; // this line returns no between 0 and 5 in float
  let num = Math.round(randomNum);
  console.log(num);
  heading.innerHTML = facts[num].text;
};

btn.addEventListener("click", getfact);
