// Get the form element
const form = document.getElementById('feedbackForm');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Display a thank-you message using an alert
    alert("Thank you for the feedback!");

    // Optionally clear the form fields
    form.reset();
});