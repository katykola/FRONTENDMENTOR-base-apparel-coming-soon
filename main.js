const emailInput = document.querySelector('.email-input');
const defaultPlaceholder = emailInput.getAttribute('placeholder'); // Value of default placeholder

// Zmizí placeholder, když kliknu na input a naopak

emailInput.addEventListener('click', function(){
    this.placeholder = '';
    emailInput.style.color = 'hsl(0, 6%, 24%)';
    emailInput.style.fontWeight = 600;
});

document.addEventListener('click', function(event) {
    // Check if the clicked element is not inside the email input
    if (!emailInput.contains(event.target)) {
        emailInput.placeholder = defaultPlaceholder; // Reset placeholder to default value
    }
});

// Zkontroluje správnost zadaného emailu

const emailButton = document.querySelector('.email-button');
const emailDiv = document.querySelector('.email-div');
const content = document.querySelector('.content');


emailButton.addEventListener('click', function(){
    
    function isValidEmail(email){
        const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        return regex.test(email); 
    }
    
    const emailValue = emailInput.value.trim(); // Trim the email value to remove leading and trailing spaces
    const errorDiv = document.querySelector('.email-invalid');
    const errorIcon = document.querySelector('.icon-invalid');

    if(!isValidEmail(emailValue)){ // pokud je vysledek false
        // Create and append error-related elements if they don't exist
        if(!errorDiv){
            const emailInvalid = document.createElement('div');
            emailInvalid.classList.add('email-invalid');
            emailInvalid.textContent = 'Please provide a valid email';
            content.appendChild(emailInvalid);
        }
        if(!errorIcon){
            const iconInvalid = document.createElement('img');
            iconInvalid.src = '/images/icon-error.svg';
            iconInvalid.classList.add('icon-invalid');
            emailInput.insertAdjacentElement('afterend', iconInvalid);
        }
        emailInput.classList.add('email-input-invalid'); // Add class for styling
    } else {
        // Remove error-related elements if the email is valid
        if (errorDiv) {
            errorDiv.remove();
        }
        if (errorIcon) {
            errorIcon.remove();
        }
        emailInput.classList.remove('email-input-invalid'); // Remove class for styling
    }
})

