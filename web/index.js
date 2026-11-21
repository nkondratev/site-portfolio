// Portfolio Interaction
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contact-btn');
    const contactMessage = document.getElementById('contact-message');

    if (contactBtn && contactMessage) {
        contactBtn.addEventListener('click', () => {
            contactMessage.classList.toggle('hidden');
            if (!contactMessage.classList.contains('hidden')) {
                contactBtn.textContent = 'Close Message';
            } else {
                contactBtn.textContent = 'Say Hello 👋';
            }
        });
    }

});
