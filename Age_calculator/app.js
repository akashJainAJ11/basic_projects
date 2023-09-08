const dobinput = document.getElementById('dob');
const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');

calculateBtn.addEventListener("click", function(){

    const dob = new Date(dobinput.value);
    const ageInMs = Date.now()-dob.getTime();
    const ageDate = new Date(ageInMs);
    const age = Math.abs(ageDate.getUTCFullYear()-1970);

    let result = document.getElementById('result');
    result.textContent = `Your age is ${age} years`;
})