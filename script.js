// Variables
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const numberSelection = document.getElementById('number-selection');

const submit = document.getElementById('submit');
const card1 = document.getElementById('rating-state')
const card2 = document.getElementById('thank-you-state')

const rate_number = []



// Event Listeners

one.addEventListener('click', () => {
    rate_number.push(one.textContent);
    numberSelection.innerText = `You selected ${rate_number} out of 5`
});

two.addEventListener('click', () => {
    rate_number.push(two.textContent);
    numberSelection.innerText = `You selected ${rate_number} out of 5`
});

three.addEventListener('click', () => {
    rate_number.push(three.textContent);
    numberSelection.innerText = `You selected ${rate_number} out of 5`
});


four.addEventListener('click', () => {
    rate_number.push(four.textContent);
    numberSelection.innerText = `You selected ${rate_number} out of 5`
});

five.addEventListener('click', () => {
    rate_number.push(five.textContent);
    numberSelection.innerText = `You selected ${rate_number} out of 5`
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    card1.style.display = 'none';
    card2.style.display = 'block';
});

