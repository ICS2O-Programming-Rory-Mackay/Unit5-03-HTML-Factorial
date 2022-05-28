// Copyright 2022 Rory Mackay All rights reserved
//
// Created by: Rory Mackay
// Created on: May 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates the factorial of the user input
 */
function displaySentence () {

	//declare variables
	let counter = 1
	let factorial = 1

	//get user input
	let userInt = parseInt(document.getElementById('userInt').value)
	
	// use a do while loop to calculate the factorial of the number
  do {
    factorial = factorial * counter
    counter = counter + 1
  } while (counter <= userInt)

	//Display results
	document.getElementById('message').innerHTML = "The factorial of " + userInt + " is " + factorial + "."
}