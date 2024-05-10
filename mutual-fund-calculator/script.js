function totalInvestment() {
  var sip = document.getElementById("mon-inves").value;
  var time = document.getElementById("time-period").value;
  var total = sip * time * 12;
  document.getElementById("total-investment").innerText = total;
  return total;
}

function totalReturns() {
  let sip = document.getElementById("mon-inves").value;
  let timeInMonths = document.getElementById("time-period").value * 12;
  let rate = document.getElementById("interest").value / 12 / 100;

  let futureValue = 0

  for (let i = 0; i < timeInMonths; i++) {
    futureValue += sip * Math.pow(1 + rate, timeInMonths - i);
  }

  document.getElementById("total-returns").innerText = futureValue.toFixed(2);
  return futureValue;
}

function estimatedReturns() {
  var total = totalReturns();
  var original = totalInvestment();
  console.log(total);
  console.log(original);
  document.getElementById("estimated-returns").innerText = (total - original).toFixed(2);
}

function calculateAllVal() {
  totalInvestment();
  totalReturns();
  estimatedReturns();
}

calculateAllVal()
