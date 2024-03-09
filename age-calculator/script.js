const dob = document.getElementById('dob');

const result = document.getElementById('result');

function calculateAge() {
  const dobValue = dob.value;
  if (!dobValue) {
    alert('Please select a date');
    return;
  }
  const dobDate = new Date(dobValue);
  const today = new Date();
  const age = today.getFullYear() - dobDate.getFullYear();
  result.innerHTML = `<h2>${age}</h2>`;
  console.log(age);
}
