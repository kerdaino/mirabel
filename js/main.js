function generateBirthdayWish() {
    const nameInput = document.getElementById("name");
    const birthdayWishResult = document.getElementById("birthdayWishResult");

    // Get the name from the input
    const name = nameInput.value;

    // Check if the entered name is correct
    if (isCorrectName(name)) {
        // Fetch random birthday wish from the local wishes.json file
        fetch('wishes.json')
            .then(response => response.json())
            .then(data => {
                // Choose a random wish from the fetched data
                const randomWish = data[Math.floor(Math.random() * data.length)];

                // Display the birthday wish result
                birthdayWishResult.innerHTML = `<p><strong>Birthday Wish for Mirabel Ojo (Keji):</strong> ${randomWish}</p>`;
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                birthdayWishResult.innerHTML = "<p>Failed to fetch birthday wishes. Please try again.</p>";
            });
    } else {
        // Display a hint or clue
        birthdayWishResult.innerHTML = "<p>Enter the name that is dear to the creator.</p>";
    }
}

function isCorrectName(inputName) {
    // Convert the input name to lowercase for case-insensitive comparison
    const lowercaseInput = inputName.toLowerCase();

    // Check if the lowercase input is "keji"
    return lowercaseInput === "keji";
}
