const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#bmiResult');

    if (isNaN(height) || isNaN(weight)) {
        result.innerHTML = 'Please enter valid numbers for height and weight.';
        return;
    }

    if (height <= 0 || weight <= 0) {
        result.innerHTML = 'Height and weight must be greater than zero.';
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    result.innerHTML = `Your BMI is ${bmi}`;
});
