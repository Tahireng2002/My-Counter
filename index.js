let saveEl = document.getElementById("save-el")

let countEL = document.getElementById("count-el");
let count = 0

//console.log(saveEl)

function increment() {
  count += 1
  countEL.textContent = count
}

function save() {
  let saveStr =  count + " - "
  saveEl.textContent += saveStr

  console.log(count)

  //Reset the count
  count = 0
  countEL.textContent = count
}

 //console.log("The button was clicked");

 //function increment() {
  //console.log("The button was clicked");
 //}