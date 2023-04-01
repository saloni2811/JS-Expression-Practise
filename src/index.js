//Create a react app from scratch.
import React from "react";
import ReactDom from "react-dom";

const fname = "Saloni";
const lname = "Singh";
const currentDate = new Date();
const year = currentDate.getFullYear();

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
ReactDom.render(
<div>
  <p>Created by {fname +" " + lname}.</p>
  <p>Copyright {year}.</p>
</div>,
  document.getElementById("root"));
