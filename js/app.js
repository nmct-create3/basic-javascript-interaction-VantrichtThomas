document.addEventListener( 'DOMContentLoaded', function() {
    handleFloatingLabel();
    handlePasswordSwitcher();
    handleQualityRange();
    handleDropdownButton()
});

function handleFloatingLabel() {
  let nameInput = document.querySelectorAll('.js-name-input');
  let labels = document.querySelectorAll('.js-floating-label');

  for (let i = 0; i < nameInput.length; i++) {
    nameInput[i].addEventListener('blur', handleInputBlur);
  }
}

function handleInputBlur(e) {
  // Indien de input niet meer leeg is, dan voegen we de class 'is-floating' toe
  if (e.target.value != '') {
    e.target.classList.add('is-floating');
  }
  // Anders zullen we deze class (proberen te) verwijderen.
  else {
    e.target.classList.remove('is-floating');
  }
}

function handlePasswordSwitcher() {
  let passInput = document.querySelectorAll('.js-password-toggle-checkbox');
  let passToggle = document.querySelectorAll('.c-password-toggle__symbol');

  for (let i = 0; i < passInput.length; i++) {
    passInput[i].addEventListener('click', togglePassword);
  }
}

function togglePassword() {
    // var passwordInput = e.target.parentNode.parentNode.firstChild;
    // console.log(passwordInput);
    let passwordInput = document.querySelector(".js-password-input");
    let showPassword = document.querySelector(".c-password-toggle__checkbox").checked;
    // toggle eye images
    let eyes = document.querySelectorAll(".c-password-toggle__symbol");
    for (let i = 0; i < eyes.length; i++) {
      eyes[i].classList.toggle("c-password-toggle__symbol--show");
      eyes[i].classList.toggle("c-password-toggle__symbol--hide");
    }

    if (showPassword === true) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function handleQualityRange() {
  // de input zelf, de holder en de value
  let sliderInput = document.querySelectorAll(".js-quality-input");

  for (let i = 0; i < sliderInput.length; i++) {
    sliderInput[i].addEventListener('input', sliderChange);
  }
}

function sliderChange(e) {
  // Aanpassen inhoud van de value aan met de value van de slider en voeren we een translateX uit op de holder.
  let holder = document.querySelector(".js-range-holder");
  let rangeSlider = document.querySelector(".js-quality-input");
  holder.dataset.value = e.target.value;
  let x = rangeSlider.offsetWidth/rangeSlider.max * holder.dataset.value;
  holder.style.marginLeft = x-8 +"px";

  // holder.setAttribute("style", "-ms-transform: translateX(" + x +"px);transform: translateX("+ x +"px);-webkit-transform: translateX("+ x +"px); scale(1)");
  // holder.dataset.value + "
}


function handleDropdownButton() {
  // de input zelf, de holder en de value
  let dropdowns = document.querySelectorAll(".c-dropdown__input");

  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', dropdownClicked);
  }
}

function dropdownClicked(e) {
  e.preventDefault();

  e.target.classList.toggle("js-dropdown-input");
}
