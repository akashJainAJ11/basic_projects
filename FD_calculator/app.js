function calculateMaturityAmount(){

    // get inputs values from the elements
    const principle = parseFloat(document.getElementById('principle').value);
    const InterestRate = parseFloat(document.getElementById('InterestRate').value);
    const tenure = parseFloat(document.getElementById('tenure').value);

    const maturityAmount = principle + (principle*InterestRate*tenure)/100;

    document.getElementById('result').innerHTML = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

document.getElementById('CalculateBtn').addEventListener('click', calculateMaturityAmount);