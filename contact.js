// Select the form and response container
const form = document.getElementById('contact-form');
const responseContainer = document.getElementById('response-container');
const responseMessage = document.getElementById('response-message');

// Add an event listener to handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload

  // Get the values from the form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Display the user's response dynamically
  responseMessage.innerHTML = `
    <strong>Name:</strong> ${name} <br>
    <strong>Email:</strong> ${email} <br>
    <strong>Message:</strong> ${message}
  `;

  // Show the response container
  responseContainer.classList.remove('response-hidden');
  responseContainer.classList.add('response-visible');

  // Optional: Clear the form fields
  form.reset();
});
