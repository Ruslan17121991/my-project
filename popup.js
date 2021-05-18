window.onload = setTimeout(
    function() {
        popupBg.style.display = 'block'
}, 8000);

let btnPopupOpen = document.querySelector('.review');
console.log(btnPopupOpen);

let popupBg = document.querySelector('.popup-bg');
console.log(popupBg);

let closePopup = document.querySelector('.close-popup');


btnPopupOpen.addEventListener('click', function(){
    popupBg.style.display = 'block'
});

closePopup.addEventListener('click', function(){
    popupBg.style.display = 'none'
});