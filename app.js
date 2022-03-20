/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The", "A group of", "Some"];
  let subject = ["bus driver", "sharks", "penguins", "doctor", "cats"];
  let action = [
    "ate my",
    "pooped my",
    "erased my",
    "changed my",
    "squeezed my"
  ];
  let possession = [
    "homework",
    "bow and arrow",
    "shiny shoes",
    "truck",
    "flying saucer"
  ];
  let where = [
    "behind the casino!",
    "under the dirty hamper!",
    "out of an airplane!",
    "riding a jetski!",
    "on top of the mountain!"
  ];

  let proInd = Math.floor(Math.random() * pronoun.length);
  let subInd = Math.floor(Math.random() * subject.length);
  let actInd = Math.floor(Math.random() * action.length);
  let possInd = Math.floor(Math.random() * possession.length);
  let whereInd = Math.floor(Math.random() * where.length);

  return (
    pronoun[proInd] +
    " " +
    subject[subInd] +
    " " +
    action[actInd] +
    " " +
    possession[possInd] +
    " " +
    where[whereInd]
  );
};
