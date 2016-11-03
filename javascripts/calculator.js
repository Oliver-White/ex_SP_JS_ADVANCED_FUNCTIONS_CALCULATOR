"use strict";

var add = document.getElementById("add");
var multiply = document.getElementById("multiply");
var subtract = document.getElementById("subtract");
var divide = document.getElementById("divide");
var output = document.getElementById("output");

var number_one = 'null';
var number_two = 'null';

document.getElementById("number_one").addEventListener("keyup", function(){
  number_one = parseInt(document.getElementById("number_one").value);
});

document.getElementById("number_two").addEventListener("keyup", function(){
  number_two = parseInt(document.getElementById("number_two").value);
});

function sum(a, b){
  return a + b;
}

function product(a, b){
  return a * b;
}

function difference(a, b){
  return a - b;
}

function quotient(a, b){
  return a / b;
}

function check_input(){
  if(number_one === 'null' || number_two === 'null'){
    alert("Please enter numbers.");
  }
}

function calculator(a, b, reference){
  return reference(a, b);
}

document.addEventListener("keyup", function(){
  if(event.which === 13){
    event.preventDefault();
    alert("Please click an option.");
  }
});

add.addEventListener("click", function(event){
  check_input();
  output.innerHTML = calculator(number_one, number_two, sum);
});

multiply.addEventListener("click", function(event){
  check_input();
  output.innerHTML = calculator(number_one, number_two, product);
});

subtract.addEventListener("click", function(event){
  check_input();
  output.innerHTML = calculator(number_one, number_two, difference);
});

divide.addEventListener("click", function(event){
  check_input();
  output.innerHTML = calculator(number_one, number_two, quotient);
});
