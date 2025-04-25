document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
   
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
   
    if (name && email && message) {
        alert('Thank you for your message!');
        // You can also send the form data to a server or an email service
    } else {
        alert('Please fill out all fields!');
    }
});