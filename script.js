const input = document.querySelector('input');
const btn = document.querySelector('#icon-arrow');
const form = document.querySelector('form');

function validation(userInput) {
  userInput = input.value;
  console.log(userInput);
  if (!userInput.includes('@') || !userInput.includes('.com')) {
    console.log('not includes @');
    let msg = document.createElement('span');
    msg.innerHTML = `
        please provide a valid Email
        `;
    msg.className = 'error';
    form.appendChild(msg);

    let errorLogo = document.createElement('img');
    errorLogo.src = 'images/icon-error.svg';
    errorLogo.className = 'error-logo';
    form.appendChild(errorLogo);
    return;
  }
  if (userInput.includes('@') && userInput.includes('.com')) {
    console.log('correct');
    document.querySelector(".error").className = 'hide';
    document.querySelector(".error-logo").className = 'hide';
  }
}

btn.addEventListener('click', validation);
