let prism = document.querySelector(".rec-prism");

function showSignup() {
    prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin() {
    prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword() {
    prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe() {
    prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactUs() {
    prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}

function showThankYou() {
    prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}

const passwordInput = document.querySelector('input[name="password"]');
const passwordInput1 = document.querySelector('input[name="password2"]');
const passwordToggle = document.querySelector('.toggle-password');

// Get the password input fields and toggle buttons
const passwordInputs = document.querySelectorAll('input[type="password"]');
const passwordToggleButtons = document.querySelectorAll('.toggle-password');

// Add click event listeners to the toggle buttons
passwordToggleButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const passwordInput = passwordInputs[index];
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      button.innerHTML = '<i class="fa fa-eye"></i>';
    } else {
      passwordInput.type = 'password';
      button.innerHTML = '<i class="fa fa-eye-slash"></i>';
    }
  });
});


  
