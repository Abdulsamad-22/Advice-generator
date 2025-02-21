/*
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

xhr.open('GET', 'https://api.adviceslip.com/advice');

xhr.send();

*/

const adviceText = document.querySelector('.advice');
const adviceId = document.querySelector('.advice-id');
const button = document.querySelector('.play');


function fetchAdvice() {

    fetch('https://api.adviceslip.com/advice').then( (response) => {
        const reponse = response.json();
        return reponse
    }).then( (data) => {
        const {advice, id} = data.slip;

        adviceId.textContent = `ADVICE #${id}`;
        adviceText.textContent = `"${advice}"`;
    });
}

button.addEventListener('click', fetchAdvice);

fetchAdvice();

/*
async function adviceFetch() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice', {
            cache: 'no-cache'
        });

        // Await the JSON response
        const data = await response.json();

        const advice = data.slip.advice;
        const adviceId = data.slip.id;

        document.querySelector('.id').textContent = `${adviceId}`;

        document.querySelector('.advice').textContent = `"${advice}"`;

        console.log(advice);
        console.log(`Advice ID: ${adviceId}`);
    } catch (error) {
        console.error('Error fetching advice:', error.message);
    }
}



console.log(document.querySelector('.play'));

// Ensure script runs after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.play').addEventListener('click', adviceFetch);
    adviceFetch(); // Fetch advice on page load
});

*/