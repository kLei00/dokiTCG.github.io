// Get references to the button and the result display element
        const rollButton = document.getElementById('roll-button');
        const diceResult = document.getElementById('dice-result');

        // Add a click event listener to the button
        rollButton.addEventListener('click', () => {
            // Generate a random number between 1 and 6 (inclusive)
            const roll = Math.floor(Math.random() * 6) + 1;

            // Update the text content of the dice result element
            diceResult.textContent = roll;
            
            // Optional: Add a subtle visual effect to show the roll
            diceResult.style.transform = 'scale(1.1)';
            setTimeout(() => {
                diceResult.style.transform = 'scale(1)';
            }, 200);
});