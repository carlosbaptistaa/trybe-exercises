let buttonSubmit = document.getElementById('btn-submit');

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  let fullname = document.getElementById('full-name120').value;
  alert(`Obrigado ${fullname}, vamos avaliar com carinho seu currículo.`);
})