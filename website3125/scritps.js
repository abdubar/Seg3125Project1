document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Check if a service is selected
            const selectedService = document.querySelector('input[name="service"]:checked');
            if (!selectedService) {
                alert('Please select a service before confirming your appointment.');
                return;
            }

            // Redirect to the confirmation page
            window.location.href = 'confirmation.html';
        });
    }
});
