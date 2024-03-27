document
  .getElementById("calculateButton")
  .addEventListener("click", function () {
    const number1 = document.getElementById("inputNumber1").value;
    const number2 = document.getElementById("inputNumber2").value;
    const number3 = document.getElementById("inputNumber3").value;

    const worker1 = new Worker("worker.js");
    const worker2 = new Worker("worker.js");
    const worker3 = new Worker("worker.js");

    worker1.onmessage = function (event) {
      document.getElementById("result1").textContent =
        "Fibonacci of " + number1 + " is: " + event.data;
      document.getElementById("result1").style.backgroundColor = "lightgreen";
    };

    worker2.onmessage = function (event) {
      document.getElementById("result2").textContent =
        "Fibonacci of " + number2 + " is: " + event.data;
      document.getElementById("result2").style.backgroundColor = "lightblue";
    };

    worker3.onmessage = function (event) {
      document.getElementById("result3").textContent =
        "Fibonacci of " + number3 + " is: " + event.data;
      document.getElementById("result3").style.backgroundColor = "lightyellow";
    };

    worker1.postMessage(number1);
    worker2.postMessage(number2);
    worker3.postMessage(number3);
  });
