
//QUOTE GENERATOR

//This is simple javascript project for my gitHub


document.getElementById('new-quote').addEventListener('click', generateQuote);

function generateQuote() {
    const quotes = [
        "Life is what happens when you're busy making other plans. – John Lennon",
        "The way to get started is to quit talking and begin doing. – Walt Disney",
        "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
        // Add more quotes here
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}

// Generate a quote when the page loads
generateQuote();
