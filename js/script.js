// Copyright 2022 Rory Mackay All rights reserved
//
// Created by: Rory Mackay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function displays the user input for a sentence as many times as is inputed
 */
function displaySentence () {

	//declare variables
	let counter = 1
	let calculation = 1

	//get user input
	let userInt = parseInt(document.getElementById('userInt').value)
	
	// use a do while loop to calculate the factorial of the number
  do {
    calculation = calculation * counter
    counter = counter + 1
  } while (counter <= userInt)

	//Display results
	document.getElementById('display-results').innerHTML = "The factorial of the number " + userInt + " is " + calculation + "."
}