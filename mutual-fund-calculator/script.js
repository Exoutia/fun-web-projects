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

  document.getElementById("total-returns").innerText = futureValue.toFixed(0);
  return futureValue.toFixed(0);
}

function estimatedReturns() {
  var total = totalReturns();
  var original = totalInvestment();
  console.log(total);
  console.log(original);
  document.getElementById("estimated-returns").innerText = (total - original).toFixed(0);
  return (total - original)
}

function drawMutualFundPieChart(mutualFundData) {
  const canvas = document.getElementById("pie");
  const ctx = canvas.getContext('2d');
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY);

  // Calculate angles for amount invested and amount gained
  const totalValue = mutualFundData.amountInvested + mutualFundData.amountGained;
  const amountInvestedAngle = (mutualFundData.amountInvested / totalValue) * (2 * Math.PI);
  const amountGainedAngle = (mutualFundData.amountGained / totalValue) * (2 * Math.PI);

  // Draw slices for amount invested and amount gained
  drawSlice(ctx, centerX, centerY, radius, 0, amountInvestedAngle, 'Amount Invested', '#45efef');
  drawSlice(ctx, centerX, centerY, radius, amountInvestedAngle, amountInvestedAngle + amountGainedAngle, 'Amount Gained', '#434389');
}

// Function to draw a pie slice
function drawSlice(ctx, centerX, centerY, radius, startAngle, endAngle, label, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(centerX, centerY);
  ctx.arc(centerX, centerY, radius, startAngle, endAngle);
  ctx.closePath();
  ctx.fill();

  // Draw legend text
  ctx.fillStyle = 'black';
  const legendX = centerX + (radius + 20) * Math.cos((startAngle + endAngle) / 2);
  const legendY = centerY + (radius + 20) * Math.sin((startAngle + endAngle) / 2);
  // ctx.fillText(label, legendX, legendY);
}

function calculateAllVal() {
  let original = totalInvestment();
  totalReturns();
  let profit = estimatedReturns();

  const mutualFundData = {
    amountInvested: original,
    amountGained: profit
  }
  drawMutualFundPieChart(mutualFundData);
}

calculateAllVal()

const caluculateBtn = document.getElementById("calculateVals");
caluculateBtn.addEventListener("click", calculateAllVal);
