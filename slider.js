let btnPrev = document.querySelector('.btn-prev');
let btnNext = document.querySelector('.btn-next');
let imgArray = document.querySelector('.film-polosa').children;

console.log(imgArray);
console.log(imgArray.length);

let index = 0;
let count = 3;
let long = imgArray.length;
console.log(long);



btnNext.onclick = function(){
    if( long > count ){
    for(let i = 0; i < imgArray.length; i++) {
      imgArray[i].style.left = -250 + index + "px";
        }
        index+= -250;
        console.log(index);
        long--;
        btnPrev.disabled = false;
    }if(long == count){
        btnNext.disabled = true;
    }
}


    btnPrev.disabled = true;

    btnPrev.onclick= function(){
      console.log(index);
      if( long - count  <= count) {
        for(i = 0; i < imgArray.length; i++) {
            imgArray[i].style.left = index + 250 +'px';
           }
           index+= 250;
           long++;   
           btnNext.disabled = false;
       }if(index >=0){
        btnPrev.disabled = true;
       }
    }
       
    
      
        





