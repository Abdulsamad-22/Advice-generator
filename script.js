const adviceText = document.querySelector('.advice');
const adviceId = document.querySelector('.advice-id');
const button = document.querySelector('.play');


async function fetchAdvice() {
    try {
        // Fetch advice data from API
       const response = await fetch('https://api.adviceslip.com/advice?t=${new Date().getTime()}');

       const data = await response.json();

       // Display advice and corresponding id in DOM
       const {advice, id} = data.slip;
        adviceId.textContent = `ADVICE #${id}`;
        adviceText.textContent = `"${advice}"`;

    } catch (error) {
        adviceText.textContent = 'Failed to fetch advice, Please try again.';
        console.error('Error fetching advice:', error.message);
    }
    /*

    // Practicing promises
    fetch('https://api.adviceslip.com/advice').then( (response) => {
        const reponse = response.json();
        return reponse
    }).then( (data) => {
        const {advice, id} = data.slip;

        adviceId.textContent = `ADVICE #${id}`;
        adviceText.textContent = `"${advice}"`;
    });
    */
}
    
button.addEventListener('click', () => {
    fetchAdvice();
});
