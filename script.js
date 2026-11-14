var hamburger = document.querySelector('.hamburger')
var cross = document.querySelector('.cross')
var tntList = document.querySelector('.tnt-list')

function mobileButtonClick() {
    
    tntList.classList.toggle('show');

    if(tntList.classList.contains('show')) {
       hamburger.style.display = 'none';
       cross.style.display = 'block';
    }
    else {
 hamburger.style.display = 'block';
       cross.style.display = 'none';
    }

}