"use strict";

const submissionBtn = document.getElementById("submission-btn");
const smallestNumberElement = document.getElementById("smallest-number");
const largestNumberElement = document.getElementById("largest-number");
const averageNumberElement = document.getElementById("average-number");

const myNumbers = [35, 130, 354, 100, 25, 134, 99, 200, 35];


// Function to find the smallest number
const findSmallestNumber = arr => Math.min(...arr);

// Function to find the largest number
const findLargestNumber = arr => Math.max(...arr);

// Function to find the average
const findAverage = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

// Event listener to render results on button click
submissionBtn.addEventListener("click", () => {
    smallestNumberElement.textContent = findSmallestNumber(myNumbers);
    largestNumberElement.textContent = findLargestNumber(myNumbers);
    averageNumberElement.textContent = findAverage(myNumbers);
});

