const header = document.getElementById("header-container");
header.style.backgroundColor = '#2e8b57';

const emergencia = document.getElementsByClassName('emergency-tasks')[0];
emergencia.style.backgroundColor = '#cd5c5c';

const linha1 = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < linha1.length; index +=1 ) {
    linha1[index].style.backgroundColor = 'purple';
}


const naoEmergencia = document.getElementsByClassName('no-emergency-tasks')[0];
naoEmergencia.style.backgroundColor = '#fbec5d';


const linha2 = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < linha2.length; index +=1 ) {
    linha2[index].style.backgroundColor = 'black';
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = '#132c0d';