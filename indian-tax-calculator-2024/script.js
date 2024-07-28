function addComma() {
  const inputField = document.getElementById("numbermask");
  const formattedValue = formatNumber(inputField.value);
  inputField.value = formattedValue;
}

function formatNumber(value) {
  // Remove any non-numeric characters except for the decimal point
  value = value.replace(/[^0-9.]/g, "");

  // Split the value on the decimal point
  const parts = value.split(".");

  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Rejoin the integer and decimal parts
  return parts.join(".");
}

function parseNumber(value) {
  // Remove commas from the number string
  return parseFloat(value.replace(/,/g, ""));
}

function calculateTax() {
  const inputField = document.getElementById("numbermask");

  oldStandardDeduction = 50000;
  newStandardDeduction = 75000;
  // deducting standard deduction according to old regime
  let income = parseNumber(inputField.value) - oldStandardDeduction;
  const tbody = document.querySelector(".tbody");

  let taxOldRegime = 0;
  let taxNewRegime = 0;
  let highestOldRate = 0;
  let highestNewRate = 0;

  // Old Regime Tax Calculation
  if (income > 500000) {
    if (income > 1000000) {
      taxOldRegime += (income - 1000000) * 0.3;
      highestOldRate = 30;
      income = 1000000;
    }
    if (income > 500000) {
      taxOldRegime += (income - 500000) * 0.2;
      highestOldRate = Math.max(highestOldRate, 20);
      income = 500000;
    }
    if (income > 250000) {
      taxOldRegime += (income - 250000) * 0.05;
      highestOldRate = Math.max(highestOldRate, 5);
    }
  }

  // Reset income for new regime calculation
  income = parseNumber(inputField.value) - newStandardDeduction;

  // New Regime Tax Calculation
  if (income > 700000){
    if (income > 1500000) {
      taxNewRegime += (income - 1500000) * 0.3;
      highestNewRate = 30;
      income = 1500000;
    }
    if (income > 1250000) {
      taxNewRegime += (income - 1250000) * 0.2;
      highestNewRate = Math.max(highestNewRate, 20);
      income = 1250000;
    }
    if (income > 1000000) {
      taxNewRegime += (income - 1000000) * 0.15;
      highestNewRate = Math.max(highestNewRate, 15);
      income = 1000000;
    }
    if (income > 750000) {
      taxNewRegime += (income - 750000) * 0.1;
      highestNewRate = Math.max(highestNewRate, 10);
      income = 750000;
    }
    if (income > 300000) {
      taxNewRegime += (income - 300000) * 0.05;
      highestNewRate = Math.max(highestNewRate, 5);
    }
  }


  taxNewRegime = taxNewRegime <= 0 ? 0 : taxNewRegime;
  taxOldRegime = taxOldRegime <= 0 ? 0 : taxOldRegime;
  

  // Clear the table body
  tbody.innerHTML = "";

  // Populate the table with the calculated tax
  const tr = document.createElement("tr");
  tr.innerHTML = `
        <td>${inputField.value}</td>
        <td>${highestOldRate}%</td>
        <td>${highestNewRate}%</td>
        <td>Rs. ${taxNewRegime.toFixed(2)}</td>
        <td>Rs. ${taxOldRegime.toFixed(2)}</td>
    `;
  tbody.appendChild(tr);
}
