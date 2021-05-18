window.onload = setTimeout(
    function() {
        alert('Добро пожаловать!');
}, 5000);

let btnAcReg = document.querySelector('.btn-account-registration');
let acReg = document.querySelector('.account-registration');
let label = document.querySelectorAll('.account-registration > label');
let btnAcLog = document.querySelector('.btn-account-login');
let acLog = document.querySelector('.account-login');

btnAcLog.addEventListener('click', () => {
    acLog.style.display === 'block' ? acLog.style.display = 'none' : acLog.style.display = 'block';
});


btnAcReg.addEventListener('click', () => {
    console.log('click');
    label.forEach(element => {
        element.style.marginBottom = '10px'; 
    });
    acReg.style.display === 'flex' ? 
    acReg.style.display = 'none'
   : acReg.style.display = 'flex';
});


let filmsGenre = document.querySelectorAll('.films-genre')
let ol =  document.querySelectorAll('ol');


let films = document.querySelector('.list-of-films');
// console.log(films);

films.addEventListener('click', function(event){
    let aa = event.target.firstElementChild;
    if(aa.tagName === "OL"  && aa.style.display == 'block'){  
        aa.style.display = 'none'
    } else{
        aa.style.display = 'block';
        aa.classList.toggle('active');
    } 
        console.log(aa);
});





