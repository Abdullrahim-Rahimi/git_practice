// Debugging line to check if the script is loaded
console.log("Script is loaded");

// Array of random messages
const messages = [
    'Hello!',
    'How are you?',
    'Have a great day!',
    'Keep up the good work!',
    'You got this!',
    'You are amazing!',
    'You are awesome!',
    'You are beautiful!',
    'You are loved!',
    'You are strong!',
    'You are unique!',
    'You are wonderful!',
    'You can do it!',
    'You rock!',
    'You will succeed!'
];

// Function to generate a random message
function generateRandomMessage() {
    console.log("Button was clicked"); // Debugging line to check if the function is called

    // Get a random index from the messages array
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Get the message at the random index
    const randomMessage = messages[randomIndex];

    // Display the random message
    console.log(randomMessage);

    // Update the message in the DOM
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = randomMessage;
}

// Add event listener to the button
document.getElementById('generate').addEventListener('click', generateRandomMessage);
