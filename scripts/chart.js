// (function () {
// 	"use strict";

// 	// define variables
// 	var items = document.querySelectorAll(".timeline li");

// 	function isElementInViewport(el) {
// 		var rect = el.getBoundingClientRect();
// 		return (
// 			rect.top >= 0 &&
// 			rect.left >= 0 &&
// 			rect.bottom <=
// 				(window.innerHeight || document.documentElement.clientHeight) &&
// 			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
// 		);
// 	}

// 	function callbackFunc() {
// 		for (var i = 0; i < items.length; i++) {
// 			if (isElementInViewport(items[i])) {
// 				items[i].classList.add("in-view");
// 			}
// 		}
// 	}

// 	// listen for events
// 	window.addEventListener("load", callbackFunc);
// 	window.addEventListener("resize", callbackFunc);
// 	window.addEventListener("scroll", callbackFunc);
// })();

// setTimeout(function start() {
// 	console.log("what");
// 	let bars = document.getElementsByClassName("bar");
// 	console.log(bars.length);
// 	for (var i = 0; i < bars.length; i++) {
// 		let done = false;
// 		let data_percent = document
// 			.getElementsByClassName("bar")
// 			[i].getAttribute("data-percent");
// 		bars[i].style.width = data_percent; // .replace("%", "");
// 		bars[i].innerHTML += '<span class="count cf"></span>'; // .replace("%", "");
// 		let countElement = bars[i].getElementsByClassName("count");
// 		let countMax = parseInt(data_percent.replace("%", ""));
// 		let j = 0;
// 		let timer = setInterval(function () {
// 			if (countMax == j) {
// 				clearInterval(timer);
// 				j = 0;
// 			} else {
// 				countElement[0].innerHTML =
// 					'<span class="count cf">' + j++ + "%</span>"; // .replace("%", "");
// 			}
// 		}, 20);
// 	}
// }, 50);
